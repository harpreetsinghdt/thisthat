import Test4 from "./Test4";

function Test3(Props){
  return(
    <div>
      <h4>Test 3 Component developed by : {Props.dev}</h4>
      <Test4 dev={Props.dev}></Test4>
    </div>
  )
}

export default Test3;