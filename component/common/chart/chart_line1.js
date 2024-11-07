import dynamic from 'next/dynamic'
import styled from "@emotion/styled";
import { getDate } from '../date/h_m_s';
import { getDate_ymd } from '../date/y_m_d';

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
  });




export default function Chart1 (props) {

  // console.log(`${props.width}`)
    const Box = styled.div`
    width: 48%;
    height: 280px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    background-color: white;
    border-radius: 30px;
    padding: 10px;
  `

    return (
        <>
            <Box>
                <Chart
                  height={250}
                    series={[
                      {
                      data: props.arr
                      },
                      ]} 
                    options={{ 
                      chart: {
                      id: 'realtime',
                      type: 'line',
                      animations: {
                        enabled: true,
                        easing: 'linear',
                        dynamicAnimation: {
                          enabled: true,
                          speed: 3000
                        }
                      },
                      toolbar: {
                        show: false
                      },
                      zoom: {
                        enabled: false
                      }
                    },
                    // dataLabels: {
                    //   enabled: false
                    // },
                    stroke: {
                      curve: 'smooth'
                    },
                    title: {
                      text: props.title + " " + getDate_ymd(new Date()),
                        align: 'left'
                    },
                    xaxis: {
                      // type:'datetime',
                      floating: true,
                      labels: {
                        datetimeFormatter :{
                          function () {
                            return getDate(new Date())
                          },
                        } 
                      }
                    },
                    legend: {
                      show: false
                    },
                }}>
                </Chart>
            </Box>
        </>
    )
}