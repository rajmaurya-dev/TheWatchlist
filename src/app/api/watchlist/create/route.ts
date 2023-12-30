import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
export async function POST(req: NextRequest) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const watchlist = await db.watchlist.create({
      data: {
        title: body.title,
        description: body.description,
        isPublic: Boolean(body.isPublic),
        category: body.category,
        UserId: userId!,
      },
    });
    console.log(watchlist);
    return NextResponse.json(watchlist, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong!", error },
      { status: 500 }
    );
  }
}
