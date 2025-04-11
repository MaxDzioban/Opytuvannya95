import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header class="main-page-header">
        <div id="logo"><img class="logo-icon" src="/logoicon.png" alt="Logo"/>OPYTUVANNYA95</div>
        <div class="navigation-links">
            <a class="navigation-link" href="https://docs.google.com/spreadsheets/d/1NgPsPB_8UHGtAehO79v54FXThUOMtFgLlBrqkL71riA/edit?gid=15096606#gid=15096606">Home</a>
            <a class="navigation-link" href="https://docs.google.com/spreadsheets/d/1NgPsPB_8UHGtAehO79v54FXThUOMtFgLlBrqkL71riA/edit?gid=15096606#gid=15096606">About Us</a>
            <a class="navigation-link" href="https://learn.ucu.edu.ua/mod/url/view.php?id=87229">Topics</a>
            <a class="navigation-link" href="https://docs.google.com/spreadsheets/d/1NgPsPB_8UHGtAehO79v54FXThUOMtFgLlBrqkL71riA/edit?gid=15096606#gid=15096606">Contacts</a>
            <button class="navigation-sign-in">Sign In</button>
        </div>
    </header>
    <main>
        <aside class="main-page-side-bar">
            <button class="main-page-side-bar-button"><img class="side-bar-icon" src="/anothercomputer.png" alt="Icon"/>My Profile</button>
            <button class="main-page-side-bar-button"><img class="side-bar-icon" src="/computer.png" alt="Icon"/>History</button>
            <button class="main-page-side-bar-button"><img class="side-bar-icon" src="/recyclebin.png" alt="Icon"/>Recycle Bin</button>
            <button class="main-page-side-bar-button"><img class="side-bar-icon" src="/folder.png" alt="Icon"/>Topics</button>
            <button class="main-page-side-bar-button"><img class="side-bar-icon" src="/anecdote.png" alt="Icon"/>Anecdote of the Day</button>
        </aside>
        <img id="large-dog" src="/dawg_reading.png" />
        <img id="lightbulb" src="/lightbulb.png" />
        <div class="banner window">
            <div class="window-header">
                <h4 class="window-header-text">Welcome</h4>
                <div class="window-header-buttons">
                    <button class="minimize-button"></button>
                    <button class="maximize-button"></button>
                    <button class="close-button"></button>
                </div>
            </div>
        <div class="banner-main">
            <h1 id="banner-title">Welcome to Opytuvannia<span class="highlighted-text">95</span></h1>
            <div class="banner-inner">
                <div class="banner-inner-text">
                    <h4 class="small-title"><img src="/info.png" />Did you know...</h4>
                    <p class="generic-text">You can prepare for any test with Opytuvannya95
                        and get a real assessment of your knowledge!
                    </p>

                </div>
                <div class="banner-inner-buttons">
                    <button class="banner-inner-button" id="wib1">Several Topics</button>
                    <button class="banner-inner-button" id="wib2">Real Conditions</button>
                    <button class="banner-inner-button" id="wib3">Instant Assessment</button>
                </div>
            </div>
          </div>
        </div>
        <div class="pop-up window">
            <div class="window-header">
                <h4 class="window-header-text">Hello</h4>
                <div class="window-header-buttons">
                    <button class="minimize-button"></button>
                    <button class="maximize-button"></button>
                    <button class="close-button"></button>
                </div>
            </div>
            <p class="generic-text">It looks like you are new here...</p>
            <p class="generic-text">Please create an account or log into an existing one to save your progress.</p>
            <div class="window-action-buttons">
                <button class="window-action-button">Log In</button>
                <button class="window-action-button">Sign Up</button>
            </div>
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
    </>
  )
}

export default App
