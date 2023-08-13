import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getGames = createAsyncThunk("data/getGames", async () => {
	const response = await axios.get(
		"https://extinct-leather-jacket-bee.cyclic.app/data"
	);
	const { data } = response;

	return data;
});

export const dataSlice = createSlice({
	name: "data",
	initialState: {
		games: [],
		loading: false,
		slotList: [
			["cherry", "grapes", "apple", "grapes", "banana", "banana", "grapes", "grapes"],
			["grapes", "apple", "grapes", "grapes", "cherry", "apple", "banana", "grapes"],
			["grapes", "apple", "grapes", "apple", "cherry", "grapes", "banana", "grapes"]
		]
	},
	reducers: {

	},
	extraReducers: {
		[getGames.fulfilled]: (state, action) => {
			state.games = action.payload;
			state.loading = false
		},
		[getGames.rejected]: (state, action) => {
			state.loading = false
		},
		[getGames.pending]: (state, action) => {
			state.loading = true
		},
	},

});

export const {
} = dataSlice.actions;

export default dataSlice.reducer;
