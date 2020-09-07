import React, { Component } from 'react'
import DonutChart from 'react-donut-chart';



export default class AllocatoinChart extends Component {
    
    render() {
      
        return (
            <>
              
          

            <DonutChart className="donut-inherit" innerRadius={0.60 } height={300} width={300} clickToggle={false} legend={false}
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
                
                ]} colorFunction={(colors, index) => colors[(index % colors.length)]} strokeColor={"white"} colors={
                    ['rgb(31, 65, 132)', 
                    'rgb(46, 103, 152)', 
                     'rgb(203, 234, 242)',
                     'rgb(167, 202, 234)', 
                     'rgb(130, 180, 225)', 
                     'rgb(203, 234, 242)']} />
                
         
            </>
        )
    }
}
