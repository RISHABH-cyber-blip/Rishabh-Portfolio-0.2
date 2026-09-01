import { NextRequest, NextResponse } from "next/server";

// Uses the free, unofficial github-contributions-api (jogruber.de) to fetch
// real contribution-calendar data server-side, avoiding CORS issues and
// keeping any future auth token off the client. No API key required.
export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get("username");
  if (!username || username.startsWith("[")) {
    return NextResponse.json({ error: "Set a real GitHub username in lib/data.ts" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`, {
      next: { revalidate: 3600 }, // cache for 1 hour
    });
    if (!res.ok) throw new Error("Upstream fetch failed");
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Could not fetch contributions" }, { status: 502 });
  }
}
