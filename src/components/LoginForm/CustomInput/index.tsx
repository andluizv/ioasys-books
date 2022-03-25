import React from "react";
import { Input, Label, InputContainer } from "./styles";

const CustomInput = React.forwardRef((props: React.ComponentProps<typeof Input>, ref) => {
    const { label, func } = props
    return (
        <InputContainer>
            <Input {...props} name={label} onChange={(e : any) => func(e.target.value)}/>
            <Label htmlFor={label}>
                {label}
            </Label>
        </InputContainer>
    )
});

export default CustomInput;