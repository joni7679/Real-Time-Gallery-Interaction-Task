import { nanoid } from "nanoid"

export const CreateRandomUser = ()=>{
    return  `user_ ${nanoid(7)}`
}

