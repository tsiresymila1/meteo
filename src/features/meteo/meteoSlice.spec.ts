import { AnyAction } from '@reduxjs/toolkit';
import meteoReducer, {
    MeteoState,
    getWeatherAsync
  } from './meteoSlice';
  
  describe('counter reducer', () => {
    const initialState: MeteoState = {
      weather: undefined,
      status: 'idle',
    };
    it('should handle initial state', () => {
      expect(meteoReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });
  
  });
  