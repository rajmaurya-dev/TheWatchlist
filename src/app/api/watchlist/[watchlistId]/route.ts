import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

interface contextProps {
  params: {
    watchlistId: string;
  };
}

export async function DELETE(req: NextRequest, context: contextProps) {
  try {
    const { params } = context;

    const { userId } = auth();

    await db.watchlist.delete({
      where: {
        id: params.watchlistId,
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
