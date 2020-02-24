function StreamTest() {
    this.subscribedFunctions = []

    this.subscribe = function (func) {
        this.subscribedFunctions.push(func)
    }

    this.push = function(value) {
        this.subscribedFunctions.forEach(func => func(value))
    }
}

class StreamTest2 {
    subscribedFunctions = []
    
    subscribe(func){
        this.subscribedFunctions.push(func)
    }

    push(value){
        this.subscribedFunctions.forEach(func => func(value))
    }
}

//usage of StreamTest functions

// let z = new StreamTest()
// z.subscribe((value) => console.log(value));
// z.subscribe((value) => console.log(value*2));
// z.subscribe((value) => console.log(value*3));
// z.push(2)

//output:
// 2
// 4
// 6

//fetch example
fetch('http://example.com/movies.json')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });

//axios example
//   axios.get('http://localhost:8080/repository/stockPage/getAllStocksPageRecords', {
//     headers: {
//         'Access-Control-Allow-Origin': 'http://localhost:3000',
//         'Content-Type': 'application/json',
//     }
// }).then(res =>
//     this.setState({ data: res.data })
// )