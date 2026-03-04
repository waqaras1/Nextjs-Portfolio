import { NextResponse } from "next/server";

// In-memory storage (for demo - use a database in production)
let viewCount = 1247; // Starting count

export async function GET() {
  return NextResponse.json({ views: viewCount });
}

export async function POST() {
  viewCount += 1;
  return NextResponse.json({ views: viewCount });
}
