//ts-ignore
import axios from 'axios';
import { useWeatherData } from './useWeatherData';
import response from './../mock/weather_data.json'

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

jest.mock('axios', () => ({ get: jest.fn() }));

const mockAxios = axios as jest.Mocked<typeof axios>;
mockAxios.get.mockResolvedValue({ response });

describe('useWeatherData', () => {

  it('fetches weather data', async () => {
    const latitude = 50.5;
    const longitude = 30.5;
    const data = {
      city: {
        name: 'Kiev',
        sunset: 163123,
        sunrise: 163123,
        timezone: 10800,
        coord: {
          lat: 50.5,
          lon: 30.5,
        },
      },
      list: [],
      cnt: 40,
    };
    const select = jest.fn().mockReturnValue(data);
    const useQuery = jest.fn().mockReturnValue({
      data,
      isLoading: false,
      isSuccess: true,
      isError: false,
      error: null,
    });
    require('@tanstack/react-query').useQuery.mockImplementation(useQuery);

    const result = useWeatherData(latitude, longitude);

    // expect(useQuery).toHaveBeenCalledWith({
    //   queryKey: ['forecast', latitude, longitude],
    //   queryFn: mockAxios.get,
    //   select,
    // });
    expect(result).toEqual({
      weatherData: data,
      isLoading: false,
      isError: false,
      error: null,
      isSuccess: true,
    });
  })
});