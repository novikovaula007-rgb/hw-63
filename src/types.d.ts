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

export interface IPostMutationAPI {
    title: string,
    text: string,
    date: string
}

export interface IPostAPI {
    [key: string]: IPostMutationAPI,
}

