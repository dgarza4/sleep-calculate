import React, { useMemo } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

interface IDropdownProps {
  label: string;
  name: string;
  value: any;
  onChange: (value: any) => void;
}

const Dropdown = ({ label, value, name, onChange }: IDropdownProps) => {
  const options = useMemo(() => {
    const result = [];
    for (let i = 0; i <= 24; i += 0.5) {
      result.push(i);
    }

    return result;
  }, []);

  return (
    <Box sx={{ minWidth: 50, mb: 4 }}>
      <FormControl fullWidth>
        <InputLabel id={`${name}-label`}>{label}</InputLabel>
        <Select
          labelId={`${name}-label`}
          id={name}
          value={value}
          label={label}
          onChange={onChange}
          name={name}
        >
          {options.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Dropdown;
