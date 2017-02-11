import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = "請輸入";
  todos = <any>[];
  todo = "";

  keywordAdd(itme: HTMLInputElement){
    let obj = { item:itme.value, done:false};
    if(obj.item != ""){
      this.todos.push(obj);
    }

    itme.value = "";

  }



}
