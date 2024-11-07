import dynamic from 'next/dynamic'
import styled from "@emotion/styled";
import { getDate } from '../date/h_m_s';
import { getDate_ymd } from '../date/y_m_d';

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
  });




export default function Chart3 (props) {

    const Box = styled.div`
    width: 48%;
    height: 280px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    background-color: white;
    padding: 10px;
    border-radius: 30px;
  `

    return (
        <>
            <Box>
                <Chart
                  height={250}
                    series={[
                      {
                       name: "센서1",
                       data: props.arr
                      },
                      {
                        name: "센서2",
                        data: props.arr3
                      },
                      {
                        name: "센서3",
                        data: props.arr4
                      },
                      ]} 
                    options={{ 
                      chart: {
                      id: 'realtime',
                      type: 'line',
                      zoom: {
                        enabled: false
                      },
                      animations: {
                        enabled: true,
                        easing: 'linear',
                        dynamicAnimation: {
                          enabled: true,
                          speed: 1000
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
                      // labels: {
                      //   datetimeFormatter :{
                      //     function () {
                      //       return getDate(new Date())
                      //     },
                      //   } 
                      // },
                    },
                    legend: {
                      tooltipHoverFormatter: function(val, opts) {
                        return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
                      }
                    },
                }}>
                </Chart>
            </Box>
        </>
    )
}