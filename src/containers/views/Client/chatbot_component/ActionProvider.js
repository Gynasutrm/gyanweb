class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    handleChatMessage = () => {
        const message = this.createChatBotMessage("Hello! No need to worry we will figure it out!");
        this.setChatBotMessage(message);

    }

    optionsHandler = () =>
    {
      const message = this.createChatBotMessage("Sure, will provide you the with the available options.",{
        widget:"options",
      });
      this.setChatBotMessage(message);
    }

    learningHandler = () => 
    {
      const message = this.createChatBotMessage("Sure, below is the options?",{
        widget:"learningOptions",
      });
      // console.log("Javascript");
      this.setChatBotMessage(message);
    }

    listLinkHandler = (props) => {
      const message = this.createChatBotMessage("Fantastic,I've got the following resources for you:",{
        widget:"learninglist",
        
      });
      
      this.setChatBotMessage(message);
    }


    setChatBotMessage = (message) => {
        this.setState((prevState) => ({ ...prevState,messages:[...prevState.messages,message]}))

    }

  }
  
  export default ActionProvider;