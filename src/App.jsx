import {ColoredMessage}from "./components/ColoredMessage";

export const App = () => {
  const onClickButton = () => {
    alert();
  };

   return (
    <div>
      <h1 style={{color:"red"}}>こんにちは</h1>
      <ColoredMessage/>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
    </div>
  );
};

export default App;