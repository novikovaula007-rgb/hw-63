export interface IPost {
    id: string,
    title: string,
    date: string,
    text: string,
}

export interface IPostForm {
    title: string,
    text: string,
}

export interface IPostAPI {
    [key: string]: {
        title: string,
        text: string,
        date: string
    },
}