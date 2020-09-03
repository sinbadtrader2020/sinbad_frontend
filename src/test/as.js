import React, { useState, ComponentProps } from 'react';
import { PieChart } from 'react-minimal-pie-chart';



function FullOption(props) {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(undefined);

  const data = props.data.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        color: 'grey',
      };
    }
    return entry;
  });



  return (
    
    <PieChart
   
    
      style={{
        position:"relative"
      }}

      startAngle={0}
      data={data}
      radius={PieChart.defaultProps.radius - 6}
      lineWidth={20}
      segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
      segmentsShift={(index) => (index === selected ? 6 : 1)}
      animate
    
      onClick={(_, index) => {
        setSelected(index === selected ? undefined : index);
       
         
      }}
      onMouseOver={(_, index) => {
        setHovered(index);
        
      }}
      onMouseOut={() => {
        setHovered(undefined);
      }}
    >
   
    </PieChart>

  );
}

export default FullOption;