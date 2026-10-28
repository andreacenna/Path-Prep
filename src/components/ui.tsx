import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export function Card({ children, className = '', as: As = 'div' }: { children: ReactNode; className?: string; as?: 'div' | 'section' | 'article' }) {
  return <As className={`rounded-2xl border border-white/5 bg-navy-850/80 p-4 shadow-lg shadow-black/20 ${className}`}>{children}</As>;
}

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success'; size?: 'sm' | 'md' | 'lg'; full?: boolean };

export function Button({ variant = 'primary', size = 'md', full, className = '', ...rest }: BtnProps) {
  const v = {
    primary: 'bg-electric-500 hover:bg-electric-600 text-white shadow-lg shadow-electric-500/20',
    secondary: 'bg-navy-700 hover:bg-navy-600 text-white border border-white/10',
    ghost: 'bg-transparent hover:bg-white/5 text-slate-200',
    danger: 'bg-rose-600 hover:bg-rose-700 text-white',
    success: 'bg-teal-500 hover:bg-teal-400 text-navy-950'
  }[variant];
  const s = { sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2.5', lg: 'px-5 py-3.5 text-lg' }[size];
  return (
    <button
      className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl font-semibold transition active:scale-[.98] disabled:cursor-not-allowed disabled:opacity-40 ${v} ${s} ${full ? 'w-full' : ''} ${className}`}
      {...rest}
    />
  );
}

export function ProgressBar({ value, className = '', color = 'bg-gradient-to-r from-electric-500 to-teal-400', label }: { value: number; className?: string; color?: string; label?: string }) {
  const pct = Math.max(0, Math.min(1, value)) * 100;
  return (
    <div className={`h-2 w-full overflow-hidden rounded-full bg-navy-700 ${className}`} role="progressbar" aria-valuenow={Math.round(pct)} aria-valuemin={0} aria-valuemax={100} aria-label={label ?? 'Progress'}>
      <div className={`h-full rounded-full transition-all duration-500 ${color}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

export function Ring({ value, size = 64, stroke = 7, children, label }: { value: number; size?: number; stroke?: number; children?: ReactNode; label?: string }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(1, value));
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }} role="img" aria-label={label}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} stroke="#1b2c52" strokeWidth={stroke} fill="none" />
        <circle cx={size / 2} cy={size / 2} r={r} stroke="url(#ringGrad)" strokeWidth={stroke} fill="none" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - pct)} className="transition-all duration-700" />
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2f7bff" />
            <stop offset="100%" stopColor="#2dd4bf" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  );
}

export function Chip({ children, tone = 'default', className = '' }: { children: ReactNode; tone?: 'default' | 'blue' | 'teal' | 'amber' | 'rose' | 'green' | 'muted'; className?: string }) {
  const tones = {
    default: 'bg-white/5 text-slate-300 border-white/10',
    blue: 'bg-electric-500/15 text-electric-300 border-electric-500/30',
    teal: 'bg-teal-500/15 text-teal-300 border-teal-500/30',
    amber: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    rose: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    green: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    muted: 'bg-transparent text-slate-400 border-white/10'
  }[tone];
  return <span className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full border px-2 py-0.5 text-xs font-medium ${tones} ${className}`}>{children}</span>;
}

export function PageHeader({ title, subtitle, back, right }: { title: string; subtitle?: string; back?: string; right?: ReactNode }) {
  return (
    <header className="mb-5 flex items-start gap-3">
      {back && (
        <Link to={back} className="-ml-2 mt-0.5 rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white" aria-label="Back">
          <ChevronLeft className="h-6 w-6" />
        </Link>
      )}
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-bold tracking-tight text-white">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
      </div>
      {right}
    </header>
  );
}

export function SectionTitle({ children, right }: { children: ReactNode; right?: ReactNode }) {
  return (
    <div className="mb-2 mt-6 flex items-center justify-between">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">{children}</h2>
      {right}
    </div>
  );
}

export function Empty({ children }: { children: ReactNode }) {
  return <p className="rounded-xl border border-dashed border-white/10 p-4 text-center text-sm text-slate-400">{children}</p>;
}

export function Spinner() {
  return <div className="mx-auto my-12 h-8 w-8 animate-spin rounded-full border-2 border-electric-500 border-t-transparent" role="status" aria-label="Loading" />;
}
