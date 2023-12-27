import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

interface contextProps {
  params: {
    watchlistId: number;
  };
}

export async function DELETE(req: NextRequest, context: contextProps) {
  try {
    const { params } = context;
    const id =
      typeof params.watchlistId === "string"
        ? parseInt(params.watchlistId)
        : params.watchlistId;
    console.log("type os 666", typeof id);
    const { userId } = auth();
    await db.watchlist.delete({
      where: {
        id: id,
        UserId: userId!,
      },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "could not delete watchlist", error },
      { status: 500 }
    );
  }
}
