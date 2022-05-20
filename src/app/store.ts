import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import meteoReducer from '../features/meteo/meteoSlice';

export const store = configureStore({
  reducer: {
    meteo: meteoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
