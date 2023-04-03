import Test5 from "./Test5";

function Test4(Props){
  return(
    <div>
      <h5>Test 4 Component developed by : {Props.dev}</h5>
      <Test5 dev={Props.dev}></Test5>
    </div>
  )
}

export default Test4;