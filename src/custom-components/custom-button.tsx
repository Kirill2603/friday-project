import React from "react";
import styled from "styled-components";

type CustomButtonPropsType = {
    primary?: boolean
    disabled?: boolean
    children: string
    onChangeOption?: (e: string) => void
}

const Button = styled.button<CustomButtonPropsType>`
  backface-visibility: hidden;
  background-color: ${props => props.primary ? "#405cf5" : "#2f855a"};
  border-radius: 6px;
  border-width: 0;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  font-size: 100%;
  font-weight: 600;
  height: 40px;
  line-height: 1.15;
  outline: none;
  overflow: hidden;
  padding: 0 15px;
  margin: 0 5px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s, box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    box-shadow: rgba(50, 151, 211, .3) 0 0 0 4px;
  }
  &:disabled {
    box-shadow: none;
    background-color: #a0aec0;
    cursor: default;
  }
  &:active {
    box-shadow: rgba(50, 151, 211, .5) 0 0 0 4px;
  }
`;

export const CustomButton = (props: CustomButtonPropsType,) => {

    const onClickCallback = () => {
     props.onChangeOption && props.onChangeOption('Click!')
    }

    return (
        <>
            <Button
                primary={props.primary}
                onClick={onClickCallback}
                disabled={props.disabled}>
                {props.children}
            </Button>
        </>

    )
}


