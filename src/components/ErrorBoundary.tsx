import { Component, type ReactNode } from 'react';

/** Shows a recoverable message instead of a blank screen if a page crashes. Progress is safe in IndexedDB. */
export class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div className="mx-auto max-w-md p-6 text-center text-slate-200">
        <h1 className="mb-2 text-xl font-bold">Something went wrong · Si è verificato un errore</h1>
        <p className="mb-4 text-sm text-slate-400">Your progress is saved. · I tuoi progressi sono salvati.</p>
        <pre className="mb-4 overflow-auto rounded bg-navy-850 p-2 text-left text-xs text-rose-300">{this.state.error.message}</pre>
        <button className="rounded-xl bg-electric-500 px-4 py-2 font-semibold" onClick={() => { this.setState({ error: null }); location.hash = '#/'; }}>Home</button>
      </div>
    );
  }
}
