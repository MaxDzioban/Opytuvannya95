export const WelcomeWindow = () => {
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