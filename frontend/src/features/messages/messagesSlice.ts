import { createSlice } from '@reduxjs/toolkit';
import {Message} from '../../../../types'

interface MessagesState {
  items: Message[];
  fetchLoading: boolean;
}

const initialState: MessagesState = {
  items: [],
  fetchLoading: false,
}

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers:{}
})

export const messagesReducer = messagesSlice.reducer;