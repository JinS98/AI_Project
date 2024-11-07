import styled from "@emotion/styled";


export const Container = styled.div`
    background-color: #EEF5FF;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px;
`
export const FirstRow = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 150px;
    margin-bottom: 50px;
    background-color: white;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`
export const EC_PH_container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 20%;
    /* height: 200px; */
`
export const EC_PH = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;

`
export const Name = styled.div`
    font-size: 50px;
    height: 60%;
`
export const Detail = styled.div`
    padding-left: 10px;
    height: 55%;
`
export const Num = styled.div`
    font-size: 25px;
`
export const Unit = styled.div`
    font-size: 10px;
`

export const ON_OFF = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 75%; 
`
export const SecRow = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Cart_container = styled.div`
    display: flex;
    gap:10px;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`
export const SideBar = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    gap: 40px;
    padding-top: 50px;
    padding-bottom: 50px;
    flex-direction: column;
    align-items: center;
    margin-right: 30px;
    background-color: white;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`
export const Menu = styled.div`
    height: 50px;
    width: 80%;
    display: flex;
    font-weight: 700;
    border-radius: 10px;
    /* border: 1px solid black; */
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: ${(props) => (props.clickHome ? "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;" : "")};
    box-shadow: ${(props) => (props.clickTemp ? "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;" : "")};
    box-shadow: ${(props) => (props.clickHum ? "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;" : "")};
    box-shadow: ${(props) => (props.clickADC ? "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;" : "")};
    box-shadow: ${(props) => (props.clickSTemp ? "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;" : "")};
`