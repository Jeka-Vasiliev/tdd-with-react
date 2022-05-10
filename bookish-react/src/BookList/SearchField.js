import { TextField } from "@material-ui/core";
import clone from "lodash.clone";
import isEmpty from "lodash.isempty";

export function SearchField({ term, onSearch }) {
  const protect = (event) => {
    const value = clone(event.target.value);
    if (!isEmpty(value.trim())) {
      return onSearch(event);
    }
  };

  return (
    <TextField label="search" value={term} onChange={protect} data-testid="search" margin="normal" variant="outlined" />
  );
}
