import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type TimerProps = {
  start: number;
  min: number | null;
  max: number | null;
  type: "chronometer" | "countdown";
};

function CircularProgressWithLabel(props: TimerProps & { value: number }) {
  const normalize = (
    value: number,
    minValue: number | null,
    maxValue: number | null
  ) => {
    if (minValue == null || maxValue == null) return 0;
    const min = Math.min(minValue);
    const max = Math.max(maxValue);
    return ((value - min) / (max - min)) * 100;
  };

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={normalize(props.value, props.min, props.max)}
        size={150}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">{Math.round(props.value)}</Typography>
      </Box>
    </Box>
  );
}

export default function Timer(props: TimerProps) {
  const { min, max, type, start } = props;

  const [currentTime, setCurrentTime] = useState(start);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (type === "countdown") {
        if (min !== null) {
          setCurrentTime((previousTime) =>
            previousTime <= min ? start : previousTime - 1
          );
        } else {
          setCurrentTime((previousTime) => previousTime - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={currentTime} {...props} />;
}
