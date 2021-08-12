import React from "react";
import { FormControl, makeStyles, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import Query from "./Query";
import TECH_STACKS_QUERY from "../queries/techStacks";

const Search = ({ handleFilter, handleReset }) => {
  const classes = useStyles();

  const handleSelectChange = (event, value) => {
    if (!value.length) {
      handleReset();
    } else {
      const projIds = value.flatMap((val) =>
        val.projects.map((proj) => proj.id)
      );
      const filtered = [...new Set([...projIds])]; // remove duplicates
      handleFilter(filtered);
    }
  };
  return (
    <Query query={TECH_STACKS_QUERY}>
      {({ data: { techStacks } }) => {
        return (
          <FormControl variant="outlined" className={classes.formControl}>
            <Autocomplete
              multiple
              fullWidth
              filterSelectedOptions
              id="tags-outlined"
              options={techStacks}
              getOptionLabel={(option) => option.name}
              onChange={handleSelectChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder="기술스택으로 검색해보세요"
                />
              )}
              ChipProps={{ color: "primary" }}
            />
          </FormControl>
        );
      }}
    </Query>
  );
};

export default Search;

const useStyles = makeStyles((theme) => ({
  formControl: {
    flex: "1 1 auto",
    "& .MuiOutlinedInput-root": {
      borderRadius: "100px",
    },
    "& .MuiAutocomplete-endAdornment": {
      display: "none",
    },
  },
}));
