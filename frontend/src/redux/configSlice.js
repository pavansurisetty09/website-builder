import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  config: null,
  status: "idle",
  error: null,
};

export const fetchConfig = createAsyncThunk("config/fetchConfig", async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/config");
    console.log("Fetch Config Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Fetch Config Error:", error);
    throw error;
  }
});

export const updateConfig = createAsyncThunk(
  "config/updateConfig",
  async (config) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/config/${config._id}`,
        config
      );
      console.log("Update Config Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Update Config Error:", error);
      throw error;
    }
  }
);

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchConfig.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchConfig.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.config = action.payload;
      })
      .addCase(fetchConfig.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateConfig.fulfilled, (state, action) => {
        state.config = action.payload;
      });
  },
});

export default configSlice.reducer;
