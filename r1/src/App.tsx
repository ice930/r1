import {useEffect, useState}from "react";
import {ListItem} from "./components/ListItem";
import axios from "axios";

export const App = () => {
  const [users, setusers] = useState([]);

  useEffect(()=> {
    axios.get("https://example.com/users").then((res)=>{
      setusers(res.data);
    })
  },[]);

  return(
    <div>
      {users.map(user=>(<ListItem id={user.id} name={user.name} age={user.age}/>))}
    </div>
  );
};

export default App;
