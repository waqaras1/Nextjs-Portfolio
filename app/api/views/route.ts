import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function GET() {
  try {
    const views = await kv.get<number>("portfolio-views") || 1247;
    return NextResponse.json({ views });
  } catch (error) {
    console.error("Error fetching views:", error);
    // Fallback to default count if KV is not configured
    return NextResponse.json({ views: 1247 });
  }
}

export async function POST() {
  try {
    const views = await kv.incr("portfolio-views");
    return NextResponse.json({ views });
  } catch (error) {
    console.error("Error incrementing views:", error);
    // Fallback to default count if KV is not configured
    return NextResponse.json({ views: 1247 });
  }
}
