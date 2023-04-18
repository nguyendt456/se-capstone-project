import { Button, Collapse, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { ContextDataType, GlobalContext } from "./root";

interface MarkerFormType {
    targetIndex: number,
}

const MarkerForm = (props: MarkerFormType) => {
    const { globalContextHook }: ContextDataType = useContext(GlobalContext)
    let listOfMCPs = globalContextHook.dataHook.listOfMCPs

    const [capacity, setCapacity] = useState({} as number)
    const [error, setError] = useState(true);

    const handleInput = (targetIndex: number) => {
        listOfMCPs.map((value, index) => {
            if (targetIndex === index) {
                listOfMCPs[index].capacity = capacity as unknown as number;
            }
        })
        globalContextHook.setDataHook((prev) => ({
            ...prev,
            listOfMCPs: listOfMCPs,
        }))
    }

    const handleOnChangeValidation = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let inputValue = e.target.value
        let validateReg = new RegExp("^[0-9]*$")
        if (!validateReg.test(inputValue) || e.target.value.length == 0) {
            setError(true)
            return
        }
        let inputValueAsNumber = inputValue as unknown as number
        if (inputValueAsNumber > 100 || inputValueAsNumber < 0) {
            setError(true)
            return
        }
        setError(false)
        setCapacity(inputValueAsNumber)
    }

    return (
        <>
            Update: <TextField sx={{marginTop: 1}} size="small" InputLabelProps={{sx : {fontSize: '14px'}}} label="Enter new capacity" error={error} variant="outlined" onChange={handleOnChangeValidation} />
            <Collapse in={!error}>
                <Button
                    sx={{marginTop: 1}}
                    type="submit"
                    onClick={() => handleInput(props.targetIndex)}
                    variant="contained"
                >
                    Apply
                </Button>
            </Collapse>
        </>
    );
};

export default MarkerForm;
