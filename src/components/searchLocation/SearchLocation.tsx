import { useDispatch } from "react-redux";
import { useLocation } from "../../hooks/useLocation";
import { setCity } from "../../store/appSlice";

const SearchLocation = () => {
  const {locations, onQueryChange } = useLocation();
  const dispatch = useDispatch();

  const setLocation = (location: any) => {
    dispatch(setCity({lat: location.lat, lon: location.lon}))
  }

  return (
    <form>
      <input type="text" name="locationSearch" list="locationsResult" onChange={onQueryChange} ></input>
        {/* <datalist id="locationsResult" >
        {locations?.map(location => 
          <option value={location.lat + " " + location.lon}>{location.name + ", " + location.state + ", " + location.country}</option>
        )}
        </datalist> */}
        <div>
         {locations?.map(location => 
          <div onClick={() => setLocation(location)}>{location.name + ", " + location.state + ", " + location.country}</div>
        )}
        </div>
    </form>
  );
}

export default SearchLocation;