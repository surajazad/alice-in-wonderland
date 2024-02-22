import styled from "styled-components";

export const QuizContainer = styled.div`
  background: url("https://plus.unsplash.com/premium_photo-1673823666203-81c0a2ea0cb4?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #ccc;
  padding: 10px;
  background-size: cover;
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
