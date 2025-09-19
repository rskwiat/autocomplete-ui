// @todo debug this search endpoint

import axios from "axios"
import { API_ENDPOINT } from "../constants/constants";

export const api = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: false,
});