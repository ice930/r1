import {ColoredMessage}from "./components/ColoredMessage";

export const App = () => {
  const onClickButton = () => {
    alert();
  };

  const contentsPinkStyle = {
    color:"pink",
    fontsize:"20px"
  };

  return (
    <div>
      <h1 style={{color:"red"}}>こんにちは</h1>
      <ColoredMessage/>
      <p style={contentsPinkStyle}>元気です！</p>
      <button onClick={onClickButton}>ボタン</button>
    </div>
  );
};

export default App;