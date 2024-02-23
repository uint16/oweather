import { useDispatch } from "react-redux";
import { TemperatureUnit } from "../../utils/types";
import { changeUnit } from "../../store/appSlice";

const UnitSelector = () => {
  const dispatch = useDispatch();

  return (
    <div>
    <label>Temperature Unit:</label>
    <select name="unitSelector" id="unitSelector" defaultValue={TemperatureUnit.CELCIUS} onChange={(event) => dispatch(changeUnit(TemperatureUnit[event.target.value as keyof typeof TemperatureUnit]))}>
      <option value={TemperatureUnit.CELCIUS}>Celcius</option>
      <option value={TemperatureUnit.FAHRENHEIT}>Fahrenheit</option>
    </select>
    </div>
   );
}
 
export default UnitSelector;