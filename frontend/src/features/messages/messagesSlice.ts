import { createSlice } from "@reduxjs/toolkit";
import { Message } from "../../../../types";
import { RootState } from "../../app/store";
import { fetchMessages, sendMessage } from "./messagesThunk";

interface MessagesState {
  items: Message[];
  fetchLoading: boolean;
  datetime: string;
  sending: boolean;
}

const initialState: MessagesState = {
  items: [],
  fetchLoading: false,
  datetime: "",
  sending: false,
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.fetchLoading = true;
      })
      .addCase(fetchMessages.fulfilled, (state, { payload: messages }) => {
        state.fetchLoading = false;
        state.datetime = messages[messages.length - 1].datetime;
        state.items = [...state.items, ...messages];
        state.items.sort((a, b) =>
          new Date(a.datetime) > new Date(b.datetime) ? -1 : 1
        );
      })
      .addCase(fetchMessages.rejected, (state) => {
        state.fetchLoading = false;
      })
      .addCase(sendMessage.pending, (state) => {
        state.sending = true;
      })
      .addCase(sendMessage.fulfilled, (state) => {
        state.sending = false;
      })
      .addCase(sendMessage.rejected, (state) => {
        state.sending = false;
      });
  },
});

export const messagesReducer = messagesSlice.reducer;
export const selectMessages = (state: RootState) => state.messages.items;
export const selectMessagesFetching = (state: RootState) =>
  state.messages.fetchLoading;
export const selectDatetime = (state: RootState) => state.messages.datetime;
export const selectMessageSending = (state: RootState) =>
  state.messages.sending;