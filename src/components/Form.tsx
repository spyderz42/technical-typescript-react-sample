import React, { useState } from "react";
import styled from "@emotion/styled";

import RatingDropDown from "./RatingDropDown";
import RatingCircles from "./RatingCircles";
import FormInput from "./FormInputs";

type Values = {
  name: string;
  email: string;
  rating: string;
  feedback?: string;
};

const ratings = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

const Form = () => {
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    feedback: "",
    rating: "4",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <FormContainer>
      <img src="./logo_glyph.png" alt="logo" />

      <Header>We'd love to hear your feedback!</Header>
      <p>On a scale of 1-5, how likely are you to recommend Streem?</p>

      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{ display: "flex", flexDirection: "column", width: "400px" }}
      >
        <FormInput changeHandler={handleChange} label={"Name"} name={"name"} />
        <FormInput
          changeHandler={handleChange}
          label={"Email"}
          name={"email"}
        />

        <RatingCircles
          name={"rating"}
          changeHandler={handleChange}
          values={ratings}
          currentValue={values.rating}
        />

        {+values.rating < 4 && (
          <textarea name="feedback" onChange={handleChange}></textarea>
        )}

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button
            onClick={() => setValues({ name: "", email: "", rating: "" })}
          >
            Skip
          </Button>
          <Button type="submit" primary>
            Submit
          </Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled("div")({
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#fff",
  width: "40vw",
  height: "50vh",
  borderRadius: "8px",
  boxShadow: "0 0 8px 0 rgba(0,0,0,0.2)",
  justifyContent: "center",
});

const Header = styled("h2")({
  margin: "20px 0 20px 0",
  color: "#082D61",
});

const Button = styled("button")(({ primary }: { primary?: boolean }) => ({
  padding: "12px",
  borderRadius: "20px",
  border: primary ? "none" : "solid 1px #666",
  backgroundColor: primary ? "#0077FF" : "#fff",
  color: primary ? "#fff" : "#666",
  fontSize: "16px",
  width: "140px",
  fontWeight: "600",
  alignSelf: "flex-end",
  marginTop: "24px",
  height: "40px",
}));
