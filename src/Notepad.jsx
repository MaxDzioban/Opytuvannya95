import React from 'react'
import { Link } from 'react-router-dom'

const SplitText = ({ text }) => {
    return (
      <div>
        {text.split("\\n").map((line, index) => (
          <span key={index}>
            {line}
          </span>
        ))}
      </div>
    );
  };

export const NotepadWindow = ({ title, content, clickHandler }) => {
    console.log(content);
    return ( 
                <div className={`notepad window`}>
                    <div className="window-header">
                        <h4 className="window-header-text">{title}</h4>
                        <div className="window-header-buttons">
                            <button className="minimize-button window-control-button"><img src="/min_window.png"/></button>
                            <button className="maximize-button window-control-button"><img src="/max_window.png"/></button>
                            <Link to="/"><button className="close-button window-control-button"><img src="/close_window.png"/></button></Link>
                        </div>
                    </div>
                    <div className="notepad-header">
                        <p><span className="underline">F</span>ile</p>
                        <p><span className="underline">E</span>dit</p>
                        <p><span className="underline">S</span>earch</p>
                        <p><span className="underline">H</span>elp</p>
                        
                    </div>
                    <div className="notepad-inner">
                        <div id="notepad-text"><SplitText text={content} /></div>
                    </div>
            </div>
        )
}
