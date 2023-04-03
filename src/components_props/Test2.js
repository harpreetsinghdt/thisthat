import Test3 from "./Test3";

function Test2(Props){
  return(
    <div>
      <h3>Test 2 Component developer by : {Props.dev}</h3>
      <Test3 dev={Props.dev}></Test3>
    </div>
  )
}

export default Test2;