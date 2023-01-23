import { createAsyncThunk } from "@reduxjs/toolkit";
import { Message } from "../../../../types";
import axiosApi from "../../axiosApi";

export const fetchMessages = createAsyncThunk<Message[], string>(
  "messages/fetchAll",
  async (datetime) => {
    const { data } = await axiosApi.get(`/messages?datetime=${datetime}`);
    return data;
  }
);