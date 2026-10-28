import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Shuffle } from 'lucide-react';
import { useApp } from '../state/app';
import { InterviewAnswer } from '../components/InterviewAnswer';
import { Button, PageHeader, Spinner } from '../components/ui';

export default function InterviewQuestionPage() {
  const { id = '' } = useParams();
  const { t, content } = useApp();
  const nav = useNavigate();
  const [saved, setSaved] = useState(false);
  if (!content) return <Spinner />;
  const q = content.interview.find((x) => x.id === id);
  if (!q) return <p>Not found</p>;
  const nextRandom = () => {
    const pool = content.interview.filter((x) => x.type === q.type && x.id !== q.id);
    const n = pool[Math.floor(Math.random() * pool.length)];
    setSaved(false);
    if (n) nav(`/interviews/q/${n.id}`);
  };
  return (
    <div className="animate-rise">
      <PageHeader back={`/interviews/list/${q.type}`} title={t('int.title')} />
      <InterviewAnswer key={q.id} q={q} mode="written" onSaved={() => setSaved(true)} />
      {saved && <Button full variant="secondary" className="mt-4" onClick={nextRandom}><Shuffle className="h-4 w-4" />{t('common.next')}</Button>}
    </div>
  );
}
