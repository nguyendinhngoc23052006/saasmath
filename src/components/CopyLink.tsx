import { useState } from 'react';

export function CopyLink({ label = 'Copy shareable link' }: { label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {
          // ignore
        }
      }}
      className="text-xs rounded-md border border-ink-200 bg-white px-2 py-1 text-ink-700 hover:border-accent-500"
    >
      {copied ? 'Copied' : label}
    </button>
  );
}
