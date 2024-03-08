import { screen } from '@testing-library/react';
import Weather from './Weather';
import { renderWithProviders } from '../../utils/testRendererWithProviders';

describe('Weather', () => {
  it('renders loading state', () => {
    renderWithProviders(<Weather lat={50} lon={34} />);
    expect(screen.getByText(/Loading .../i)).toBeInTheDocument();
  });

  // it('loads data from custom hook', async () => {
  //   const { result } = renderHook(() => useWeatherData(50, 34), { wrapper });
  //   await waitFor(() => expect(result.current.isSuccess).toBe(true));

  // });
});