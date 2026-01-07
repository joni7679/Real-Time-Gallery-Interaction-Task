import { createContext, useMemo } from "react";
import { db } from "../db/instant";


export const DataContext = createContext();
const DataContextProvider = ({ children }) => {
    const { data: commentData } = db.useQuery({ comments: {} })
    const { data: reactionData } = db.useQuery({ reactions: {} })
    const { data: feedData } = db.useQuery({ feed: {} })

    const commentCountByImage = useMemo(() => {
        const map = {};
        commentData?.comments?.forEach((com) => {
            map[com.imageId] = (map[com.imageId] || 0) + 1;
        })
        return map
    }, [commentData])

    const storeFeedData = useMemo(() => {
        return (feedData?.feed || [].slice().sort(
            (a, b) => b.b.createdAt - a.createdAt
        ))
    },[feedData])

    return <DataContext.Provider value={{ comments: commentData?.comments || [], commentCountByImage, feed: storeFeedData }}>
        {children}
    </DataContext.Provider>
}



export default DataContextProvider