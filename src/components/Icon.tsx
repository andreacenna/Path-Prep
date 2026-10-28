import {
  Award, BookMarked, BookOpenCheck, Briefcase, Building2, CalendarCheck, CheckCheck, Compass, Flag, Flame, Gem, Handshake,
  Landmark, Layers, Library, LineChart, MessagesSquare, Mic, Newspaper, NotebookPen, Scale, Sheet, Target, Timer, TrendingUp,
  Trophy, Zap, Home, GraduationCap, Dumbbell, User, Circle, type LucideIcon
} from 'lucide-react';

// Explicit map keeps the bundle small (no import-all of lucide).
const MAP: Record<string, LucideIcon> = {
  Award, BookMarked, BookOpenCheck, Briefcase, Building2, CalendarCheck, CheckCheck, Compass, Flag, Flame, Gem, Handshake,
  Landmark, Layers, Library, LineChart, MessagesSquare, Mic, Newspaper, NotebookPen, Scale, Sheet, Target, Timer, TrendingUp,
  Trophy, Zap, Home, GraduationCap, Dumbbell, User
};

export function Icon({ name, className = 'w-5 h-5', strokeWidth = 2 }: { name: string; className?: string; strokeWidth?: number }) {
  const C = MAP[name] ?? Circle;
  return <C className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
