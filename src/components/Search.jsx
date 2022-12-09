import styled from "styled-components";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

let Search = () => {
  let [input, setInput] = React.useState("");
  let navigate = useNavigate();
  let submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          onChange={(event) => {
            setInput(event.target.value);
          }}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
};

//Styled Components
let FormStyle = styled.form`
  @media (min-width: 900px) {
    margin: 0rem 8rem;
  }
  div {
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.2rem;

    color: #fff;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1.5rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #fff;
  }
`;

export default Search;
