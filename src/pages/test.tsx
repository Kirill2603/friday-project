import React from "react";
import {CustomButton} from "../custom-components/custom-button";
import {CustomInput} from "../custom-components/custom-input";
import {CustomCheckbox} from "../custom-components/custom-checkbox";
import {CustomEditableSpan} from "../custom-components/custom-editable-span";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../store/store";
import {TestAC} from "../store/app-reducer";

export const Test = () => {

    const callback = (value: string) => {
        console.log(value)
    }

    const dispatch = useDispatch()

    const testReducer = useSelector<rootReducerType , string>(state => state.app.test)

    const test = () => {
        dispatch(TestAC("State was changed"))
    }

    return (<>
            <hr/>

            <CustomButton onChangeOption={test}>Test</CustomButton>
            <div>{testReducer}</div>

            <hr/>

            <div style={{padding: '20px'}}>
                <h2>Buttons</h2>
                <CustomButton onChangeOption={callback}>Default</CustomButton>
                <CustomButton primary onChangeOption={callback}>Primary</CustomButton>
                <CustomButton disabled onChangeOption={callback}>Disabled</CustomButton>
            </div>

            <hr/>

            <div style={{padding: '10px'}}>

                <h2>Inputs</h2>

                <div style={{padding: '10px'}}>
                    <h3>Default</h3>
                    <CustomInput onChangeOption={callback}/>
                </div>

                <div style={{padding: '10px'}}>
                    <h3>Controlled value</h3>
                    <CustomInput value={"Value"} onChangeOption={callback}/>
                </div>

                <div style={{padding: '10px'}}>
                    <h3>Controlled placeholder</h3>
                    <CustomInput placeholder={"Enter your text"} onChangeOption={callback}/>
                </div>

                <div style={{padding: '10px'}}>
                    <h3>Disabled</h3>
                    <CustomInput disabled/>
                </div>

                <div style={{padding: '10px'}}>
                    <h3>Error</h3>
                    <CustomInput error={'Error message'} onChangeOption={callback}/>
                </div>
            </div>

            <hr/>

            <div style={{padding: '20px'}}>
                <h2>CheckBoxes</h2>

                <div style={{padding: '10px'}}>
                    <h3>Default</h3>
                    <CustomCheckbox onChangeOption={callback}/>
                </div>

                <div style={{padding: '10px'}}>
                    <h3>Checked</h3>
                    <CustomCheckbox checked={true} onChangeOption={callback}/>
                </div>

                <div style={{padding: '10px'}}>
                    <h3>With title</h3>
                    <CustomCheckbox title={'Checkbox title'} onChangeOption={callback}/>
                </div>

                <div style={{padding: '10px'}}>
                    <h3>Unchecked</h3>
                    <CustomCheckbox checked={false} onChangeOption={callback}/>
                </div>
            </div>

            <hr/>

            <div style={{padding: '20px'}}>
                <h2>Editable spans</h2>

                <div style={{padding: '10px'}}>
                    <h3>Default</h3>
                    <CustomEditableSpan onChangeOption={callback}/>
                </div>

                <div style={{padding: '10px'}}>
                    <h3>Controlled value</h3>
                    <CustomEditableSpan onChangeOption={callback} value={"Controlled value"}/>
                </div>

                <div style={{padding: '10px'}}>
                    <h3>Error</h3>
                    <CustomEditableSpan onChangeOption={callback} error={'Error message'}/>
                </div>

            </div>
        </>
    )
}