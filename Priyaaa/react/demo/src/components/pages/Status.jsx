import Admin from './Admin';
import User from './User';
function Status(props) {
  const isLogin = props.isLogin;
  // if(isLogin){
    // return <Admin />;
  // }
  // else{
    // return <User />;
  // }

 isLogin? <Admin /> : <User /> //ternery rendering
}
export default Status