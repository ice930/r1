import {useState} from "react";
import {useEffect} from "react";
import {ColoredMessage}from "./components/ColoredMessage";

export const App = () => {
  console.log("ﾚﾝﾀﾞﾘﾝｸﾞ")

  const [num,setNum] = useState(0);
  const onClickButton = () => {
    setNum((prev) => prev +1);
  };

  useEffect(() => {
    alert("更新");},[num]);

   return (
    <div>
      <h1 style={{color:"red"}}>こんにちは</h1>
      <ColoredMessage/>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です!</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </div>
  );
};

export default App;