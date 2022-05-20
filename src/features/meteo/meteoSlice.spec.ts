import meteoReducer, {
    MeteoState,
  } from './meteoSlice';
  
  describe('meteo reducer', () => {
    const initialState: MeteoState = {
      weather: undefined,
      status: 'idle',
    };
    it('should handle initial state', () => {
      expect(meteoReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });
  
  });
  