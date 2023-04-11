import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.less']
})
export class LibraryComponent implements OnInit{

  pages: HTMLCollectionOf<Element>;

  constructor(){
    this.pages = document.getElementsByClassName('page');
  }

  ngOnInit(): void {
    this.load();
  }

  load(){
    
    for(var i = 0; i < this.pages.length; i++)
    {
      let page:any = this.pages[i];
      if (i % 2 === 0)
        {
          page.style.zIndex = (this.pages.length - i);
        }
    }
    let a=this;
    document.addEventListener('DOMContentLoaded', function(){
      for(var i = 0; i < a.pages.length; i++)
        {
          let p:any = a.pages[i];
          p.pageNum = i + 1;
          p.onclick=function()
            {
              if (this.pageNum % 2 === 0)
                {
                  this.classList.remove('flipped');
                  this.previousElementSibling.classList.remove('flipped');
                }
              else
                {
                  this.classList.add('flipped');
                  this.nextElementSibling.classList.add('flipped');
                }
             }
          }
    })
  }

}
