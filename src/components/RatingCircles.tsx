import React from "react";
import styled from "@emotion/styled";

type RatingCirclesProps = {
  name: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: Array<{ value: string; label: string }>;
  currentValue: string;
  className?: string;
};

const RatingCirclesBase = ({
  name,
  changeHandler,
  values,
  currentValue,
  className,
}: RatingCirclesProps) => {
  return (
    <>
      <div className={className}>
        {values.map((option) => (
          <label htmlFor={option.value}>
            {option.label}
            <input
              type="radio"
              key={option.value}
              id={option.value}
              name={name}
              onChange={changeHandler}
              value={option.value}
              checked={currentValue === option.value}
            />
          </label>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>NOT LIKELY</span>
        <span>VERY LIKELY</span>
      </div>
    </>
  );
};

const RatingCircles = styled(RatingCirclesBase)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  label: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    height: "3em",
    width: "3em",
    backgroundColor: "lightgrey",

    input: {
      appearance: "none",
      position: "absolute",
    },
  },
  "label:has(input:checked)": {
    backgroundColor: "lightblue",
  },
});

export default RatingCircles;
