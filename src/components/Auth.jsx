import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authActions } from "../store/auth/authSlice";

function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (name) => {
    return (event) => {
      setFormState((prevState) => ({
        ...prevState,
        [name]: event.target.value,
      }));
    };
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      formState.email === "user@gmail.com" &&
      formState.password === "654321"
    ) {
      dispatch(authActions.login(formState.email));
    }
    navigate("/calculator");
  };

  return (
    <ContainerAuth>
      <section>
        <form onSubmit={submitHandler}>
          <ContainerInput>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={inputChangeHandler("email")}
              value={formState.email}
              placeholder="user@gmail.com"
            />
          </ContainerInput>
          <ContainerInput>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={inputChangeHandler("password")}
              value={formState.password}
              placeholder="654321"
            />
          </ContainerInput>
          <Button>Login</Button>
        </form>
      </section>
    </ContainerAuth>
  );
}

export default Auth;

const ContainerAuth = styled.div`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 36rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;
`;

const ContainerInput = styled.div`
  margin-bottom: 0.5rem;

  label {
    display: block;
    color: #3d3d3d;
    text-transform: uppercase;
    margin-bottom: 0.8rem;
    font-size: 1.5rem;
  }

  input {
    display: block;
    width: 30rem;
    margin: auto;
    border-radius: 4px;
    padding: 6px 12px;
    border: 1px solid #ccc;
    font-size: 1.5rem;
    outline: none;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  background-color: #3c0080;
  border: none;
  color: white;
  font-size: 1.5rem;
  padding: 10px 18px;
  border-radius: 6px;
`;
