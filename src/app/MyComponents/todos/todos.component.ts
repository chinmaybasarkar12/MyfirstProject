import { Component, OnInit } from '@angular/core';

import { Todos } from '../../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  localItem:any;

  todos:Todos[]

  constructor() {
    this.localItem = localStorage.getItem("todos");

    if(this.localItem==null)
    {
      this.todos=[
        
      ]
    }
    else{
      this.todos=JSON.parse(this.localItem)
    }
    this.todos=[]
   }

  ngOnInit(): void {
  }
  onClickDelete(todo:Todos)
  {
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
    console.log("Item Deleted");
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }

  AddTodoList(todo:Todos)
  {
    this.todos.push(todo);
    
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
}
