import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Switch from '@mui/material/Switch';

export const Container = styled.div`
    width: 21%;
    height: 100%;
    padding: 10px;
    background-color: #86B6F6;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
    border-radius: 10px;
`
export const Text = styled.div`
    padding: 10px;
    font-weight: 600;
`


export default function Valve(props) {
    const [on,setOn] = useState(true)
    
    useEffect(() => {
        setOn(props.valve)
    },[])

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const handleChange = (event) => {
        setOn((prev) => !prev)
      };

    return(
        <Container>
            <Switch
                color="secondary"
                checked={on}
                onChange={handleChange}
                // name="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
             <Text>밸브 열림 상태: {on ? "ON" : "OFF"}</Text>
        </Container>
    )
}