import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const PriceFilter = ({ onPriceSelected }) => {
  const prices = ["All", "0 - 100", "101 - 300", "301 - 1000"];
  const [price, setPrice] = React.useState("");

  const handleChange = (event) => {
    setPrice(event.target.value);
    onPriceSelected(event.target.value);
  };
  return (
    <FormControl sx={{ mt: 2, minWidth: 120 }} size="small" className="w-full">
      <InputLabel>Price(MAD)</InputLabel>
      <Select value={price} label="price" onChange={handleChange}>
        {prices.map((price, index) => (
          <MenuItem key={index} value={price}>
            {price}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default PriceFilter;
