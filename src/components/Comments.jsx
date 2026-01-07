import { Loader, SendHorizontal } from 'lucide-react'
import React, { useState } from 'react'
import { db, id } from '../db/instant';


const Comments = ({ imgid }) => {
    const [comment, setComment] = useState("");
    const [disable, setIsDisable] = useState(false);
    const [loading, setLoading] = useState(false)
    let storeUserId = localStorage.getItem("userId");

    // handelOnchange logic here...
    const handelOnchange = (e) => {
        const value = e.target.value;
        setComment(value)
        if (value) {
            setIsDisable(true)
        }
        else {
            setIsDisable(false)
        }
    }
    const newCommentId = id();
    const newFeedId = id();
    // handleComment logic here...
    const handleComment = async () => {
        if (!comment.trim()) return;
        try {
            setLoading(true);
            await db.transact(
                [
                    db.tx.comments[newCommentId].update({
                    imageId: imgid,
                    userId: storeUserId,
                    text: comment,
                    createdAt: new Date().toISOString()
                }),
                db.tx.feed[newFeedId].update({
                    type: "comment",
                    imageId: imgid,
                    userId: storeUserId,
                    text: comment,
                    createdAt: new Date().toISOString()
                })
            ]);
            setComment("");
            setIsDisable(false);
        } catch (error) {
            console.error("comment error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handelKeyDown = (e) => {
        if (e.key === "Enter") {
            handleComment()
        }
    }

    return (
        <>
            <div className='w-full max-w-md rounded-2xl shadow-md p-4 relative'>
                <input type="text" placeholder='Enter your commnet...' className='px-2 py-3 rounded-2xl shadow w-full border border-gray-500 outline-0' value={comment} onChange={handelOnchange} onKeyDown={handelKeyDown} />
                {
                    !loading && disable && <SendHorizontal onClick={handleComment} className="text-blue-700 cursor-pointer absolute top-6 right-7" />
                }
                {
                    loading && <Loader className="text-blue-700 animate-pulse cursor-pointer absolute top-6 right-7" />
                }
            </div>
        </>
    )
}

export default Comments
