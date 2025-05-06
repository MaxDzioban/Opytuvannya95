import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Timer } from "./Timer.jsx";

export const Question = ( {title, text} ) => {
    // console.log(title + " "  + text)
    return(
        <>
        <div class="question">
            <h3 class="question-title">{title}</h3>
            <p class="question-text">{text}</p>
            <form class="question-form">
                <textarea class="question-input"></textarea>
            </form>
            
        </div>
        </>
    )
}

export const GenerateQuestions = ( questions ) => {
    let i = 1
    return (
        <>
        {questions.questions.map((q) => <Question title={"Question " + i++} text={q} />)}
        </>
    )
}

export const GenerateTestButtons = (questionCount) => {
    const result = [];
    for (let i = 0; i < questionCount; i++) {
        result.push(<button class="question-button pretty-button">{i+1}</button>);
    }
    // console.log(result);
    return result;
}

export const TestWindow = ( {testName, time, questions} ) => {
    const [isFinished, setFinished] = useState(false)
    const [answers, setAnswers] = useState([]);
    let inputs = document.getElementsByClassName("question-input");
    const finishHandler = () => {
        for (let i = 0; i < questions.length; i++) {
            setAnswers(prev => [...prev, inputs[i].value]);
        }
        setFinished(true);
    }


    return (
        <>
        {isFinished && 
        <ResultsWindow topic={testName} questions={questions} answers={answers} />
        ||
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
                    <button id="test-finish" class="pretty-button" onClick={finishHandler}>Finish Test</button>
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
                    <Timer timeInMins={time} onComplete={finishHandler} />
                </div>

            </div>
        </div>}
        </>
    )
}

export const ResultsWindow = ({topic, questions, answers}) => {
    let final_score = 0;

    async function submitAnswer(i, question, answer) {
        console.log(JSON.stringify({ question, answer }));
        const res = await fetch("http://localhost:3000/api/evaluate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question, answer })
        });

        const data = await res.json();
        final_score += data["score"];
        const newRow = document.createElement("tr");

        for (let element of [document.createTextNode(i+1), 
                             document.createTextNode(data["score"]),
                             document.createTextNode(answer),
                             document.createTextNode(data["comment"])
        ]) {
            const newCell = document.createElement("td");
            newCell.append(element);
            newRow.append(newCell);
        }

        document.getElementById("responses-body").appendChild(newRow);


    }
    for (let i = 0; i < questions.length; i++) {
        submitAnswer(i, questions[i], answers[i]);
    }
    
    return (
        <>
        <div className="results window">
            <div class="window-header">
                <h4 class="window-header-text">Results</h4>
                <div class="window-header-buttons">
                    <button class="minimize-button window-control-button"><img src="/min_window.png"/></button>
                    <button class="maximize-button window-control-button"><img src="/max_window.png"/></button>
                    <Link to="/"><button class="close-button window-control-button"><img src="/close_window.png"/></button></Link>
                </div>
            </div>
            <h2>Your score: <span id="test-score">...</span></h2>
            <table id="responses">
                <thead>
                    <tr>
                        <th>Question №</th>
                        <th>Score</th>
                        <th>Your Answer</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody id="responses-body">

                </tbody>
                
            </table>
        </div>
        </>
    )
}


export const SelectTestWindow = ( {clickHandler} ) => {
    // fetch all questions
    // OPTIMIZE MAYBE? TODO
    let allQuestions = {};
    const [topicQuestions, setTopicQuestions] = useState({});
    const [selectedIndices, setIndices] = useState(new Set());

    // not async so that all questions are loaded in the beginning
    // TODO: add loading logic
    async function loadAllQuestions() {
        try {
            const res = await fetch("http://localhost:4000/questions");
            const data = await res.json();

            // Групуємо питання за topic
            data.forEach(q => {
                if (!allQuestions[q.topic]) {
                    allQuestions[q.topic] = [];
                }
                allQuestions[q.topic].push(q.text);
            });

        } catch (err) {
            // TODO: add error pop-up
            // document.getElementById("question").value = "Помилка завантаження бази питань.";
            console.error("Помилка завантаження:", err);
        }
    }
    loadAllQuestions();




    // topic selection logic
    const [selectedOption, setSelectedOption] = useState("");
    const [questionCount, setQuestionCount] = useState(0);

    const changeHandler = (event) => {
        setSelectedOption(event.target.value);
        setTopicQuestions(allQuestions[event.target.value]);

    }
    const numberChangeHandler = (event) => {
        setQuestionCount(event.target.value);
        setIndices(pick_random());
    }


    // actual test page
    const [showTest, setShowTest] = useState("false");
    
    const pick_random = () => {
        const set = new Set()
        while(set.size <= questionCount) {
            set.add(Math.floor(Math.random() * topicQuestions.length) + 1)
        }
        return set
    }



    return (
        <>
        {(showTest === "true" && 
            <TestWindow testName={selectedOption} time={questionCount} questions={[...selectedIndices].map(i => topicQuestions[i])} />)
        }
        {showTest === "false" &&
        <div className="selecttest window">
            <div class="window-header">
                <h4 class="window-header-text">Topic Selection</h4>
                <div class="window-header-buttons">
                    <button class="minimize-button window-control-button"><img src="/min_window.png"/></button>
                    <button class="maximize-button window-control-button"><img src="/max_window.png"/></button>
                    <Link to="/"><button class="close-button window-control-button"><img src="/close_window.png"/></button></Link>
                </div>
            </div>
            <h2>What will you study today?</h2>
            <label htmlFor="topic">Topic:</label>
            <select name="topic" id="topic-select" value={selectedOption} onChange={changeHandler}>
                <option value="" disabled>------Not Chosen------</option>
                <option value="Out-of-order, Pipeline, Microarchitecture">Out-of-order, Pipeline, Microarchitecture</option>
                <option value="Пам'ять: DRAM, SRAM, архітектура">Пам'ять: DRAM, SRAM, архітектура</option>
                <option value="ISA, SIMD, архітектури машин">ISA, SIMD, архітектури машин</option>
                <option value="Паралельні обчислення, архітектури систем">Паралельні обчислення, архітектури систем</option>
                <option value="Кеш пам'ять">Кеш пам'ять</option>
                <option value="Паралельне програмування">Паралельне програмування</option>
            </select>
            
            <label for="questions-number">Number of Questions :</label>
            <input type="number" id="questions-number-select" name="questions-number" min="1" max={(topicQuestions && topicQuestions.length > 1) ? topicQuestions.length : 1} onChange={numberChangeHandler} /> 
            <Link><button id="topic_chosen" class="pretty-button" onClick={() => selectedOption != ""? setShowTest("true"): 0}>Start</button></Link>

        </div>}
        </>
    )
}
