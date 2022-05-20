import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Meteo } from './meteo.types';
import { fetchWeather } from './meteoAPI';

export interface MeteoState {
  weather?: Meteo;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: MeteoState = {
  weather: undefined,
  status: 'idle',
};

export const getWeatherAsync = createAsyncThunk(
  'meteo/fetchWeather',
  async (city: string) => {
    const response = await fetchWeather(city);
    return await response.json();
  }
);

export const MeteoSlice = createSlice({
  name: 'meteo',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getWeatherAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.weather = action.payload;
      })
      .addCase(getWeatherAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});


export default MeteoSlice.reducer;
