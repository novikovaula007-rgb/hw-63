import {useCallback, useEffect, useState} from "react";
import axiosAPI from "../../axiosAPI.ts";
import {useParams} from "react-router-dom";
import type {IPostMutationAPI} from "../../types";
import PostForm from "../../components/PostForm/PostForm.tsx";
import Spinner from "../../components/UI/Spinner/Spinner.tsx";

const EditPost = () => {
    const [post, setPost] = useState<IPostMutationAPI | null>()
    const [loading, setLoading] = useState<boolean>()
    const {idPost} = useParams()

    const fetchPost = useCallback(async () => {
        try {
            setLoading(true)
            const response = await axiosAPI<IPostMutationAPI | null>(`/posts/${idPost}.json`);
            const responsePost = response.data
            if (responsePost) {
                setPost(responsePost)
            }
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }, [idPost])

    useEffect(() => {
        void fetchPost()
    }, [fetchPost]);

    let form = (post && idPost && <PostForm
        isEditing={true}
        initialValueForm={post}
        postID={idPost}
    />)

    if (loading) form = (<Spinner/>)

    return (
        <>
            {form}
        </>
    );
};

export default EditPost;