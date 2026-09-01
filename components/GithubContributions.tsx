"use client";

import { useEffect, useMemo, useState } from "react";

type ContributionLevel = 0 | 1 | 2 | 3 | 4;

type Contribution = {
  date: string;
  count: number;
  level?: ContributionLevel;
};

type ApiResponse = {
  contributions?: Contribution[];
};

const LEVEL_COLORS: Record<ContributionLevel, string> = {
  0: "#161b22",
  1: "#0e4429",
  2: "#006d32",
  3: "#26a641",
  4: "#39d353",
};

const DAY_IN_MS = 1000 * 60 * 60 * 24;

function toLocalISODate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getContributionLevel(count: number): ContributionLevel {
  if (count <= 0) return 0;
  if (count <= 9) return 1;
  if (count <= 19) return 2;
  if (count <= 29) return 3;
  return 4;
}

export default function GithubContributions({ username }: { username: string }) {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!username) {
      setLoading(false);
      return;
    }

    let isMounted = true;

    const fetchContributions = async () => {
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        if (!res.ok) throw new Error("Failed to fetch GitHub contributions");

        const data = (await res.json()) as ApiResponse;
        const entries = Array.isArray(data.contributions) ? data.contributions : [];

        const normalized = entries.map((item) => ({
          ...item,
          count: Number(item.count ?? 0),
          level: item.level ?? getContributionLevel(Number(item.count ?? 0)),
        }));

        if (isMounted) setContributions(normalized);
      } catch (error) {
        if (isMounted) setContributions([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchContributions();

    return () => {
      isMounted = false;
    };
  }, [username]);

  const chart = useMemo(() => {
    if (!contributions.length) return [] as Array<Array<Contribution | null>>;

    const sorted = [...contributions].sort(
      (a, b) => new Date(`${a.date}T00:00:00`).getTime() - new Date(`${b.date}T00:00:00`).getTime(),
    );

    const firstDate = new Date(`${sorted[0].date}T00:00:00`);
    const lastDate = new Date(`${sorted[sorted.length - 1].date}T00:00:00`);

    const firstSunday = new Date(firstDate);
    firstSunday.setDate(firstDate.getDate() - firstDate.getDay());

    const lastSaturday = new Date(lastDate);
    lastSaturday.setDate(lastDate.getDate() + (6 - lastDate.getDay()));

    const totalDays = Math.round((lastSaturday.getTime() - firstSunday.getTime()) / DAY_IN_MS) + 1;
    const totalWeeks = Math.ceil(totalDays / 7);

    const monthMap = new Map(sorted.map((entry) => [entry.date, entry]));
    const weeks: Array<Array<Contribution | null>> = Array.from({ length: totalWeeks }, () =>
      Array.from({ length: 7 }, () => null),
    );

    for (let weekIndex = 0; weekIndex < totalWeeks; weekIndex += 1) {
      for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
        const currentDate = new Date(firstSunday);
        currentDate.setDate(firstSunday.getDate() + weekIndex * 7 + dayIndex);

        const key = toLocalISODate(currentDate);
        const match = monthMap.get(key);
        weeks[weekIndex][dayIndex] = match
          ? { ...match, level: match.level ?? getContributionLevel(match.count) }
          : null;
      }
    }

    return weeks;
  }, [contributions]);

  const monthLabels = useMemo(() => {
    const labels: Array<{ label: string; index: number }> = [];

    chart.forEach((week, index) => {
      const firstVisible = week.find((entry) => entry !== null);
      if (!firstVisible || !firstVisible.date) return;

      const monthLabel = new Date(`${firstVisible.date}T00:00:00`).toLocaleDateString("en-US", {
        month: "short",
      });

      if (labels.length === 0 || labels[labels.length - 1].label !== monthLabel) {
        labels.push({ label: monthLabel, index });
      }
    });

    return labels;
  }, [chart]);

  return (
    <div className="rounded-2xl border border-border bg-[#0d1117]/90 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="mb-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-sm text-slate-200">
          <span className="h-2.5 w-2.5 rounded-full bg-[#39d353] shadow-[0_0_12px_rgba(57,211,83,0.8)]" />
          <span className="font-medium">GitHub Contributions</span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
          @{username}
        </span>
      </div>

      {loading ? (
        <div className="flex h-36 items-center justify-center rounded-xl border border-dashed border-border bg-[#0d1117]/60 text-sm text-slate-400">
          Loading contributions...
        </div>
      ) : chart.length ? (
        <div className="overflow-x-auto pb-2">
          <div className="min-w-[720px]">
            <div
              className="mb-3 ml-9 grid gap-1 text-[10px] font-medium uppercase tracking-wide text-slate-400"
              style={{ gridTemplateColumns: `repeat(${chart.length}, minmax(10px, 1fr))` }}
            >
              {monthLabels.map((item) => (
                <span key={`${item.label}-${item.index}`} className="block" style={{ gridColumn: `${item.index + 1}` }}>
                  {item.label}
                </span>
              ))}
            </div>

            <div className="flex items-start gap-2">
              <div className="grid grid-rows-7 gap-1 pt-[2px] text-[10px] text-slate-500">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>

              <div
                className="grid gap-1"
                style={{ gridTemplateColumns: `repeat(${chart.length}, minmax(10px, 1fr))` }}
              >
                {chart.map((week, weekIndex) => (
                  <div key={`week-${weekIndex}`} className="grid grid-rows-7 gap-1">
                    {week.map((day, dayIndex) => {
                      const level = day?.level ?? 0;
                      const date = day?.date;
                      const count = day?.count ?? 0;
                      const fill = day ? LEVEL_COLORS[level] : "#161b22";

                      return (
                        <div
                          key={`${weekIndex}-${dayIndex}`}
                          title={date ? `${date}: ${count} contributions` : "No contributions"}
                          aria-label={date ? `${date}: ${count} contributions` : "No contributions"}
                          className="h-3 w-3 rounded-[3px] border border-[#0d1117] transition-transform duration-150 hover:scale-110"
                          style={{ backgroundColor: fill, opacity: date ? 1 : 0.25 }}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border bg-[#0d1117]/60 p-4 text-sm text-slate-400">
          No contribution data available for this username.
        </div>
      )}
    </div>
  );
}
