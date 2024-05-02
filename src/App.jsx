import {useState} from "react";
import axios from "axios";

export const App = () =>{
  const [userList, setuserList] = useState([]);
  const [isLoading, setIsLoading]=useState(false);
  const [isError, setIsError]=useState(false);

const onClickFetchUser=()=>{
  setIsLoading(true);
  setIsError(false);

  axios
   .get("https://example.com/users")
   .then(result => {
    const users = result.data.map(user=>({
      id: user.id,
      name: '${user.lesultname} &{user.firstname}',
      age: user.age
    }));
    setuserList(users);
   })
   .catch(()=> setIsError(true))
   .finally(()=> setIsLoading(false));
};

return(
  <div>
   <button onClick={onClickFetchUser}>ﾕｰｻﾞｰ取得</button>
   {isError && <p style={{color: "red"}}>エラーが発生しました</p>}
   {isLoading ?(<p>ﾃﾞｰﾀ取得中です。</p>):(
    userList.map(user=>(
      <p key ={user.id}>{'${user.id}:${user.name}(${user.age}歳)'}</p>
    ))
   )}
   </div>
  );
};

export default App;
