import type {IPostForm} from "../../types";
import {Button, Grid, TextField, Typography} from "@mui/material";
import {useState} from "react";
import SaveIcon from '@mui/icons-material/Save';
import React from "react";

const initialForm = {
    title: '',
    text: '',
}

const PostForm = () => {
    const [form, setForm] = useState<IPostForm>(initialForm)

    const onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target
        setForm(prevState => ({...prevState, [name]: value}))
    }

    return (
        <form>
            <Typography variant='h4' sx={{textAlign: 'center'}}>
                Add post
            </Typography>
            <Grid container spacing={2} sx={{mx: 'auto', width: '50%', mt: 4}}>
                <Grid size={12}>
                    <TextField
                        sx={{width: '100%'}}
                        variant='outlined'
                        name='title'
                        label='Title'
                        value={form.title}
                        onChange={onChangeField}
                    />
                </Grid>

                <Grid size={12}>
                    <TextField
                        sx={{width: '100%'}}
                        variant='outlined'
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
                        loadingPosition='end'
                        endIcon={<SaveIcon/>}
                    />
                </Grid>
            </Grid>
        </form>
    );
};

export default PostForm;