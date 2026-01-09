import {NavLink, useNavigate, useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import type {IPostMutationAPI} from "../../types";
import axiosAPI from "../../axiosAPI.ts";
import Spinner from "../../components/UI/Spinner/Spinner.tsx";
import Button from "../../components/UI/Button/Button.tsx"
import {toast} from "react-toastify";

const PostItem = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [post, setPost] = useState<IPostMutationAPI | null>()
    const navigate = useNavigate()

    const {idPost} = useParams()

    const deletePost = useCallback(async () => {
        try {
            await axiosAPI.delete(`/posts/${idPost}.json`);
            navigate('/')
            toast.success('Post successfully deleted')
        } catch (e) {
            console.error(e)
        }
    }, [idPost, navigate])

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

    return (
        <div>
            {loading && <Spinner/>}

            {!loading && !post && <p>This post does not exist</p>}

            {!loading && post &&
                <div style={
                    {
                        border: '1px solid black',
                        borderRadius: '5px',
                        borderColor: 'gray',
                        padding: '15px',
                        width: '500px'
                    }
                }>
                    <p style={
                        {
                            color: 'gray',
                            margin: 0
                        }
                    }>Created on: {post.date}</p>

                    <h2 style={{margin: '7px 0'}}>{post.title}</h2>
                    <p>{post.text}</p>

                    <div style={{display: 'flex', gap: '10px'}}>
                        <NavLink to={`/posts/${idPost}/edit`}>
                            <Button>Edit</Button>
                        </NavLink>

                        <div onClick={deletePost}><Button>Delete</Button></div>
                    </div>

                </div>
            }
        </div>
    );
};

export default PostItem;