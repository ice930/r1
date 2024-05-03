import {useState} from "react";
import {useFetchUsers} from "./hooks/useFetchUsers"

export const App = () =>{
  const {userList, isLoading, isError, onClickFetchUser}= useFetchUsers();
  
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
