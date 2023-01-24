import { createAsyncThunk } from "@reduxjs/toolkit";
import { Message } from "../../../../types";
import { RootState } from "../../app/store";
import axiosApi from "../../axiosApi";

export const fetchMessages = createAsyncThunk<
  Message[],
  undefined,
  { state: RootState }
>("messages/fetchAll", async (_, ThunkAPI) => {
  const datetime = ThunkAPI.getState().messages.datetime;
  const { data } = await axiosApi.get<Message[] | null>(
    `/messages?datetime=${datetime}`
  );

  return data ? data : [];
});