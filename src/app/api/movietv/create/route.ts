import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { parse } from "path";
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const content = await db.movieTv.create({
      data: {
        MovieId: body.movieId,
        status: body.status,
        rating: parseFloat(body.rating),
        watchlist: {
          connect: {
            id: parseInt(body.watchlist),
          },
        },
      },
    });
    return NextResponse.json(content, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong!", error },
      { status: 500 }
    );
  }
}
