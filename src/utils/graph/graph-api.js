


class GraphApi{
    constructor() {
        this.result = {
          data: null,
          time: null,
          value: null,
        };
    }

    fetchData(){
        
        const API_KEY='demo'
       
        let API_CALL=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${API_KEY}`
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];
        let stockChart=[];
        fetch(API_CALL)
            .then(
                function(response) {
                return response.json();
                }
            )
            .then(
                function(data) {
                // console.log("dat1a",data);
            

                for (var key in data['Time Series (Daily)']) {
                   
                  
                    stockChartXValuesFunction.push(`${key}`);
                    stockChartYValuesFunction.push(
                        
                      
                       data['Time Series (Daily)'][key]['4. close']

                    );
                    // console.log("for", key)
                    stockChart.push(
                        
                      
                       { time:key,
                        value:parseFloat(data['Time Series (Daily)'][key]['4. close'])}
                        
                     );
                    //  console.log("----",key,"------",parseFloat(data['Time Series (Daily)'][key]['4. close']))
                }

              stockChart.reverse()
              stockChartXValuesFunction.reverse()
              stockChartYValuesFunction.reverse()
                }
                     
                
                
            )
            
          
                this.result.time=stockChartXValuesFunction;
                this.result.value= stockChartYValuesFunction
                this.result.data=stockChart;
              
        
    }
  
}


export const Graphapi= new GraphApi();



