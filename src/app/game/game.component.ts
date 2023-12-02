import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less']
})
export class GameComponent {
  answer=0;
  ind = 0;
  hide=false;
  g1=[
    {q:"You mind playing a quick number game?",a:0},
    {q:"Think of number betwwen 0 and 31",a:0},
    {q:"Is your number present in "+randomize([16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]),a:16},
    {q:"Is it present in "+randomize([8,9,10,11,12,13,14,15,24,25,26,27,28,29,30]),a:8},
    {q:"Is your number present in "+randomize([4,5,6,7,12,13,14,15,20,21,22,23,28,29,30]),a:4},
    {q:"Is it present in "+randomize([2,3,6,7,10,11,14,15,18,19,22,23,26,27,30]),a:2},  
    {q:"Is it an odd number? ",a:1},
    {q:"Thanks, Based on responses I figured your number is "+this.answer,a:0}
  ];

  constructor(){

  }

  yes(){
    if(this.ind==this.g1.length-1){
      this.answer=0;
      this.ind==0;
    }else{
      this.answer+=this.g1[this.ind].a;
      this.ind++;
    }
  }

  no(){
    if(this.ind==0 || this.ind==this.g1.length-1){
      this.hide=true;
    }else{
      this.ind++;
    }
  }


}


export const randomize =function(arr:number[]){
  var out = [];
  while(arr.length>1){
    var ind = Math.floor(Math.random()*arr.length);
    out.push(arr[ind]);
    arr.splice(ind,1);
  }
  out.push(arr[0]);
  return out;
}