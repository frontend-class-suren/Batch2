import Admin from "./Admin";
import User from "./User";

function Status(props){
  const isLogin = props.isLogin;
//   if(isLogin) 
//       {
// return<Admin/>;
//       }else{
// return <User/>
//       }
  
// }
return
  (
    <>
    {isLogin ? <Admin/> : <User/>} //ternary operator use
    </>
  )

}
export default Status;