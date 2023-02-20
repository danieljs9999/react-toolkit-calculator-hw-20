import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { calculatorAction } from "../store/calculator/calculatorSlice";

const Calculator = () => {
  const result = useSelector((state) => state.calculate.result);

  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(calculatorAction.add(5));
  };

  const divideHandler = () => {
    dispatch(calculatorAction.divide(4));
  };
  const subtractHandler = () => {
    dispatch(calculatorAction.subtract(10));
  };
  const multiplyHandler = () => {
    dispatch(calculatorAction.multyply(2));
  };
  return (
    <CounterContainer>
      <h1>Redux Calculator</h1>
      <Result> -- {result} -- </Result>
      <ButtonContainer>
        <button onClick={addHandler}>+ 5</button>
        <button onClick={subtractHandler}>- 10</button>
        <button onClick={multiplyHandler}>× 2</button>
        <button onClick={divideHandler}>÷ 4</button>
      </ButtonContainer>
    </CounterContainer>
  );
};

export default Calculator;

const CounterContainer = styled.div`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 40rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-transform: uppercase;
    color: #575757;
    margin: 0;
    font-size: 1.6rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;

  button {
    background-color: #3c0080;
    border: none;
    color: white;
    font-size: 1.5rem;
    padding: 10px 18px;
    border-radius: 6px;
  }
`;

const Result = styled.div`
  font-size: 4rem;
  color: #3c0080;
  margin: 1.5rem 0;
  font-weight: bold;
`;
