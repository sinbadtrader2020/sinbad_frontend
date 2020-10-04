import { createChart } from "lightweight-charts";
import React  from 'react';


function  Intra1DGraph(props) {
  const chartRef = React.useRef(null);

 
  // var width = 800;
  // var height = 300;
  React.useEffect(()=> {
    if(chartRef.current){
      const chart = createChart(chartRef.current, {
      
      
          crosshair: {
         
          horzLine: {
          visible: false,
          labelVisible: false,
        },

          vertLine: {
            visible:false,
            labelVisible: false,

          },
        },
       
  
        handleScroll: false,
        handleScale: false,
    
        layout: {
       

          backgroundColor: '#E7EEF6',
          textColor: '#333',
        },
        grid: {

          horzLines: {
            visible:false,
           
            color: '#eee',
            labelVisible: false,
    
           
          },
          vertLines: {
           visible:false,

            color: '#ffffff',
            labelVisible: false,
          
        
          },
        },
      
      });
     
      chart.resize( props.width, props.height)

      // chart.resize( width,height)
       
      chart.applyOptions({
        timeScale:{
          rightOffset: 12,
            timeVisible:true,
          
     
          fixLeftEdge:true,
          
          
          borderVisible: true,
          borderColor: '#eee',
          visible: true,
          scaleMargins: {
            top: 0.6,
            bottom: 0.05,
        },
         
        },
        fixLeftEdge:true,
   
        
        priceScale: {
          
        
          position: 'left',
       
        
          
      
          // scaleMargins: {
          //     top: 0.34,
          //     bottom: 0.3,
          // },
      },


      });
      chart.timeScale().fitContent();
    
     

    
      prepareChart(chart);
    }
  },[])

    function prepareChart(chart) {
        var series = chart.addLineSeries({
            topColor: 'rgba(0, 150, 136, 0.56)',
            bottomColor: 'rgba(0, 150, 136, 0.04)',
            lineColor: 'rgba(0, 150, 136, 1)',
            lineWidth: 2,
            
       
          });

        // var series= chart.addCandlestickSeries();
          var toolTipWidth = 80;
          var toolTipHeight = 100;
          var toolTipMargin = 15;
          
          var toolTip = document.createElement('as');
          toolTip.className =  'floating-tooltip-2';
          chartRef.current.appendChild(toolTip);
          function businessDayToString(businessDay) {
            var date = new Date(businessDay *1000);
            
            return date.toUTCString();
          }
          // update tooltip
          chart.subscribeCrosshairMove(function(param) {
                  if (param.point === undefined || !param.time || param.point.x < 0 || param.point.x > chartRef.current.clientWidth || param.point.y < 0 || param.point.y > chartRef.current.clientHeight) {
                      toolTip.style.display = 'none';
                  } else {
                      const dateStr = businessDayToString(param.time);
                      toolTip.style.display = 'block';
                      var price = param.seriesPrices.get(series);
                      toolTip.innerHTML = `<div style="color: #009688">${props.companySymbol}.</div><div style="font-size: 24px; margin: 4px 0px; color: #21384d">` + Math.round(100 * price) / 100 + '</div><div style="color: #21384d">' + dateStr + '</div>';
                      var coordinate = series.priceToCoordinate(price);
                      var shiftedCoordinate = param.point.x - 50;
                      if (coordinate === null) {
                          return;
                      }
                      shiftedCoordinate = Math.max(0, Math.min(chartRef.current.clientWidth - toolTipWidth, shiftedCoordinate));
                      var coordinateY = coordinate - toolTipHeight - toolTipMargin > 0 ? coordinate - toolTipHeight - toolTipMargin : Math.max(0, Math.min(chartRef.current.clientHeight - toolTipHeight - toolTipMargin, coordinate + toolTipMargin));
                      toolTip.style.left = shiftedCoordinate + 'px';
                      toolTip.style.top = coordinateY + 'px';
                  }
          });
    // const sortedActivities = props.data
    // console.log("props",sortedActivities)
    // // console.log("value",props.data['value'])
  
    // series.setData(sortedActivities)
       

    const sortedActivities = props.data
    series.setData(sortedActivities)
  

// series.setData([
     
       
//     { time: 1556877600, value: 230.12 },
// 	{ time: 1556881200, value: 230.24 },
// 	{ time: 1556884800, value: 230.63 },
// 	{ time: 1556888400, value: 231.35 },
// 	{ time: 1556892000, value: 232.24 },
// 	{ time: 1556895600, value: 232.52 },
// 	{ time: 1557126000, value: 228.71 },
// 	{ time: 1557129600, value: 228.88 },
// 	{ time: 1557133200, value: 228.18 },
// 	{ time: 1557136800, value: 228.89 },
// 	{ time: 1557140400, value: 229.05 },
// 	{ time: 1557144000, value: 229.46 },
// 	{ time: 1557147600, value: 230.98 },
// 	{ time: 1557151200, value: 231.71 },
// 	{ time: 1557154800, value: 232.8 },
// 	{ time: 1557212400, value: 233.1 },
// 	{ time: 1557216000, value: 232.9 },
// 	{ time: 1557219600, value: 232.9 },
// 	{ time: 1557223200, value: 232.76 },
// 	{ time: 1557226800, value: 232.41 },
// 	{ time: 1557230400, value: 231.2 },
// 	{ time: 1557234000, value: 230.83 },
// 	{ time: 1557237600, value: 230.57 },
// 	{ time: 1557241200, value: 231.49 },
// 	{ time: 1557298800, value: 231.5 },
// 	{ time: 1557302400, value: 230.87 },
// 	{ time: 1557306000, value: 229.79 },
// 	{ time: 1557309600, value: 230.06 },
// 	{ time: 1557313200, value: 230.53 },
// 	{ time: 1557316800, value: 231.04 },
// 	{ time: 1557320400, value: 230.63 },
// 	{ time: 1557324000, value: 230.83 },
// 	{ time: 1557327600, value: 230 },
// 	{ time: 1557471600, value: 228.8 },
// 	{ time: 1557475200, value: 227.73 },
// 	{ time: 1557478800, value: 227.73 },
// 	{ time: 1557482400, value: 227.84 },
// 	{ time: 1557486000, value: 228.2 },
// 	{ time: 1557489600, value: 228.33 },
// 	{ time: 1557493200, value: 228.6 },
// 	{ time: 1557496800, value: 227.11 },
// 	{ time: 1557500400, value: 227 },
// 	{ time: 1557730800, value: 226.29 },
// 	{ time: 1557734400, value: 227.04 },
// 	{ time: 1557738000, value: 227.97 },
// 	{ time: 1557741600, value: 227.85 },
// 	{ time: 1557745200, value: 227.13 },
// 	{ time: 1557748800, value: 225.64 },
// 	{ time: 1557752400, value: 224.46 },
// 	{ time: 1557756000, value: 225.22 },
// 	{ time: 1557759600, value: 224.22 },
// 	{ time: 1557817200, value: 225.9 },
// 	{ time: 1557820800, value: 226.15 },
// 	{ time: 1557824400, value: 227.9 },
// 	{ time: 1557828000, value: 228.86 },
// 	{ time: 1557831600, value: 228.83 },
// 	{ time: 1557835200, value: 228.17 },
// 	{ time: 1557838800, value: 228.71 },
// 	{ time: 1557842400, value: 227.68 },
// 	{ time: 1557846000, value: 227.88 },
// 	{ time: 1557903600, value: 227.67 },
// 	{ time: 1557907200, value: 227.52 },
// 	{ time: 1557910800, value: 226.05 },
// 	{ time: 1557914400, value: 224.54 },
// 	{ time: 1557918000, value: 225.96 },
// 	{ time: 1557921600, value: 224.88 },
// 	{ time: 1557925200, value: 226.78 },
// 	{ time: 1557928800, value: 229.09 },
// 	{ time: 1557932400, value: 228.69 },
// 	{ time: 1557990000, value: 230.22 },
// 	{ time: 1557993600, value: 231.12 },
// 	{ time: 1557997200, value: 229.67 },
// 	{ time: 1558000800, value: 229.44 },
// 	{ time: 1558004400, value: 229.72 },
// 	{ time: 1558008000, value: 229.57 },
// 	{ time: 1558011600, value: 229.42 },
// 	{ time: 1558015200, value: 229.23 },
// 	{ time: 1558018800, value: 228.19 },
// 	{ time: 1558076400, value: 227.72 },
// 	{ time: 1558080000, value: 227.31 },
// 	{ time: 1558083600, value: 226.93 },
// 	{ time: 1558087200, value: 227.15 },
// 	{ time: 1558090800, value: 226.75 },
// 	{ time: 1558094400, value: 226.5 },
// 	{ time: 1558098000, value: 227.4 },
// 	{ time: 1558101600, value: 227.96 },
// 	{ time: 1558105200, value: 226.94 },
// 	{ time: 1558335600, value: 227.64 },
// 	{ time: 1558339200, value: 226.39 },
// 	{ time: 1558342800, value: 226.03 },
// 	{ time: 1558346400, value: 225.91 },
// 	{ time: 1558350000, value: 226.21 },
// 	{ time: 1558353600, value: 225.52 },
// 	{ time: 1558357200, value: 225.71 },
// 	{ time: 1558360800, value: 226.18 },
// 	{ time: 1558364400, value: 226 }
//     ]);
    // console.log("set",typeof l[0].value)
    

    
    }
  
  return <>
      <div className=" overflow-auto portfolio-graph g-postion" ref={chartRef} />
   
  </>
  
}

export default Intra1DGraph;
