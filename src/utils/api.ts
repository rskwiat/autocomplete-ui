// @todo debug this search endpoint
import { API_ENDPOINT } from "../constants/constants";

export const fetchRequest = async (value: string) => {
  try {
    const res = await fetch(`${API_ENDPOINT}?query=${value}`, {
      method: 'GET'
    });

    const data = await res.json();

    return {
      status: res.status,
      data
    };
  } catch (error) {
    console.error('Fetch error: ', error);
    throw error;
  }
}
