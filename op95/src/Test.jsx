import { Link } from 'react-router-dom';
import { useState } from 'react';


export const Question = ( {title, text} ) => {
    // console.log(title + " "  + text)
    return(
        <>
        <div class="question">
            <h3 class="question-title">{title}</h3>
            <p class="question-text">{text}</p>
            <form class="question-form">
                <textarea class="question-input"></textarea>
                <button class="question-submit pretty-button">Submit</button>
            </form>
            
        </div>
        </>
    )
}

export const GenerateQuestions = ( questions ) => {
    return (
        <>
        {questions.questions.map((q) => <Question title={q.title} text={q.text} />)}
        </>
    )
}

export const GenerateTestButtons = (questionCount) => {
    const result = [];
    for (let i = 0; i < questionCount.questionCount; i++) {
        result.push(<button class="question-button pretty-button">{i+1}</button>);
    }
    console.log(result);
    return result;
}

export const TestWindow = ( {testName, time, questions} ) => {
    return (
        <>
        <div class="test window">
            <div class="window-header">
                <h4 class="window-header-text">Test: {testName}</h4>
                <div class="window-header-buttons">
                    <button class="minimize-button window-control-button"><img src="/min_window.png"/></button>
                    <button class="maximize-button window-control-button"><img src="/max_window.png"/></button>
                    <button class="close-button window-control-button"><img src="/close_window.png"/></button>
                </div>
            </div>
            <div class="test-main">
                <div class="test-left">
                    <h2 id="test-title">{testName}</h2>
                    <GenerateQuestions questions={questions} />
                    <button id="test-finish" class="pretty-button"><Link to="/">Finish Test</Link></button>
                </div>
                <div class="test-right">
                    <div class="question-list">
                    <div class="window-header">
                        <h4 class="window-header-text">Questions</h4>
                    </div>
                    <div class="question-list-buttons">
                        {/* does not work for some reason */}
                        <GenerateTestButtons questionCount = {2} />
                    </div>
                    </div>
                    <div class="timer">
                        <div class="window-header">
                            <h4 class="window-header-text">Time left</h4>
                        </div>
                        <h2 class="timer-time">{time}:00</h2>

                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export const SelectTestWindow = ( {clickHandler} ) => {
    // topic selection logic
    const [selectedOption, setSelectedOption] = useState("");
    const changeHandler = (event) => {
        setSelectedOption(event.target.value);
    }


    // actual test page
    const [showTest, setShowTest] = useState("false");

    return (
        <>
        {(showTest === "true" && 
            <TestWindow testName={selectedOption} time={5} questions={[{title: "Question 1", text: "What is static/dynamic branch prediction?"},{title: "Question 2", text: "32 - 26?"}]} />)
        }
        {showTest === "false" &&
        <div className="selecttest window">
            <div class="window-header">
                <h4 class="window-header-text">Topic Selection</h4>
                <div class="window-header-buttons">
                    <button class="minimize-button window-control-button"><img src="/min_window.png"/></button>
                    <button class="maximize-button window-control-button"><img src="/max_window.png"/></button>
                    <button class="close-button window-control-button"><img src="/close_window.png"/></button>
                </div>
            </div>
            <h2>Please choose a topic</h2>
            <label htmlFor="topic"></label>
            <select name="topic" id="topic-select" value={selectedOption} onChange={changeHandler}>
                <option value="" disabled>---Please choose a topic---</option>
                <option value="Out-of-order, Pipeline, Microarchitecture">Out-of-order, Pipeline, Microarchitecture</option>
                <option value="Пам'ять: DRAM, SRAM, архітектура">Пам'ять: DRAM, SRAM, архітектура</option>
                <option value="ISA, SIMD, архітектури машин">ISA, SIMD, архітектури машин</option>
                <option value="Паралельні обчислення, архітектури систем">Паралельні обчислення, архітектури систем</option>
                <option value="Кеш пам'ять">Кеш пам'ять</option>
                <option value="Паралельне програмування">Паралельне програмування</option>
            </select>
            <Link><button id="topic_chosen" class="pretty-button" onClick={() => selectedOption != ""? setShowTest("true"): 0}>Start</button></Link>

        </div>}
        </>
    )
}
