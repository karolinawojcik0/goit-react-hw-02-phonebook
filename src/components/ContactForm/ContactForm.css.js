import styled from "styled-components";

export const FormLabel = styled.label`
font-size: 20px;`

export const InputLabel = styled.input`
margin: 10px`

export const ButtonForm = styled.button`
    width: 20px;
    height: 10px;
    background: #226fbe;
    cursor: pointer;
    padding: 25px 80px;
    display: flex;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    border: 4px solid #226fbe;
    border-radius: 15px;
    justify-content: center;
    flex-direction: column-reverse;
    align-items: center;
    margin: auto;
  
  &:hover {
    background: transparent;
    color: #226fbe;
  }`