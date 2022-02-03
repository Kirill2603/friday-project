import React from "react";
import {CustomButton} from "../custom-components/custom-button";
import {CustomInput} from "../custom-components/custom-input";
import {CustomCheckbox} from "../custom-components/custom-checkbox";

export const Test = () => {

    const callback = (value: string) => {
      console.log(value)
    }

    return (<>

            <hr/>

            <div style={{padding: '20px'}}>
                <h2>Buttons</h2>
                <CustomButton onChangeOption={callback}>Default</CustomButton>
                <CustomButton primary onChangeOption={callback}>Primary</CustomButton>
                <CustomButton disabled onChangeOption={callback}>Disabled</CustomButton>
            </div>

            <hr/>

            <div style={{padding: '20px'}}>
                <h2>Inputs</h2>

                <h3>Default</h3>
                <CustomInput onChangeOption={callback}/>

                <h3>Controlled value</h3>
                <CustomInput value={"Value"} onChangeOption={callback}/>

                <h3>Controlled placeholder</h3>
                <CustomInput placeholder={"Enter your text"} onChangeOption={callback}/>

                <h3>Disabled</h3>
                <CustomInput disabled/>

                <h3>Error</h3>
                <CustomInput error={'Error message'} onChangeOption={callback}/>
            </div>

            <hr/>

            <div style={{padding: '20px'}}>
                <h2>CheckBoxes</h2>

                <h3>Default</h3>
                <CustomCheckbox onChangeOption={callback}/>

                <h3>Checked</h3>
                <CustomCheckbox checked={true} onChangeOption={callback}/>

                <h3>With title</h3>
                <CustomCheckbox title={'Checkbox title'} onChangeOption={callback}/>

                <h3>Unchecked</h3>
                <CustomCheckbox checked={false} onChangeOption={callback}/>
            </div>
        </>
    )
}