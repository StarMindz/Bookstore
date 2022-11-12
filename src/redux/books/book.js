import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const fetchBooks = createAsyncThunk('books/fetchBooks', () => axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fVmzz756dK4s0HdKrZVY/books')
  .then((response) => {
    const books = response.data;
    const data = Object.keys(books).map((id) => ({
      id: Number(id),
      title: books[id][0].title,
      author: books[id][0].author,
      category: books[id][0].category,
    }));
    return data;
  }),);

export const addBook = createAsyncThunk('books/addBooks', (book) => {
  axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fVmzz756dK4s0HdKrZVY/books', book)
    .then((response) => response.status).then((data) => {
      window.location.reload();
      return data;
    });
});

export const removeBooks = createAsyncThunk('books/removeBooks', (id) => {
  axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fVmzz756dK4s0HdKrZVY/books/${id}`)
    .then((response) => {
      window.location.reload();
      return response.data;
    });
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => action.payload);
  },
});

export default booksSlice.reducer;
