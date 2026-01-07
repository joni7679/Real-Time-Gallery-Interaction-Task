import { Loader, SendHorizontal } from 'lucide-react'
import React, { useState } from 'react'
import { db } from '../db/instant';
import { id } from "@instantdb/react";

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

    // handleComment logic here...
    const handleComment = async () => {
        if (!comment.trim()) return;

        try {
            setLoading(true);
            await db.transact(
                db.tx.comments[id()].update({
                    imageId: imgid,
                    userId: storeUserId,
                    text: comment,
                    createdAt: Date.now().toLocaleString()
                }),
                db.tx.feed[id()].update({
                    type: "comment",
                    imageId: imgid,
                    userId: storeUserId,
                    text: comment,
                    createdAt: Date.now().toLocaleString()
                })
            );

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
                    !loading && disable && <SendHorizontal onClick={handleComment} className="text-blue-700 cursor-pointer absolute top-[24px] right-[28px]" />
                }
                {
                    loading && <Loader className="text-blue-700 animate-pulse cursor-pointer absolute top-[24px] right-[28px]" />

                }
            </div>
        </>
    )
}

export default Comments
