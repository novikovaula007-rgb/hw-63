import type {IPostForm, IPostMutationAPI} from "../../types";
import {Button, Grid, TextField, Typography} from "@mui/material";
import {useState} from "react";
import SaveIcon from '@mui/icons-material/Save';
import React from "react";
import axiosAPI from "../../axiosAPI.ts";
import dayjs from "dayjs";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const initialForm = {
    title: '',
    text: '',
    date: '',
}

interface Props {
    isEditing?: boolean,
    initialValueForm?: IPostMutationAPI,
    postID?: string,
}

const PostForm: React.FC<Props> = ({isEditing = false, initialValueForm = initialForm, postID}) => {
    const initial: IPostForm = {
        title: initialValueForm.title,
        text: initialValueForm.text,
    }

    const [form, setForm] = useState<IPostForm>(initial)
    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate()

    const onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target
        setForm(prevState => ({...prevState, [name]: value}))
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if (form.title.trim().length > 0 && form.text.trim().length > 0) {
                setLoading(true)
                const datePost = dayjs(Date.now()).format('DD.MM.YYYY (dddd) - HH:mm')
                if (isEditing && postID && initialValueForm) {
                    await axiosAPI.put(`/posts/${postID}.json`, {...form, date: initialValueForm.date})
                } else {
                    await axiosAPI.post('/posts.json', {...form, date: datePost})
                }
                toast.success(`Post ${isEditing ? 'edited' : 'added'} successfully!`)
                navigate('/')
                setForm(initialForm)
            } else {
                toast.error('You need fill all fields')
            }
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <Typography variant='h4' sx={{textAlign: 'center'}}>
                {isEditing ? 'Edit' : 'Add'} post
            </Typography>
            <Grid container spacing={2} sx={{mx: 'auto', width: '50%', mt: 4}}>
                <Grid size={12}>
                    <TextField
                        sx={{width: '100%'}}
                        variant='outlined'
                        name='title'
                        label='Title'
                        disabled={loading}
                        value={form.title}
                        onChange={onChangeField}
                    />
                </Grid>

                <Grid size={12}>
                    <TextField
                        sx={{width: '100%'}}
                        variant='outlined'
                        disabled={loading}
                        minRows={3}
                        name='text'
                        label='Text'
                        value={form.text}
                        onChange={onChangeField}
                    />
                </Grid>

                <Grid size={12}>
                    <Button
                        fullWidth
                        type='submit'
                        loading={loading}
                        loadingPosition='end'
                        variant='outlined'
                        endIcon={<SaveIcon/>}>
                        {isEditing ? 'Edit' : 'Add'}
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default PostForm;