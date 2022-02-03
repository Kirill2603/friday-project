import React, {useState} from "react";
import {CustomInput} from "./custom-input";
import styled from "styled-components";

type CustomEditableSpanPropsType = {
    disabled?: boolean
    placeholder?: string
    value?: string
    error?: string
    onChangeOption?: (value: string) => void
}

const SpanWrapper = styled.div<CustomEditableSpanPropsType>`
  display: block;
  border: 1px solid #a0aec0;
  border-radius: 6px;
  height: 30px;
  padding: 0 15px;
  margin: 0 5px;
  box-sizing: border-box;
  box-shadow: ${props => props.error ? "#fc8181 0 0 0 2px" : 'none'};

  &:hover {
    box-shadow: rgba(50, 151, 211, .3) 0 0 0 3px;
  }

  span {
    line-height: 1.7;
    font-size: 100%;
    font-weight: 600;
  }
`

export const CustomEditableSpan = (props: CustomEditableSpanPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    const onDoubleClickCallBack = () => {
        setEditMode(true)
    }

    const onBlurCallback = () => {
        setEditMode(false)
    }

    return (<>
            {
                editMode
                    ?
                    <CustomInput
                        value={props.value}
                        onChangeOption={props.onChangeOption}
                        onBlur={onBlurCallback}
                        onEnter={onDoubleClickCallBack}
                        error={props.error}/>
                    :
                    <SpanWrapper
                        error={props.error}
                        onDoubleClick={onDoubleClickCallBack}>
                        <span>✎ {props.value}</span>
                    </SpanWrapper>
            }
        </>
    )
}