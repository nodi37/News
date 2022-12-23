import IArticle from "./IArtcile";

export interface IApiSuccessRes {
    status: 'ok',
    totalResults: number,
    articles: IArticle[]
}

export interface IApiErrorRes {
    status: "error",
    code: string,
    message: string
}

