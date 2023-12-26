import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const watchlist = await db.watchlist.findMany();
    return NextResponse.json(watchlist, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not get watchlist" },
      { status: 500 }
    );
  }
}
