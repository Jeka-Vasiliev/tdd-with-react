import { TextField } from "@material-ui/core";

export function SearchField({ term, onSearch }) {
  return (
    <TextField
      label="search"
      value={term}
      onChange={onSearch}
      data-testid="search"
      margin="normal"
      variant="outlined"
    />
  );
}
