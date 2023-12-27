'use client'
import { SubmitHandler } from "react-hook-form"
import FormList from "../component/FormList"
import { FormInputList } from "@/types"
import BackButton from "../component/BackButton"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"


const CreateList = () => {
    const router = useRouter()
    const handleCreateList: SubmitHandler<FormInputList> = (data) => {
        createWatchlist(data)
        console.log(data)
    }

    const { mutate: createWatchlist, isPending } = useMutation({
        mutationFn: (newWatchlist: FormInputList) => {
            return axios.post('/api/watchlist/create', newWatchlist)
        },
        onError: (error) => {
            console.log(error)
        },
        onSuccess: () => {
            router.push('/watchlists')
            router.refresh()
        }
    })

    return (
        <div className="px-10">
            <BackButton />
            <h1 className="text-2xl my-4 font-bold text-center text-white">Create Watcthlist</h1>

            <FormList submit={handleCreateList} />
        </div>
    )
}

export default CreateList