import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './App.css';
import { WelcomeWindow } from "./WelcomeWindow.jsx";
import { LogInSignUpWindow, CreateAccountWindow, PopUpWindow } from "./PopUps.jsx";
import { SelectTestWindow, TestWindow } from "./Test.jsx";




const App = () => {
    const [anecdoteIsOpen, setAnecdote] = useState("hide");
    // PLACEHOLDER, REPLACE WITH ACTUAL LOGIN LATER
    const [LogInWindowIsOpen, setLogInWindow] = useState("false") // це дуже погано і я потім зроблю норм
    const [loggedin, setLoggedin] = useState("false");

    const [username, setUsername] = useState("");
    // 
    return (
        <BrowserRouter>
          <header class="main-page-header">
            <div id="logo"><img class="logo-icon" src="/logoicon.png" alt="Logo"/>OPYTUVANNYA95</div>
            <div class="navigation-links">
                <a class="navigation-link"><Link to="/">Home</Link></a>
                <a class="navigation-link"><Link to="/about">About Us</Link></a>
                <a class="navigation-link"><Link to="/topics">Topics</Link></a>
                <a class="navigation-link"><Link to="/contacts">Contacts</Link></a>

                {(loggedin==="true" && <p>{username}</p> )|| <button class="navigation-sign-in pretty-button">Sign In</button>}
            </div>
        </header>
        <main>
            <aside class="main-page-side-bar">
                <button class="main-page-side-bar-button"><img class="side-bar-icon" src="/anothercomputer.png" alt="Icon"/>Settings</button>
                <button class="main-page-side-bar-button"><img class="side-bar-icon" src="/computer.png" alt="Icon"/>Statistics</button>
                <button class="main-page-side-bar-button"><img class="side-bar-icon" src="/recyclebin.png" alt="Icon"/>Recycle Bin</button>
                <button class="main-page-side-bar-button"><img class="side-bar-icon" src="/folder.png" alt="Icon"/>Topics</button>
                <button class="main-page-side-bar-button" onClick={() => setAnecdote("show")}><img class="side-bar-icon" src="/anecdote.png" alt="Icon"/>Anecdote of the Day</button>
            </aside>
        
        <div class="content">
            {/* якщо це розкоментувати то буде типу симуляція логіну */}
{/*                 
            {loggedin==="false" &&
            <LogInSignUpWindow clickHandler={() => {setLogInWindow("true")}}/>} */}

            {LogInWindowIsOpen==="true" &&
            <CreateAccountWindow loginHandler={() => {setUsername(document.getElementById("form-username").value);
                                                      setLoggedin("true");
                                                      setLogInWindow("false")
            }} />}


            {anecdoteIsOpen==="show" &&
            <PopUpWindow isOpen={anecdoteIsOpen} title="Anecdote of the Day" text="Why did the developer go broke? Because he used up all his cache." clickHandler={() => setAnecdote("hide")} />}
            <Routes>
                <Route path="/" element={<WelcomeWindow />} />
                <Route path="/about" element={<PopUpWindow title="About Us" text="blablablalbalblbalblalblabllablbalab"/>} />
                <Route path="/topics" element={<PopUpWindow title="Topics" text="aks os pok"/>} />
                <Route path="/contacts" element={<PopUpWindow title="Contacts" text="How to contact us:  please don't"/>} />
                <Route path="/test" element={<SelectTestWindow clickHandler={(title) => console.log(title)}/>} />
            </Routes>

        </div>
        </main>
        <footer class="main-page-footer">
            <Link to="/test"><button class="main-page-footer-start pretty-button"><img class="start-icon" src="/bomba.png"/>Start Test</button></Link>
            <button class="main-page-footer-random-button"><img class="random-small-icon" src="/anothercomputer.png" /></button>
            <button class="main-page-footer-random-button"><img class="random-small-icon" src="/computer.png" /></button>
            <button class="main-page-footer-random-button"><img class="random-small-icon" src="/recyclebin.png" /></button>
            <button class="main-page-footer-random-button"><img class="random-small-icon" src="/folder.png" /></button>
            <button class="main-page-footer-random-button"><img class="random-small-icon" src="/anecdote.png" /></button>
        </footer>
        </BrowserRouter>
      )
}

export default App
