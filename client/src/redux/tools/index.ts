import axios from 'axios';

export const getData = async <T>(url: string): Promise<T> => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (e: any) {
    console.log(e);
    throw e.response.data;
  }
};

export const editData = async (url: string, body: any) => {
  try {
    await axios.put(`${url}/${body.id}`, body);
    return true;
  } catch (e: any) {
    throw e.response.data;
  }
};

export const deleteData = async (url: string, id: number) => {
  try {
    await axios.delete(`${url}/${id}`);
    return true;
  } catch (e: any) {
    throw e.response.data;
  }
};

export const postData = async <T>(url: string, body: any): Promise<T> => {
  console.log(body);
  try {
    const { data } = await axios.post(url, body);
    return data;
  } catch (e: any) {
    throw e.response.data;
  }
};
