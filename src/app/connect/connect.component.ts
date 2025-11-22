import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-connect',
    templateUrl: './connect.component.html',
    styleUrls: ['./connect.component.less'],
    standalone: false
})
export class ConnectComponent implements OnInit {

  chat:boolean=false;
  
  chatLog:string = "";
  input="";

  constructor(){
    
  }

  ngOnInit(): void {
    
  }

  send() {
    let userInput = this.input;
    console.log("User Input:", userInput);
    if (userInput.trim() !== '') {
      this.addMessage('user', userInput);
      let botResponse = this.getBotResponse(userInput.toLowerCase());
      console.log("Bot Response: ",botResponse);
      setTimeout((a:any)=>{a.addMessage('bot', botResponse);},500,this);
      this.input="";
    }
  }
  
  addMessage(sender:string, message:string) {
    let m = "<div class=\""+sender+"-message"
    if(sender=="bot"){
      m+=" show\">"+message+"</div>";
    }else{
      m+="\">"+message+"</div>";
    }
    this.chatLog += m;
    setTimeout((a:any)=>{a.adjustHeight();},300,this);
    
  }

  adjustHeight(){
    let a = document.getElementById("chat-log");
    if(a){
      a.scrollTop = a.scrollHeight;
    }
  }
  
  getBotResponse(input:string) {
    switch(true) {
      case input.includes('hello') || input.includes('hi'):
        return 'Hello, how can I help you today?';
      case input.includes('how are you'):
        return 'I am doing well, thank you for asking!';
      case input.includes('chatbot'):
        return 'Yes, I am a chatbot! How can I assist you?';
      case input.includes('help'):
        return 'Sure, what do you need help with?';
      default:
        return 'I am sorry, I do not understand. Can you please rephrase your question?';
    }
  }

}
