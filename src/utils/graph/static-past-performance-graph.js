import { createChart } from "lightweight-charts";
import React from 'react';

function  StaticGraph(props) {
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
       

          backgroundColor: '#ffffff',
          textColor: '#333',
        },
        grid: {

          horzLines: {
           
            color: '#eee',
            labelVisible: true,
    
           
          },
          vertLines: {
            color: '#ffffff',
            labelVisible: true,
          
        
          },
        },
      
      });
     
      chart.resize( props.width, props.height)
      // chart.resize( width,height)
       
      chart.applyOptions({
        timeScale:{
          rightOffset: 12,
         
          
     
          fixLeftEdge:true,
          
          
          borderVisible: true,
          borderColor: '#eee',
          visible: true,
          scaleMargins: {
            top: 0.6,
            bottom: 0.05,
        },
         
        },
   
        
        priceScale: {
          
        
          position: 'right',
       
        
          
      
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
            return businessDay.year + '-' + businessDay.month + '-' + businessDay.day;
        }
          // update tooltip
          chart.subscribeCrosshairMove(function(param) {
                  if (param.point === undefined || !param.time || param.point.x < 0 || param.point.x > chartRef.current.clientWidth || param.point.y < 0 || param.point.y > chartRef.current.clientHeight) {
                      toolTip.style.display = 'none';
                  } else {
                      const dateStr = businessDayToString(param.time);
                      toolTip.style.display = 'block';
                      var price = param.seriesPrices.get(series);
                      toolTip.innerHTML = '<div style="color: #009688">Apple Inc.</div><div style="font-size: 24px; margin: 4px 0px; color: #21384d">' + Math.round(100 * price) / 100 + '</div><div style="color: #21384d">' + dateStr + '</div>';
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
       

    // var candleSeries = chart.addCandlestickSeries();
// series.setData([
// 	{ time: '2018-10-19 15:05:00', open: 54.62, high: 55.50, low: 54.52, close: 54.90 },
// 	{ time: '2018-10-22 15:05:00', open: 55.08, high: 55.27, low: 54.61, close: 54.98 },
// 	{ time: '2018-10-23', open: 56.09, high: 57.47, low: 56.09, close: 57.21 },
// 	{ time: '2018-10-24', open: 57.00, high: 58.44, low: 56.41, close: 57.42 },
// 	{ time: '2018-10-25', open: 57.46, high: 57.63, low: 56.17, close: 56.43 },
// 	{ time: '2018-10-26', open: 56.26, high: 56.62, low: 55.19, close: 55.51 },
// 	{ time: '2018-10-29', open: 55.81, high: 57.15, low: 55.72, close: 56.48 },
// 	{ time: '2018-10-30', open: 56.92, high: 58.80, low: 56.92, close: 58.18 },
// 	{ time: '2018-10-31', open: 58.32, high: 58.32, low: 56.76, close: 57.09 },
// 	{ time: '2018-11-01', open: 56.98, high: 57.28, low: 55.55, close: 56.05 },
// 	{ time: '2018-11-02', open: 56.34, high: 57.08, low: 55.92, close: 56.63 },
// 	{ time: '2018-11-05', open: 56.51, high: 57.45, low: 56.51, close: 57.21 },
// 	{ time: '2018-11-06', open: 57.02, high: 57.35, low: 56.65, close: 57.21 },
// 	{ time: '2018-11-07', open: 57.55, high: 57.78, low: 57.03, close: 57.65 },
// 	{ time: '2018-11-08', open: 57.70, high: 58.44, low: 57.66, close: 58.27 },
// 	{ time: '2018-11-09', open: 58.32, high: 59.20, low: 57.94, close: 58.46 },
// 	{ time: '2018-11-12', open: 58.84, high: 59.40, low: 58.54, close: 58.72 },]);


series.setData([
     
       
        { time: "2018-10-18", value: 96 },
        { time: "2018-10-19", value: 95.5 },
        { time: "2018-10-22", value: 92.400002 },
        { time: "2018-10-23", value: 92.300003 },
        { time: "2018-10-24", value: 92.900002 },
        { time: "2018-10-25", value: 91.849998 },
        { time: "2018-10-26", value: 91.599998 },
        { time: "2018-10-29", value: 94.050003 },
        { time: "2018-10-30", value: 98.25 },
        { time: "2018-10-31", value: 97.25 },
        { time: "2018-11-01", value: 96.879997 },
        { time: "2018-11-02", value: 101.78 },
        { time: "2018-11-06", value: 102.4 },
        { time: "2018-11-07", value: 100.6 },
        { time: "2018-11-08", value: 98.5 },
        { time: "2018-11-09", value: 95.139999 },
        { time: "2018-11-12", value: 96.900002 },
        { time: "2018-11-13", value: 97.400002 },
        { time: "2018-11-14", value: 103.3 },
        { time: "2018-11-15", value: 102.74 },
        { time: "2018-11-16", value: 101.2 },
        { time: "2018-11-19", value: 98.720001 },
        { time: "2018-11-20", value: 102.2 },
        { time: "2018-11-21", value: 108.8 },
        { time: "2018-11-22", value: 109.9 },
        { time: "2018-11-23", value: 113.74 },
        { time: "2018-11-26", value: 110.9 },
        { time: "2018-11-27", value: 113.28 },
        { time: "2018-11-28", value: 113.6 },
        { time: "2018-11-29", value: 113.14 },
        { time: "2018-11-30", value: 114.4 },
        { time: "2018-12-03", value: 111.84 },
        { time: "2018-12-04", value: 106.7 },
        { time: "2018-12-05", value: 107.8 },
        { time: "2018-12-06", value: 106.44 },
        { time: "2018-12-07", value: 103.7 },
        { time: "2018-12-10", value: 101.02 },
        { time: "2018-12-11", value: 102.72 },
        { time: "2018-12-12", value: 101.8 },
        { time: "2018-12-13", value: 102 },
        { time: "2018-12-14", value: 102.1 },
        { time: "2018-12-17", value: 101.04 },
        { time: "2018-12-18", value: 101.6 },
        { time: "2018-12-19", value: 102 },
        { time: "2018-12-20", value: 102.02 },
        { time: "2018-12-21", value: 102.2 },
        { time: "2018-12-24", value: 102.1 },
        { time: "2018-12-25", value: 100.8 },
        { time: "2018-12-26", value: 101.02 },
        { time: "2018-12-27", value: 100.5 },
        { time: "2018-12-28", value: 101 },
        { time: "2019-01-03", value: 101.5 },
        { time: "2019-01-04", value: 101.1 },
        { time: "2019-01-08", value: 101.1 },
        { time: "2019-01-09", value: 102.06 },
        { time: "2019-01-10", value: 105.14 },
        { time: "2019-01-11", value: 104.66 },
        { time: "2019-01-14", value: 106.22 },
        { time: "2019-01-15", value: 106.98 },
        { time: "2019-01-16", value: 108.4 },
        { time: "2019-01-17", value: 109.06 },
        { time: "2019-01-18", value: 107 },
        { time: "2019-01-21", value: 105.8 },
        { time: "2019-01-22", value: 105.24 },
        { time: "2019-01-23", value: 105.4 },
        { time: "2019-01-24", value: 105.38 },
        { time: "2019-01-25", value: 105.7 },
        { time: "2019-01-28", value: 105.8 },
        { time: "2019-01-29", value: 106.1 },
        { time: "2019-01-30", value: 108.6 },
        { time: "2019-01-31", value: 107.92 },
        { time: "2019-02-01", value: 105.22 },
        { time: "2019-02-04", value: 102.44 },
        { time: "2019-02-05", value: 102.26 },
        { time: "2019-02-06", value: 102 },
        { time: "2019-02-07", value: 101.62 },
        { time: "2019-02-08", value: 101.9 },
        { time: "2019-02-11", value: 101.78 },
        { time: "2019-02-12", value: 102.7 },
        { time: "2019-02-13", value: 100.14 },
        { time: "2019-02-14", value: 101.36 },
        { time: "2019-02-15", value: 101.62 },
        { time: "2019-02-18", value: 100.74 },
        { time: "2019-02-19", value: 100 },
        { time: "2019-02-20", value: 100.04 },
        { time: "2019-02-21", value: 100 },
        { time: "2019-02-22", value: 100.12 },
        { time: "2019-02-25", value: 100.04 },
        { time: "2019-02-26", value: 98.980003 },
        { time: "2019-02-27", value: 97.699997 },
        { time: "2019-02-28", value: 97.099998 },
        { time: "2019-03-01", value: 96.760002 },
        { time: "2019-03-04", value: 98.360001 },
        { time: "2019-03-05", value: 96.260002 },
        { time: "2019-03-06", value: 98.120003 },
        { time: "2019-03-07", value: 99.68 },
        { time: "2019-03-11", value: 102.1 },
        { time: "2019-03-12", value: 100.22 },
        { time: "2019-03-13", value: 100.5 },
        { time: "2019-03-14", value: 99.660004 },
        { time: "2019-03-15", value: 100.08 },
        { time: "2019-03-18", value: 99.919998 },
        { time: "2019-03-19", value: 99.459999 },
        { time: "2019-03-20", value: 98.220001 },
        { time: "2019-03-21", value: 97.300003 },
        { time: "2019-03-22", value: 97.660004 },
        { time: "2019-03-25", value: 97 },
        { time: "2019-03-26", value: 97.019997 },
        { time: "2019-03-27", value: 96.099998 },
        { time: "2019-03-28", value: 96.699997 },
        { time: "2019-03-29", value: 96.300003 },
        { time: "2019-04-01", value: 97.779999 },
        { time: "2019-04-02", value: 98.360001 },
        { time: "2019-04-03", value: 98.5 },
        { time: "2019-04-04", value: 98.360001 },
        { time: "2019-04-05", value: 99.540001 },
        { time: "2019-04-08", value: 98.580002 },
        { time: "2019-04-09", value: 97.239998 },
        { time: "2019-04-10", value: 97.32 },
        { time: "2019-04-11", value: 98.400002 },
        { time: "2019-04-12", value: 98.220001 },
        { time: "2019-04-15", value: 98.720001 },
        { time: "2019-04-16", value: 99.120003 },
        { time: "2019-04-17", value: 98.620003 },
        { time: "2019-04-18", value: 98 },
        { time: "2019-04-19", value: 97.599998 },
        { time: "2019-04-22", value: 97.599998 },
        { time: "2019-04-23", value: 96.800003 },
        { time: "2019-04-24", value: 96.32 },
        { time: "2019-04-25", value: 96.339996 },
        { time: "2019-04-26", value: 97.120003 },
        { time: "2019-04-29", value: 96.980003 },
        { time: "2019-04-30", value: 96.32 },
        { time: "2019-05-02", value: 96.860001 },
        { time: "2019-05-03", value: 96.699997 },
        { time: "2019-05-06", value: 94.940002 },
        { time: "2019-05-07", value: 94.5 },
        { time: "2019-05-08", value: 94.239998 },
        { time: "2019-05-10", value: 92.900002 },
        { time: "2019-05-13", value: 91.279999 },
        { time: "2019-05-14", value: 91.599998 },
        { time: "2019-05-15", value: 90.080002 },
        { time: "2019-05-16", value: 91.68 },
        { time: "2019-05-17", value: 91.959999 },
        { time: "2019-05-20", value: 91.080002 },
        { time: "2019-05-21", value: 90.760002 },
        { time: "2019-05-22", value: 91 },
        { time: "2019-05-23", value: 90.739998 },
        { time: "2019-05-24", value: 91 },
        { time: "2019-05-27", value: 91.199997 },
        { time: "2019-05-28", value: 90.68 },
        { time: "2019-05-29", value: 91.120003 },
        { time: "2019-05-30", value: 90.419998 },
        { time: "2019-05-31", value: 93.800003 },
        { time: "2019-06-03", value: 96.800003 },
        { time: "2019-06-04", value: 96.34 },
        { time: "2019-06-05", value: 95.94}
    ]);
    // console.log("set",typeof l[0].value)
    

    
    }
  
  return <>
      <div className=" overflow-auto portfolio-graph g-postion" ref={chartRef} />
   
  </>
  
}

export default StaticGraph;
