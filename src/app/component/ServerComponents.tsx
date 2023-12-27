import { db } from "@/lib/db"
import { useAuth } from "@clerk/nextjs"

export const getUserWatchlists = async () => {
    const { userId } = useAuth()
    const watchlists = await db.watchlist.findMany({
        where: {
            UserId: userId!
        }
    })
    return watchlists
}