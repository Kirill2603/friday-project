import React, {ChangeEvent, useState} from "react";
import styled from "styled-components";


type CustomInputPropsType = {
    disabled?: boolean
    placeholder?: string
    value?: string
    error?: string
    onChangeOption?: (value: string) => void
    onEnter?: () => void
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

const Input = styled.input<CustomInputPropsType>`
  display: block;
  width: 100%;
  border: 1px solid #a0aec0;
  border-radius: 6px;
  box-sizing: border-box;
  height: 30px;
  line-height: 1.15;
  padding: 0 15px;
  margin: 0 5px;
  position: relative;
  font-size: 100%;
  font-weight: 600;
  outline: none;
  box-shadow: ${props => props.error ? "#fc8181 0 0 0 2px" : 'none'};
  ::placeholder {
    color: ${props => props.error ? "#fc8181": 'none'};
    font-size: 90%;
  }
  &:hover {
    box-shadow: rgba(50, 151, 211, .3) 0 0 0 2px;
  }
  &:disabled {
    cursor: default;
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
  }
  &:active {
    box-shadow: rgba(50, 151, 211, .5) 0 0 0 2px;
  }
  &:focus {
    box-shadow: rgba(50, 151, 211, .7) 0 0 0 2px;
  }
`;

export const CustomInput = (props: CustomInputPropsType) => {

    const [inputValue, setInputValue] = useState<string>(props.value ? props.value : '')

    const onKeyPressCallback = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && setInputValue(e.currentTarget.value)
        e.key === 'Enter' && props.onChangeOption && props.onChangeOption(inputValue)
        e.key === 'Enter' && props.onEnter && props.onEnter()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        !props.value && setInputValue(e.currentTarget.value)
    }

    const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
        props.onChangeOption && props.onChangeOption(inputValue)
        props.onBlur && props.onBlur(e)
    }


    return (
        <>
            <Input
                error={props.error}
                placeholder={props.placeholder ? props.placeholder : props.error}
                disabled={props.disabled}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                onKeyPress={onKeyPressCallback}
                value={props.value ? props.value : inputValue}>
            </Input>
        </>
    )
}