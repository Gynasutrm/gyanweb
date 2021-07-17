import { createChatBotMessage } from "react-chatbot-kit";
import Options from './Options';
import Learningoptions from './Learningoptions';
import Learninglist from './Learninglist';

const config = {
    botName:"Drona",
    
  initialMessages: [createChatBotMessage(`Hi!, How can i help you?`,{
    loading:true,
  })],

// customComponents : {
//   header: () =><>This is header </>

// },

  state : {
      options:[],
      learningOptions:[],
      learninglist:[]  
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
      mapStateToProps: ["options"], 
    },
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <Learningoptions {...props} />,
      mapStateToProps: ["learningOptions"],  

    },
    {
      widgetName: "learninglist",
      widgetFunc: (props) => <Learninglist {...props} />,
      mapStateToProps: ["learninglist"],  

    },

]
}


export default config