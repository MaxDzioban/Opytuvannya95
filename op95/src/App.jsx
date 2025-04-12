import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './App.css'

const WelcomeWindow = () => {
    return (
        <>
        <div class="welcome window">
            <div class="window-header">
                <h4 class="window-header-text">Home</h4>
                <div class="window-header-buttons">
                    <button class="minimize-button window-control-button"><img src="/min_window.png"/></button>
                    <button class="maximize-button window-control-button"><img src="/max_window.png"/></button>
                    <button class="close-button window-control-button"><img src="/close_window.png"/></button>
                </div>
            </div>
            <div class="welcome-main">
                <div class="welcome-main-side">
                    <h1 id="welcome-title">Welcome to Opytuvannia<span class="highlighted-text">95</span></h1>
                        <div class="welcome-inner-text">
                            <h4 class="small-title"><img src="/info.png" />Did you know...</h4>
                            <p class="generic-text">You can prepare for any test with Opytuvannya95
                                and get a real assessment of your knowledge!
                            </p>
                        </div>
                    </div>
                    <div class="welcome-image">
                        <img id="large-dog" src="/dawg_reading.png" />
                        <img id="lightbulb" src="/lightbulb.png" />
                    </div>
                </div>
            </div>
        </>
    )
}


const LogInWindow = () => {
    return (
    <div class="loginsignup window">
        <div class="window-header">
            <h4 class="window-header-text">Hello</h4>
            <div class="window-header-buttons">
                <button class="minimize-button window-control-button"><img src="/min_window.png"/></button>
                <button class="maximize-button window-control-button"><img src="/max_window.png"/></button>
                <button class="close-button window-control-button"><img src="/close_window.png"/></button>
            </div>
        </div>
        <div class="window-text">
            <p>It looks like you are new here...<br/>Please create an account or log into an existing one to save your progress.</p>
        </div>
        <div class="window-buttons">
            <button class="sign-up">Sign up</button>
            <button class="log-in">Log In</button>
        </div>
    </div>
    )
}

const PopUpWindow = ({ title, text, zi=0 }) => {
    return (<div class="popup window" style={{ zIndex: zi }}>
        <div class="window-header">
            <h4 class="window-header-text">{title}</h4>
            <div class="window-header-buttons">
                <button class="minimize-button window-control-button"><img src="/min_window.png"/></button>
                <button class="maximize-button window-control-button"><img src="/max_window.png"/></button>
                <button class="close-button window-control-button"><img src="/close_window.png"/></button>
            </div>
        </div>
        <div class="window-text">
            {text}
        </div>
        <div class="window-buttons">
            <button class="ok_button">OK</button>
        </div>
    </div>)
}

const App = () => {
    const [anecdote, setAnecdote] = useState("hide");
    return (
        <BrowserRouter>
          <header class="main-page-header">
            <div id="logo"><img class="logo-icon" src="/logoicon.png" alt="Logo"/>OPYTUVANNYA95</div>
            <div class="navigation-links">
                <a class="navigation-link"><Link to="/">Home</Link></a>
                <a class="navigation-link"><Link to="/about">About Us</Link></a>
                <a class="navigation-link"><Link to="/topics">Topics</Link></a>
                <a class="navigation-link"><Link to="/contacts">Contacts</Link></a>
                <button class="navigation-sign-in">Sign In</button>
            </div>
        </header>
        <main>
            <aside class="main-page-side-bar">
                <button class="main-page-side-bar-button"><img class="side-bar-icon" src="/anothercomputer.png" alt="Icon"/>My Profile</button>
                <button class="main-page-side-bar-button"><img class="side-bar-icon" src="/computer.png" alt="Icon"/>History</button>
                <button class="main-page-side-bar-button"><img class="side-bar-icon" src="/recyclebin.png" alt="Icon"/>Recycle Bin</button>
                <button class="main-page-side-bar-button"><img class="side-bar-icon" src="/folder.png" alt="Icon"/>Topics</button>
                <button class="main-page-side-bar-button" onClick={() => setAnecdote("show")}><img class="side-bar-icon" src="/anecdote.png" alt="Icon"/>Anecdote of the Day</button>
            </aside>
        
        <div class="content">
            {anecdote==="show" &&
            <PopUpWindow title="Anecdote of the Day" text="Why did the developer go broke?Because he used up all his cache." zi="1" />}
            <Routes>
                <Route path="/" element={<WelcomeWindow />} />
                <Route path="/about" element={<PopUpWindow title="About Us" text="blablablalbalblbalblalblabllablbalab"/>} />
                <Route path="/topics" element={<PopUpWindow title="Topics" text="aks os pok"/>} />
                <Route path="/contacts" element={<PopUpWindow title="Contacts" text="How to contact us:  please don't"/>} />

            </Routes>

        </div>
        </main>
        <footer class="main-page-footer">
            <button class="main-page-footer-start"><img class="start-icon" src="/bomba.png"/>Start</button>
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
