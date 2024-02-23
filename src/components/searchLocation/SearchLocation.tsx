import { useLocation } from "../../hooks/useLocation";

const SearchLocation = () => {
  const {locations, onQueryChange } = useLocation();

  return (
    <form>
      <input type="text" name="locationSearch" list="locationsResult" onChange={onQueryChange} ></input>
        <datalist id="locationsResult" >
        {locations?.map(location => 
          <option value={location.lat + " " + location.lon}>{location.name + ", " + location.state + ", " + location.country}</option>
        )}
        </datalist>
    </form>
  );
}

export default SearchLocation;