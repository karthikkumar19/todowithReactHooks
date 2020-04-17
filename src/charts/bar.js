import  {Bar} from 'react-chartjs-2';
import React from 'react';

const Barchart = props => {
return(
    <Bar data={props.chartData} 
    options={{responsive:true,
    title:{text: 'thickness scale', display:true},
    scales:{
        yAxes:[
            {
                ticks:{
                    autoSkip:true,
                    maxTicksLimit:10,
                    beginAtZero:true
                },
                gridLines:{
                    display:false
                }
            }
        ],
        xAxes:[{
                gridLines:{
                    display:false
                }
        }
        ]
    }
    }}
    />
)
}

export default Barchart;