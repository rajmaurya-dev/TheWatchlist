'use client'
import { SubmitHandler } from "react-hook-form"
import FormList from "../component/FormList"
import { FormInputList } from "@/types"
import BackButton from "../component/BackButton"


const CreateList = () => {
    const handleCreateList: SubmitHandler<FormInputList> = (data) => {
        console.log(data)
    }
    return (
        <div className="px-10">
            <BackButton />
            <h1 className="text-2xl my-4 font-bold text-center text-white">Create Watcthlist</h1>

            <FormList submit={handleCreateList} />
        </div>
    )
}

export default CreateList