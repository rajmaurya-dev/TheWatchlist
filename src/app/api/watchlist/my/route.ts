import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { userId } = auth();
    const watchlist = await db.watchlist.findMany({
      where: {
        UserId: userId!,
      },
    });
    return NextResponse.json(watchlist, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not get your watchlist" },
      { status: 500 }
    );
  }
}
