import { useCallback, useState } from "react";
import { useLocation } from "../../hooks/useLocation";
import { useDispatch } from "react-redux";
import { setCity } from "../../store/appSlice";



const SearchLocation = () => {
  const [selected, setSelected] = useState()
  const {locations, onQueryChange, isError, isLoading, isSuccess} = useLocation();

  return (
    <form>
      <input type="text" name="locationSearch" list="locationsResult" onChange={onQueryChange} ></input>
        <datalist id="locationsResult" >
        {locations?.map(location => 
          <option onClick={(value) => console.log("values", value)} value={location.lat + " " + location.lon}>{location.name + ", " + location.state + ", " + location.country}</option>
        )}
        </datalist>
    </form>
  );
}

export default SearchLocation;