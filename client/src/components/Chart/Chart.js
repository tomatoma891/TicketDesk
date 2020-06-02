import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";


const Chart = () => {
    const [chartData, setChartData] = useState({});

    const chart = () => {
        setChartData ({
            labels:["Page","Tamara","Chance","Ryan"],
            datasets: [
                {
                    label: "number of solved tickets",
                    data:[15,35,17,37],
                    backgroundColor: [
                        "#01579b"
                    ],
                    borderWidth: 4
                }
            ]
        })
    }

    useEffect(() =>{
        chart()
    },[])
    return (
        <div >
            <h1>Chart</h1>
            <div>
                <Line data = {chartData} options = {{
                    responsive: true,
                    title: {text:"Number of solved tickets", display: true},
                    scales : {
                        yAxes: [
                            {
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 10,
                                    beginAtZero:true
                                },
                                gridLines:{
                                    display:false
                                }

                            }
                        ],
                        xAxes:[
                            {
                            gridLines:{
                                display:false
                            }
                        }
                        ]
                    }
                }}
                />
            </div>

        </div>

    )
    }

    export default Chart