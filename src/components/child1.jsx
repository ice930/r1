import {memo} from "react";
import {Child2} from "./child2";
import {Child3} from "./child3";

const style = {
  height:"200px",
  backgroundColor:"lightblue",
  padding:"8px"
};

export const Child1 = memo((props) => {
  const {onClickReset} = props;

  return(
    <div style={style}>
      <p>Child1</p>
      <button onClick={onClickReset}>リセット</button>
      <Child2 />
      <Child3 />
    </div>
  );
});
