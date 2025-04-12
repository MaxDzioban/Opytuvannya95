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
                        <img id="large-dog" src="/dog_reading.png" />
                        <img id="lightbulb" src="/lightbulb.png" />
                    </div>
                </div>
            </div>
        </>
    )
}

const TestWindow = () => {
    return (
        <>
        <div class="test window">
            <div class="window-header">
                <h4 class="window-header-text">Test test</h4>
                <div class="window-header-buttons">
                    <button class="minimize-button window-control-button"><img src="/min_window.png"/></button>
                    <button class="maximize-button window-control-button"><img src="/max_window.png"/></button>
                    <button class="close-button window-control-button"><img src="/close_window.png"/></button>
                </div>
            </div>
            <div class="test-main">
                <div class="test-left">
                    <h2 id="test-title">This is a test test</h2>
                    <div class="question">
                        <h3 class="question-title">1. Your final challenge</h3>
                        <p class="question-text">32 - 6</p>
                        <form class="question-form">
                            <textarea class="question-input"></textarea>
                            <button class="question-submit pretty-button">Submit</button>
                        </form>
                        
                    </div>
                    <button id="test-finish" class="pretty-button">Finish Test</button>
                </div>
                <div class="test-right">
                    <div class="question-list">
                    <div class="window-header">
                        <h4 class="window-header-text">Questions</h4>
                    </div>
                    <div class="question-list-buttons">
                        {/* ADD BUTTONS FOR QUESTIONS HERE */}
                    </div>
                    </div>
                    <div class="timer">
                        <div class="window-header">
                            <h4 class="window-header-text">Time left</h4>
                        </div>
                        <h2 class="timer-time">NONE</h2>

                    </div>
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
            <button class="sign-up pretty-button">Sign up</button>
            <button class="log-in pretty-button">Log In</button>
        </div>
    </div>
    )
}

const PopUpWindow = ({ title, text, clickHandler}) => {
    return (<div class="pop-up window">
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
            <button class="ok_button pretty-button" onClick={clickHandler}>OK</button>
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
                <button class="navigation-sign-in pretty-button">Sign In</button>
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
            {anecdote==="show" &&
            <PopUpWindow title="Anecdote of the Day" text="Why did the developer go broke?Because he used up all his cache." clickHandler={() => setAnecdote("hide")} />}
            <Routes>
                <Route path="/" element={<WelcomeWindow />} />
                <Route path="/about" element={<PopUpWindow title="About Us" text="blablablalbalblbalblalblabllablbalab"/>} />
                <Route path="/topics" element={<PopUpWindow title="Topics" text="aks os pok"/>} />
                <Route path="/contacts" element={<PopUpWindow title="Contacts" text="How to contact us:  please don't"/>} />
                <Route path="/test" element={<TestWindow />}/>
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
