import Admin from "./Components/Admin";
import User from "./Components/User";

function Status(props){
    const isLogin = props.isLogin;
    // if(isLogin){  //conditional rendering
    //     return <Admin/>;
    // }else{
    //     return <User/>
    // }
return
<>
isLogin ? <Admin/> : <User/> //ternery rendering

</>
}
export default Status