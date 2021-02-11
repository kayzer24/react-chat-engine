import {ChatEngine} from 'react-chat-engine';

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

import './App.css';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="c0bd522f-4004-44b2-9155-f5a8dd0e108a"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}


export default App;