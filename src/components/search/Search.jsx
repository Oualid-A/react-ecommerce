import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ onSearchChanged }) => {
  return (
    <FormControl
      sx={{ mt: 2 }}
      variant="outlined"
      size="small"
      className="w-full"
    >
      <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
      <OutlinedInput
        onChange={(e) => onSearchChanged(e.target.value)}
        id="outlined-adornment-search"
        type="text"
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle search visibility" edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        label="Search"
      />
    </FormControl>
  );
};

export default Search;
