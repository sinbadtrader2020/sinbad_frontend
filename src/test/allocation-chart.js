import React, { Component } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import FullOption from './as';
import { Doughnut,Chart} from 'react-chartjs-2';


import DonutChart from 'react-donut-chart';



export default class AllocatoinChart extends Component {
    
    render() {
      
        return (
            <>
              
          

            <DonutChart className="donut-inherit"  height="280" width="280" clickToggle={false} legend={false}
                data={[{
                    label: 'Global Stack',
                    value: 75
                    
                },
                {
                    label: 'Emerging Market Stocks',
                    value: 10,
                   
                },
                {
                    label: 'Sukuk',
                    value: 0,
                   
                },
                {
                    label: 'Real Estate',
                    value: 10,
                   
                },
                {
                    label: 'Gold',
                    value: 3.75,
                   
                },
                {
                    label: 'Cash',
                    value: 1.25,
                }
                
                ]} colorFunction={(colors, index) => colors[(index % colors.length)]} strokeColor={"white"} colors={['blue', 'red', 'blue', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b' ]} />
                
         
            </>
        )
    }
}
