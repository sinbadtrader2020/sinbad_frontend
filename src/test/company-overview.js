class CompanyOverview {
    constructor() {
      this.result = {
        data: null,
       
      };
      
  
     
    }
    fetchData(symbol,key){
        let fetchData=[];
        
        const API_KEY='demo'
        let API_Symbol = 'IBM';
        let API_CALL=`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${API_Symbol}&apikey=${API_KEY}`
       
        fetch(API_CALL)
            .then(
                function(response) {
                return response.json();
                }
            )
            .then(
                function(data) {
                  // console.log("row",data)
                  fetchData.push(data);
                  console.log("length",fetchData.length)
                  console.log("is",fetchData[0].Symbol)
                 
                }
            )
          
    }
  }
  
  export const ComOverview = new CompanyOverview();
  