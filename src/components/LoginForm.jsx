import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        //username / password => chatengine -> give messages means logged in
        // error -> tru with new credentials

        const authObject = {'Project-ID': "c967f55e-7b8a-42d6-bd78-8062b220ee5a", 'User-Name': username, 'User-Secret': password};

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username' , username);
            localStorage.setItem('password' , password);

            window.location.reload(); //refresh the browser
            
        } catch (error) {
            seterror('Oops, Incorrect Credentials.')
        }
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setusername(e.target.value)} className="input" placeholder="username" required/>
                    <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="input" placeholder="password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;