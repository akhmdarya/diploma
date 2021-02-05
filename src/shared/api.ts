import axios from "axios";
import { Article, Info } from "./types";
export const getCheckResult = (url: string) => {
    return axios.get<Info[]>(`http://localhost:4400/parse?url=${url}`)
//          return axios.get<Info>(`http://localhost:4400/parse?url=dl.iitu.kz`)
}

    // export const getArticle = (id: string) => {
    //     return axios.get<Article>(`https://media-api.dar-dev.zone/api/articles/${id}`)
    // }


