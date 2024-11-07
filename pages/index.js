import { useEffect, useState } from 'react';
import styled from "@emotion/styled";
import * as S from "../styles/mainStyles"
import Pump from '../component/common/card/pump';
import Valve from '../component/common/card/valve';
import WaterLevel from '../component/common/card/waterLevel';
import RainSensor from '../component/common/card/rainSensor';
import Chart1 from '../component/common/chart/chart_line1';
import Chart3 from '../component/common/chart/chart_line3';
import Chart2 from '../component/common/chart/chart_line2';
import Chart1_max from '../component/common/chart/chart_line1_big';
import Chart3_Max from '../component/common/chart/chart_line3_big';
import Chart2_Max from '../component/common/chart/chart_line2_big';



export default function Home() {
  // const upBit = "wss://api.upbit.com/websocket/v1" 
  const [loading, setLoading] = useState(true)
  const [arr,setArr] = useState([])
  const [arr2,setArr2] = useState([])
  const [arr3,setArr3] = useState([])
  const [arr4,setArr4] = useState([])
  const [reload,setReload] = useState(false)
  const [pump, setPump] = useState(false)
  const [valve, setValve] = useState(false)
  const [waterLevel, setWaterLevel] = useState(false)
  const [rainSensor, setRainSensor] = useState(false)
  const [clickTemp, setClickTemp] = useState(false) 
  const [clickHum, setClickHum] = useState(false) 
  const [clickADC, setClickADC] = useState(false) 
  const [clickSTemp, setClickSTemp] = useState(false) 
  const [clickHome, setClickHome] = useState(true) 
  
  //홈메뉴 클릭 시 그래프 4개 모두 보여짐
  const onClickHome = () => {
    setClickHome(true)
    setClickTemp(false)
    setClickHum(false)
    setClickADC(false)
    setClickSTemp(false)
  }

  const onClickHTemp = () => {
    setClickHome(false)
    setClickTemp(true)
    setClickHum(false)
    setClickADC(false)
    setClickSTemp(false)
  }

  const onClickHum = () => {
    setClickHome(false)
    setClickTemp(false)
    setClickHum(true)
    setClickADC(false)
    setClickSTemp(false)
  }

  const onClickADC = () => {
    setClickHome(false)
    setClickTemp(false)
    setClickHum(false)
    setClickADC(true)
    setClickSTemp(false)
  }

  const onClickTemp = () => {
    setClickHome(false)
    setClickTemp(false)
    setClickHum(false)
    setClickADC(false)
    setClickSTemp(true)
  }

  const ws = "ws://localhost:8000/ws/chart_updates/"  //소켓주소
  useEffect(() => {
    const socket = new WebSocket(ws);
    socket.onopen = () => {
      setLoading((prev) => !prev);
      if(socket) {
        socket.send(
          JSON.stringify([
            {ticket:"test example"},
            {type:"ticker", codes:["KRW-BTC"]},
            {format: "SIMPLE"}
          ])
        )
      }
    }
    socket.onmessage = async (event) => {
      console.log(event.data)
      // const reader = new FileReader()
      // try {
      //   if(event !== null && event !== undefined) {
      //       reader.onload = () => {
      //         const data = JSON.parse(reader.result)
      //         console.log(data)
      //         if(data.op/1000 > 90000 && Number(data.op)) {
      //                 arr.push(data.op/1000)
      //                 arr3.push(data.op/1000 + 500)
      //                 arr4.push(data.op/1000 + 1000)
      //                 arr2.push((data.tv * 100).toFixed(2))
      //                 setReload((prev) => !prev)
      //           }
      //       }
      //   }
      //   reader.readAsText(event.data)
      // }catch(err) {
      // }
    };
  },[])



  return (
    <S.Container>
      <S.FirstRow>
        <S.EC_PH_container>
          <S.EC_PH>
            <S.Name>EC</S.Name>
            <S.Detail>
              <S.Num>100</S.Num>
              <S.Unit>us/cm</S.Unit>
            </S.Detail>
          </S.EC_PH>
          <S.EC_PH>
            <S.Name>PH</S.Name>
              <S.Detail>
                <S.Num>3</S.Num>
                <S.Unit>ph 단위</S.Unit>
              </S.Detail>
          </S.EC_PH>
        </S.EC_PH_container>
        <S.ON_OFF>
          <Pump name={"펌프 가동상태"} pump={pump}></Pump>
          <Valve name={"밸브 열림상태"} valve={valve}></Valve>
          <WaterLevel name={"수위 센서"} waterLevel={waterLevel}></WaterLevel>
          <RainSensor name={"강우센서"} rainSensor={rainSensor}></RainSensor>
        </S.ON_OFF>
      </S.FirstRow>
      <S.SecRow>
        <S.SideBar>
          <S.Menu onClick={onClickHome} clickHome={clickHome}>ALL</S.Menu>
          <S.Menu onClick={onClickHTemp} clickTemp={clickTemp}>대기온도</S.Menu>
          <S.Menu onClick={onClickHum} clickHum={clickHum}>대기습도</S.Menu>
          <S.Menu onClick={onClickADC} clickADC={clickADC}>토양수분</S.Menu>
          <S.Menu onClick={onClickTemp} clickSTemp={clickSTemp}>토양온도</S.Menu>
        </S.SideBar>
        {clickHome ? 
        <S.Cart_container>
        <Chart1 arr = {arr} title ={"대기온도"}/>
        <Chart1 arr = {arr2} title ={"대기습도"}/> 
        <Chart3 arr = {arr} arr3 = {arr3} arr4 = {arr4} title ={"토양수분"}/>
        <Chart2 arr = {arr} arr3 = {arr3} title ={"토양온도"}/>
      </S.Cart_container>
        :
        ""
        }
        {clickTemp ? <Chart1_max arr = {arr} title ={"대기온도"} /> : ""}
        {clickHum ? <Chart1_max arr = {arr} title ={"대기습도"} /> : ""}
        {clickADC ? <Chart3_Max arr = {arr} title ={"토양수분"} /> : ""}
        {clickSTemp ? <Chart2_Max arr = {arr} title ={"토양온도"} /> : ""}
        
      </S.SecRow>
    </S.Container>
    
  )
}
