import { db } from "@/lib/db"
import PostCard from "../component/PostCard"
import { UserButton } from "@clerk/nextjs"
import { auth, currentUser } from "@clerk/nextjs";

const WatchList = async () => {
    const watchlist = await db.watchlist.findMany({
        include: {
            items: true
        }
    })


    return (
        <section>
            <div className="grid place-content-center md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-10">
                {watchlist.map((watchlist) => (
                    <PostCard
                        key={watchlist.id}
                        title={watchlist.title}
                        description={watchlist.description}
                        category={watchlist.category}
                        id={watchlist.id}
                    />

                ))}

            </div>
        </section>
    )
}

export default WatchList