import { useState } from 'react'
import { Transition } from "react-transition-group"


export const LogInSignUpWindow = ( {clickHandler} ) => {
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
            <button class="sign-up pretty-button" onClick={clickHandler}>Sign up</button>
            <button class="log-in pretty-button" onClick={clickHandler}>Log In</button>
        </div>
    </div>
    )
}


export const CreateAccountWindow = ( {loginHandler} ) => {
    return (
        <div class="create-account window">
        <div class="window-header">
            <h4 class="window-header-text">hmmmm</h4>
            <div class="window-header-buttons">
                <button class="minimize-button window-control-button"><img src="/min_window.png"/></button>
                <button class="maximize-button window-control-button"><img src="/max_window.png"/></button>
                <button class="close-button window-control-button"><img src="/close_window.png"/></button>
            </div>
        </div>
        <div class="window-text">
            <p class="window-text">Type a username and password to log in.</p>
            <form id="create-account-form">
                <p class="window-text">Username:</p>
                <input id="form-username" type="text"></input>
                <p class="window-text">Password:</p>
                <input id="form-password" type="password"></input>
            </form>
        </div>
        <div class="window-buttons">
            <button class="confirmAccount pretty-button" onClick={loginHandler}>Confirm</button>
        </div>
    </div>
    )
}


export const PopUpWindow = ({ isOpen=true, title, text, clickHandler}) => {
    // fix this transition please...
    return (
    <Transition in={isOpen} timeout={350} unmountOnExit={true}>
        {(state) =>
            <div className={`window--${state}`}>
            <div className={`pop-up window`}>
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
            </div>
        </div>}
    </Transition>
    )
}