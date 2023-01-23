import { createSlice } from "@reduxjs/toolkit";
import { Message } from "../../../../types";
import { RootState } from "../../app/store";

interface MessagesState {
  items: Message[];
  fetchLoading: boolean;
}

const initialState: MessagesState = {
  items: [],
  fetchLoading: false,
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
});

export const messagesReducer = messagesSlice.reducer;
export const selectMessages = (state: RootState) => state.messages.items;
export const selectMessagesFetching = (state: RootState) =>
  state.messages.fetchLoading;