import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './App.css';
import { WelcomeWindow } from "./WelcomeWindow.jsx";
import { LogInSignUpWindow, CreateAccountWindow, PopUpWindow } from "./PopUps.jsx";
import { SelectTestWindow, TestWindow } from "./Test.jsx";
import { NotepadWindow } from './Notepad.jsx';




const App = () => {
    const [anecdoteIsOpen, setAnecdote] = useState("hide");


    // PLACEHOLDER, REPLACE WITH ACTUAL LOGIN LATER
    const [LogInWindowIsOpen, setLogInWindow] = useState("false") // це дуже погано і я потім зроблю норм
    const [loggedin, setLoggedin] = useState("false");

    const [username, setUsername] = useState("");

    const [openWindows, setOpenWindows] = useState(["Home"]);

    // 
    return (
        <BrowserRouter>
          <header className="main-page-header">
            <div id="logo"><img className="logo-icon" src="/logoicon.png" alt="Logo"/>OPYTUVANNYA95</div>
            <div className="navigation-links">
                <Link className="navigation-link" to="/">Home</Link>
                <Link className="navigation-link" to="/about">About Us</Link>
                <Link className="navigation-link" to="/topics">Topics</Link>
                <Link className="navigation-link" to="/contacts">Contacts</Link>

                {(loggedin==="true" && <p>{username}</p> )|| <button className="navigation-sign-in pretty-button">Sign In</button>}
            </div>
        </header>
        <main>
            <aside className="main-page-side-bar">
                <button className="main-page-side-bar-button"><img className="side-bar-icon" src="/anothercomputer.png" alt="Icon"/>Settings</button>
                <button className="main-page-side-bar-button"><img className="side-bar-icon" src="/computer.png" alt="Icon"/>Statistics</button>
                <button className="main-page-side-bar-button"><img className="side-bar-icon" src="/recyclebin.png" alt="Icon"/>Recycle Bin</button>
                <button className="main-page-side-bar-button"><img className="side-bar-icon" src="/folder.png" alt="Icon"/>Topics</button>
                <button className="main-page-side-bar-button" onClick={() => setAnecdote("show")}><img className="side-bar-icon" src="/anecdote.png" alt="Icon"/>Anecdote of the Day</button>
            </aside>
        
        <div className="content">
            {/* якщо це розкоментувати то буде типу симуляція логіну */}
                
            {/* {loggedin==="false" &&
            <LogInSignUpWindow clickHandler={() => {setLogInWindow("true")}}/>} */}

            {LogInWindowIsOpen==="true" &&
            <CreateAccountWindow loginHandler={() => {setUsername(document.getElementById("form-username").value);
                                                      setLoggedin("true");
                                                      setLogInWindow("false")
            }} />}


            {anecdoteIsOpen==="show" &&
            <PopUpWindow isOpen={anecdoteIsOpen} title="Anecdote of the Day" text={"Placeholder anecdote"} clickHandler={() => setAnecdote("hide")} />}
            <Routes>
                <Route path="/" element={<WelcomeWindow />} />
                <Route path="/about" element={<NotepadWindow title="About Us" content="      ------------------------------------------------      
                                                     ABOUT US
      ------------------------------------------------   
   Hello! We are aspiring web developers from UCU :+)

   This tool was designed to make your test preparations easy and fun.
   
   Important: This tool uses AI for evaluating your answers, and we are
   not responsible for any errors or inappropriate behaviour.
   This is a demo version of the tool, may contain bugs.

   Have fun!
   




   
   ▒▒▄▀▀▀▀▀▄▒▒▒▒▒▄▄▄▄▄▒▒▒
   ▒▐░▄░░░▄░▌▒▒▄█▄█▄█▄█▄▒
   ▒▐░▀▀░▀▀░▌▒▒▒▒▒░░░▒▒▒▒
   ▒▒▀▄░═░▄▀▒▒▒▒▒▒░░░▒▒▒▒
   ▒▒▐░▀▄▀░▌▒▒▒▒▒▒░░░▒▒▒▒
"/>} />
                <Route path="/topics" element={<NotepadWindow title="Topics" content="      ------------------------------------------------      
                                                       TOPICS
      ------------------------------------------------      
   Architecture of Computer Systems (Ukrainian)
                 - Out-of-order, Pipeline, Microarchitecture
                 - Пам'ять: DRAM, SRAM, архітектура
                 - ISA, SIMD, архітектури машин
                 - Паралельні обчислення, архітектури систем
                 - Кеш пам'ять
                 - Паралельне програмування"/>} />
                <Route path="/contacts" element={<NotepadWindow title="Contacts" content="      ------------------------------------------------      
                                           HOW TO CONTACT US
      ------------------------------------------------   
   Please don't"/>} />
                <Route path="/test" element={<SelectTestWindow clickHandler={(title) => console.log(title)}/>} />
            </Routes>

        </div>
        </main>
        <footer className="main-page-footer">
            <Link to="/test"><button className="main-page-footer-start pretty-button"><img className="start-icon" src="/bomba.png"/>Start Test</button></Link>
            {openWindows.map((item,index) => (
                <button className="main-page-footer-random-button">{item}</button>
            ))}
        </footer>
        </BrowserRouter>
      )
}

export default App
