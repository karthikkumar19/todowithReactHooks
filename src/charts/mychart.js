import React,{useState, useEffect} from 'react';
import Lines from './lines';
import Barchart from './bar';
import Bubblechart from './bubble';
import Doughnutchart from './doughnut';
import Piechart from './pie';
import Polarchart from './polar';
import Radarchart from './radar';
import Scatterchart from './scatter';


const Mychart = props => {

    const [chartData,setChartData] = useState({});

    useEffect(() => {
        chart();
    },[])

    const chart = () => {
        setChartData({
            labels:['monday','tuesday','wednesday','thursday','friday'],
            datasets:[
                {
                    label:'level of thickness',
                    data:[32,45,12,76,69],
                    backgroundColor:[
                        'blue','red','green','brown','grey'
                    ],
                    borderWidth: 4
                }
            ]
        })
    }


    return(
        <React.Fragment>
            <h1 style={{textAlign:'center'}}>charts js with React Hooks</h1>
            <div style={{display:'flex'}}>
                <div style={{height:'500px',width:'500px',margin:'5%'}}>
                    <h4>Line Chart</h4>
               <Lines chartData={chartData}/>
               <h4>Bar Chart</h4>
               <Barchart chartData={chartData}/>
               {/* <Bubblechart chartData={chartData}/> */}
               <h4>Doughnut Chart</h4>
               <Doughnutchart chartData={chartData}/>
                </div>
                <div style={{height:'500px',width:'500px',margin:'5%'}}>
                <h4>Pie Chart</h4>
                <Piechart chartData={chartData}/>
                <h4>Polar Chart</h4>
                <Polarchart chartData={chartData}/>
                <h4>Radar Chart</h4>
                <Radarchart chartData={chartData}/>
                {/* <Scatterchart chartData={chartData}/> */}
                </div>
            </div>
        </React.Fragment>
    )
}


export default Mychart;