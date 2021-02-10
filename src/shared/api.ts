import axios from "axios";
import {  Info } from "./types";
export const getCheckResult = (url: string) => {
  
    return axios.get<Info[]>(`http://localhost:4400/parse?url=${url}`)
//          return axios.get<Info>(`http://localhost:4400/parse?url=dl.iitu.kz`)
}

