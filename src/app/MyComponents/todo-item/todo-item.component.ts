import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Todos } from 'src/app/todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

 @Input()
  todo!: Todos;


@Output() deleteTodoItem :EventEmitter<Todos>=new EventEmitter();
   
constructor() {
    
   }

  ngOnInit(): void {
  }

  todoDelete(todo:Todos)
  {
    this.deleteTodoItem.emit(todo);
    console.log("Delete Item Triggered");
    
  }
}

