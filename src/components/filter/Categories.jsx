import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../services/ProductService";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const Categories = ({ onCategorySelected }) => {
  const [categories, setCategories] = useState(["All"]);
  const [category, setCategory] = React.useState("");

  useEffect(() => {
    const getCategories = async () => {
      const response = await getAllCategories();
      setCategories(["All", ...response]);
    };
    getCategories();
  }, []);

  const handleChange = (event) => {
    setCategory(event.target.value);
    onCategorySelected(event.target.value);
  };

  return (
    <FormControl sx={{ mt: 2, minWidth: 120 }} size="small" className="w-full" >
      <InputLabel>Categories </InputLabel>
      <Select value={category} label="Category" onChange={handleChange} >
        {categories.map((category, index) => (
          <MenuItem key={index} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Categories;
