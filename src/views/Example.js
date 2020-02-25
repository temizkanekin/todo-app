import React from 'react'
import {Button} from '@material-ui/core'
import { withRouter } from 'react-router'
import { StreamTest } from '../test/Stream'
const ExampleView = ({...props}) => {
    const { history } = props
    const [val,setVal] = React.useState(0)
    // Complete the compareTriplets function below.

    const handleStreamTest = () => {
        let z = new StreamTest()
        z.subscribe((value) => console.log(value));
        z.subscribe((value) => console.log(value*2));
        z.subscribe((value) => console.log(value*3));
        z.push(2)
    }

    function compareTriplets(a, b) {
        // let a = [17,28,30]
        // let b= [99,16,8]
        let alice=0,bob=0
        a.forEach((item,index) => item !== b[index] && (item > b[index] ? alice++ : bob++))
        return [alice,bob]
        }

    /*
    * Complete the 'diagonalDifference' function below.
    *
    * The function is expected to return an INTEGER.
    * The function accepts 2D_INTEGER_ARRAY arr as parameter.
    */

    function diagonalDifference(arr) {
        // let a = [[11,2,4],[4,5,6],[10,8,-12]]
        // Write your code here
        let d1 = 0,d2=0
        for(let i=0;i<arr.length;i++){
                d1+=arr[i][i]
                d2+=arr[i][arr[i].length-i-1]
        }
        return Math.abs(d1-d2)
    }

    // Complete the plusMinus function below.
    function plusMinus(arr) {
        // let a = [-4, 0, 3, 2, -3, 1]
        let p=0,n=0,z=0
        arr.forEach(item => item > 0 ? p++ : item === 0 ? z++ : n++)
        return [(p/arr.length).toFixed(6),(n/arr.length).toFixed(6),(z/arr.length).toFixed(6)]
    }

    // Complete the staircase function below.
    function staircase(n) {
        // let a = [6]
        let staircase=""
        for(let i=0;i<n;i++){
            staircase=staircase.concat(" ".repeat(n-i-1)).concat("#".repeat(i+1)).concat("\n")
        }
        return staircase
    }

    // Complete the miniMaxSum function below.
    function miniMaxSum(arr) {
        // let a = [1,2,3,4,5]
        let maxSum=0,minSum=null
        for(let i=0;i<arr.length;i++){
            let tmpSum=0
            for(let k=0;k<arr.length;k++){
                if(k!==i)
                    tmpSum+=arr[k]
            }
            if(tmpSum>maxSum)
                maxSum=tmpSum
            if(!minSum)
                minSum=tmpSum
            if(!minSum || tmpSum<minSum)
                minSum=tmpSum
        }
        console.log(minSum + " " + maxSum)
        return minSum + " " + maxSum
    }
    return <div className="w-full h-full flex flex-col">
        <Button className="w-full h-full" onClick={()=>setVal(val+1)}>Increase Value: {val}</Button>
        <Button className="w-full h-full" onClick={miniMaxSum.bind(this,[1,2,3,4,5])}>Try Me</Button>
        <Button className="w-full h-full" onClick={()=>history.goBack()}>Back</Button>
        <Button className="w-full h-full" onClick={handleStreamTest.bind(this)}>StreamTest</Button>
        </div>
}

export default withRouter(ExampleView);