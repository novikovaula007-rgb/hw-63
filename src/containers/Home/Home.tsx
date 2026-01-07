import {useCallback, useEffect, useState} from "react";
import axiosAPI from "../../axiosAPI.ts";
import type {IPost, IPostAPI} from "../../types";
import Spinner from "../../components/UI/Spinner/Spinner.tsx";

const Home = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [posts, setPosts] = useState<IPost[]>([])

    const fetchPosts = useCallback(async () => {
        try {
            setLoading(true)
            const response = await axiosAPI<IPostAPI | null>('/posts.json');
            const postsObject = response.data;

            if (postsObject) {
                const postsArray = Object.keys(postsObject).map(idPost => {
                    return {
                        ...postsObject[idPost],
                        id: idPost
                    }
                })
                setPosts(postsArray)
            }
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        void fetchPosts()
    }, [fetchPosts]);

    return (
        <div>
            {loading && <Spinner/>}

            {!loading && !posts && <p>No posts yet</p>}

            {!loading && posts.length > 0 &&
                <div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        {posts.map((post) => (
                            <div style={{border: '1px solid black', borderRadius: '5px', borderColor: 'gray', padding: '10px', width: '500px'}}>
                                <p style={{color: 'gray'}}>Created on: {post.date}</p>
                                <p>{post.title}</p>
                            </div>
                        ))}
                    </div>
                </div>}
        </div>
    );
};

export default Home;