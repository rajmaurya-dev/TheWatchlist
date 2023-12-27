import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
export async function POST(req: NextRequest) {
  try {
    console.log("first");
    const { userId } = auth();
    console.log(userId);
    const body = await req.json();
    console.log("body", body);
    const watchlist = await db.watchlist.create({
      data: {
        title: body.title,
        description: body.description,
        category: body.category,
        UserId: userId!,
      },
    });
    return NextResponse.json(watchlist, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong!", error },
      { status: 500 }
    );
  }
}
