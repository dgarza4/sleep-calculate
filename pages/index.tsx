import { useState } from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Dropdown from "../src/Dropdown";

const Home: NextPage = () => {
  const [value, setValue] = useState({
    durationInBed: 0,
    durationAsleep: 0,
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(0);

  const handleChange = (event: any) => {
    const {
      target: { value, name },
    } = event;

    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCalculate = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/calculate?durationInBed=${value.durationInBed}&durationAsleep=${value.durationAsleep}`,
      );
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(JSON.parse(errorText).message);
      } else {
        const { result } = await response.json();
        setResult(result);
      }
    } catch (error: any) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom mb={5}>
          Sleep calculation
        </Typography>
        <Dropdown
          name="durationInBed"
          label="Duration in bed (hrs)"
          value={value.durationInBed}
          onChange={handleChange}
        />
        <Dropdown
          name="durationAsleep"
          label="Duration asleep (hrs)"
          value={value.durationAsleep}
          onChange={handleChange}
        />
        <Button
          onClick={handleCalculate}
          disabled={loading || !value.durationAsleep || !value.durationInBed}
          variant="contained"
        >
          Calculate
        </Button>
        <Box my={5} display="flex" alignItems="center">
          <Typography variant="h6" mr={1}>
            Result:
          </Typography>
          <Typography>{loading ? "Loading..." : (result ?? 0).toFixed(2)}</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
