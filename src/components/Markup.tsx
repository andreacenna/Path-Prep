import { Fragment, type ReactNode } from 'react';

/** Renders the light markup used in content: **bold**, `code`, "- " bullets, blank-line paragraphs. */
function inline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) return <strong key={i} className="font-semibold text-white">{p.slice(2, -2)}</strong>;
    if (p.startsWith('`') && p.endsWith('`')) return <code key={i} className="rounded bg-navy-700 px-1 py-0.5 font-mono text-[0.9em] text-teal-300">{p.slice(1, -1)}</code>;
    return <Fragment key={i}>{p}</Fragment>;
  });
}

export function Markup({ text, className = '' }: { text: string; className?: string }) {
  const blocks = text.split(/\n\s*\n/);
  return (
    <div className={`space-y-3 leading-relaxed text-slate-200 ${className}`}>
      {blocks.map((block, bi) => {
        const lines = block.split('\n');
        const isList = lines.every((ln) => /^\s*[-•]\s+/.test(ln) || !ln.trim());
        if (isList) {
          return (
            <ul key={bi} className="space-y-1.5">
              {lines.filter((ln) => ln.trim()).map((ln, li) => (
                <li key={li} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                  <span>{inline(ln.replace(/^\s*[-•]\s+/, ''))}</span>
                </li>
              ))}
            </ul>
          );
        }
        // mixed paragraph + bullets
        const out: ReactNode[] = [];
        let bullets: string[] = [];
        const flush = () => {
          if (bullets.length) {
            out.push(
              <ul key={`u${out.length}`} className="space-y-1.5">
                {bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                    <span>{inline(b)}</span>
                  </li>
                ))}
              </ul>
            );
            bullets = [];
          }
        };
        lines.forEach((ln, i) => {
          if (/^\s*[-•]\s+/.test(ln)) bullets.push(ln.replace(/^\s*[-•]\s+/, ''));
          else {
            flush();
            if (ln.trim()) out.push(<p key={`p${i}`}>{inline(ln)}</p>);
          }
        });
        flush();
        return <div key={bi} className="space-y-2">{out}</div>;
      })}
    </div>
  );
}
