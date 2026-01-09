import {useCallback, useEffect, useState} from "react";
import axiosAPI from "../../axiosAPI.ts";
import type {IPost, IPostAPI} from "../../types";
import Spinner from "../../components/UI/Spinner/Spinner.tsx";
import Button from "../../components/UI/Button/Button.tsx";
import {NavLink} from "react-router-dom";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

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

            {!loading && posts.length === 0 && <p>No posts yet</p>}

            {!loading && posts.length > 0 &&
                <div>
                    <div style={
                        {
                            display: 'flex',
                            flexDirection: 'column', gap: '10px'
                        }
                    }>
                        {posts.map((post) => (
                            <div style={
                                {
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                    borderColor: 'gray',
                                    padding: '15px',
                                    width: '500px'
                                }
                            }
                                 key={post.id}>

                                <p style={
                                    {
                                        color: 'gray',
                                        margin: 0
                                    }
                                }>Created on: {post.date}</p>

                                <h2 style={{margin: '7px 0'}}>{post.title}</h2>

                                <NavLink to={`/posts/${post.id}`}>
                                    <Button>Read more <ArrowRightIcon/></Button>
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>}
        </div>
    );
};

export default Home;