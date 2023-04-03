import Test2 from "./Test2";

function Test1(Props){
  return(
    <div>
      <h2>Test 1 Component developed by : {Props.dev}</h2>
      <Test2 dev={Props.dev}></Test2>
    </div>
  )
}

export default Test1;