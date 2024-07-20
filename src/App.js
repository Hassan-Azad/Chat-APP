import { ChatEngine } from "react-chat-engine";
import ChatFeed  from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

import './App.css';

const App = () =>{

    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
             height="100vh"    //props
             projectID="c967f55e-7b8a-42d6-bd78-8062b220ee5a"      //props
             userName={localStorage.getItem('username')}      //props
             userSecret={localStorage.getItem('password')}     //props
             renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;