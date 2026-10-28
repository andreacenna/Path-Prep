import { db, type PathDB } from '../db/db';

export const BACKUP_FORMAT = 'path-academy-backup';
export const BACKUP_VERSION = 1;

// Audio recordings are excluded from backups (size + privacy); everything else is included.
const TABLES = ['settings', 'lessonProgress', 'attempts', 'cards', 'reviewLogs', 'xp', 'achievements', 'interviewAttempts', 'stories', 'cv', 'newsQuiz'] as const;
type TableName = (typeof TABLES)[number];

export interface BackupFile {
  format: typeof BACKUP_FORMAT;
  version: number;
  exportedAt: string;
  data: Record<TableName, unknown[]>;
}

export async function exportBackup(database: PathDB = db): Promise<BackupFile> {
  const data = {} as Record<TableName, unknown[]>;
  for (const t of TABLES) data[t] = await database.table(t).toArray();
  // Interview attempts may reference recordings that are not exported.
  data.interviewAttempts = (data.interviewAttempts as { audioId?: number }[]).map(({ audioId: _a, ...rest }) => rest);
  return { format: BACKUP_FORMAT, version: BACKUP_VERSION, exportedAt: new Date().toISOString(), data };
}

export function validateBackup(obj: unknown): obj is BackupFile {
  if (!obj || typeof obj !== 'object') return false;
  const b = obj as BackupFile;
  if (b.format !== BACKUP_FORMAT || typeof b.version !== 'number' || b.version > BACKUP_VERSION) return false;
  if (!b.data || typeof b.data !== 'object') return false;
  return TABLES.every((t) => b.data[t] === undefined || Array.isArray(b.data[t]));
}

/** Replace all local data with the backup contents (atomic). */
export async function importBackup(obj: unknown, database: PathDB = db): Promise<void> {
  if (!validateBackup(obj)) throw new Error('invalid-backup');
  await database.transaction('rw', TABLES.map((t) => database.table(t)), async () => {
    for (const t of TABLES) {
      await database.table(t).clear();
      const rows = obj.data[t];
      if (rows?.length) await database.table(t).bulkAdd(rows as never[]);
    }
  });
}

export async function deleteAllData(database: PathDB = db): Promise<void> {
  await database.transaction('rw', database.tables, async () => {
    for (const t of database.tables) await t.clear();
  });
}

export function downloadJSON(obj: unknown, filename: string) {
  const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
