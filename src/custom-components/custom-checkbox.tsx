import React, {ChangeEvent, useState} from "react";
import styled from "styled-components";

type CustomCheckboxPropsType = {
    checked?: boolean
    title?: string
    onChangeOption?: (option: any) => void
}

const Label = styled.label`
  display: inline-block;
  justify-content: center;
  text-align: center;

  input {
    width: 20px;
    height: 20px;
    appearance: none;
    border-radius: 5px;
    box-shadow: rgba(50, 151, 211, .3) 0 0 0 2px;
    cursor: pointer;
    &:hover {
      box-shadow: rgba(50, 151, 211, .3) 0 0 0 4px;
    }
    &:checked {
      background-color: #405cf5;
    }
    &:checked:after {
      width: 20px;
      height: 20px;
      position: absolute;
      box-sizing: border-box;
      content: '✔';
      color: white;
      text-align: center;
    }
  }
  span {
    cursor: pointer;
    padding-left: 4px;
    display: inline-block;
    white-space: nowrap;
    width: 20px;
    text-align: center;
    position: absolute;
  }
`

export const CustomCheckbox = (props: CustomCheckboxPropsType) => {

    const [checked, setChecked] = useState<boolean>(props.checked || false)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.checked !== undefined) {
            props.onChangeOption && props.onChangeOption(checked)
        } else {
            setChecked(e.target.checked)
            props.onChangeOption && props.onChangeOption(e.target.checked)
        }
    }

    return (
        <Label>
            <input
                // onChange={onChangeCallback}
                onChange={onChange}
                type={'checkbox'}
                checked={checked}/>
            <span>{props.title}</span>
        </Label>
    )
}