import styled from "styled-components";

export const MainContainer = styled.div`
  background: 
  overflow-y: scroll;
  border: 1px solid #ccc;
  padding: 10px;
  background-size: cover;
  height: 80vh;

  .container{
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction:column;
  }

  .btn{
    padding: 30px;
    width: 100%;
    margin-bottom: 10px;
    font-size: 30px;
    color: #fff;
    background-color: black;
  }
`;

export const QuestionBox = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  opacity: 70%;
`;

export const QuestionHeader = styled.h3`
  margin-bottom: 15px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
  cursor: pointer;
`;

export const RadioButton = styled.input`
  margin-right: 10px;
`;

export const QuizButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const NextButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;
