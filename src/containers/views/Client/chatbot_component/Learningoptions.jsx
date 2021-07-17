import React from 'react'
import './Learningoptions.css';

const Learningoptions = (props) => {

    const options = [
        { text: "Course1", 
        handler:props.actionProvider.listLinkHandler, 
        id: 1 },
        { text: "Course2", handler: () => {}, id: 2 },
        { text: "Course3", handler: () => {}, id: 3 },
        { text: "Course4", handler: () => {}, id: 4 },
        { text: "Course5", handler: () => {}, id: 5 },
      ];

      const optionsMarkup = options.map((option) => (
        <button
          className="learning-option-button"
          key={option.id}
          onClick={option.handler}
        >
          {option.text}
        </button>
        
      ));

    return (
        <div className="learning-options-container">
              {optionsMarkup}   
        </div>
    )
}

export default Learningoptions
