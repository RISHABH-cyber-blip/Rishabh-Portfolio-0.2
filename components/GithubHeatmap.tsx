"use client";

import { useEffect, useState } from "react";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const levelColor = [
  "bg-white/5",
  "bg-accent/25",
  "bg-accent/50",
  "bg-accent/75",
  "bg-accent shadow-[0_0_8px_#00E5FF]",
];

export default function GithubHeatmap({ username }: { username: string }) {
  const [days, setDays] = useState<Day[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch(`/api/github-contributions?username=${username}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        const now = new Date();
        const thisMonth = (data.contributions as Day[]).filter((d) => {
          const dt = new Date(d.date);
          return dt.getMonth() === now.getMonth() && dt.getFullYear() === now.getFullYear();
        });
        setDays(thisMonth);
      })
      .catch(() => setFailed(true));
  }, [username]);

  // Fallback placeholder pattern so the widget still looks alive before you
  // set a real username, or if the upstream API is unreachable.
  const placeholder: Day[] = Array.from({ length: new Date().getDate() }, (_, i) => ({
    date: String(i),
    count: 0,
    level: [0, 0, 1, 2, 3, 4][Math.floor(Math.random() * 6)] as Day["level"],
  }));

  const data = days ?? placeholder;

  return (
    <div className="glass p-6">
      <div className="mb-4 flex items-center justify-between border-b border-border pb-3.5">
        <div className="flex items-center gap-2.5 text-sm text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_#00E5FF]" />
          <span className="font-mono">@{username}</span>
        </div>
        <span className="font-mono text-[11px] text-faint">
          {failed ? "DEMO PATTERN" : "THIS MONTH"}
        </span>
      </div>
      <div className="grid grid-cols-10 gap-1.5">
        {data.map((d, i) => (
          <div key={i} className={`aspect-square rounded-[3px] ${levelColor[d.level]}`} title={`${d.date}: ${d.count} contributions`} />
        ))}
      </div>
    </div>
  );
}
