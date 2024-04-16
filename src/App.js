import {useState,memo} from "react";
import {Child1} from "./components/child1";
import {Child4} from "./components/child4";


export const App =memo(() => {
  console.log("ﾚﾝﾀﾞﾘﾝｸﾞ")

  const [num,setNum]= useState(0);

  const onClickButton =()=>{
    setNum((prev) => prev+1);
  };

  const onClickReset = () => {
    setNum(0);
  };


  return(
    <>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset} />
      <Child4/>
    </>
  );
});
export default App;
