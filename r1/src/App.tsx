import {useEffect, useState}from "react";
import {ListItem} from "./components/ListItem";
import {User}from "./types/user"
import axios from "axios";

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error,setError] = useState<any>(null);/*ｴﾗｰ状態管理用*/

  useEffect(()=> {
    axios.get<User[]>("https://example.com/users")
    .then((res)=>{setUsers(res.data);})
    .catch((error)=>{setError(error);});
  },[]);

// エラーがある場合は仮のデータを表示する
if (error) {
  // 仮のデータを作成
  const mockUsers: User[] = [
    { id: 1, name: "John", age: 30, personalColor: "blue" },
    { id: 2, name: "Jane", age: 25, personalColor: "green" },
    { id: 3, name: "Doe", age: 40, personalColor: "red" }
  ];
/*ｴﾗｰの場合の表示*/
  return (
    <div>
      <p>Error fetching data. Displaying mock data:</p>
      <div>
        {mockUsers.map(user => (
          <ListItem key={user.id} id={user.id} name={user.name} age={user.age}
          personalColor={user.personalColor} 
          hobbies={user.hobbies}/>
        ))}
      </div>
    </div>
  );
}
/*通常の表示*/
  return(
    <div>
      {users.map(user=>(<ListItem id={user.id} name={user.name} age={user.age}
      personalColor={user.personalColor}
      hobbies={user.hobbies}/>
      ))}
    </div>
  );
};

export default App;
