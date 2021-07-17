import React, { useEffect } from 'react';

const data = [

    {
        id:1,
        title:"Pathsala"
        
    },
    {
        id:2,
        title:"E-Gyan"
        
    },
    {
        id:3,
        title:"Cambridge Program"
        
    },
    {
        id:4,
        title:"Content Development"
        
    } 
];



const Options = (props) => {

    

    const { setState } = props;

    const data1 = [
        {
          text: "Javascript",
          handler: props.actionProvider.handleJavascriptQuiz,
          id: 1,
        },
        { text: "Python", handler: () => {}, id: 2 },
        { text: "Golang", handler: () => {}, id: 3 },
      ];

    useEffect(() => {
       setState((state) => ({...state,options:data}));
    },[]);

    const renderOptions = () => {

        return props.options.map(option => {
                    return ( <li key={option.id}>{option.title}</li>);

            
        });

    };

    const buttonsMarkup = data1.map((data) => (
        <button key={data.id} onClick={data.handler} className="option-button">
          {data.text}
        </button>
      ));

    return (
        <div style={{color:"1d1d1d"}}>
           <ul>
                {renderOptions()}
           </ul>
           {/* <div className="options-container">{buttonsMarkup}</div> */}
        </div>
    )
}

export default Options
