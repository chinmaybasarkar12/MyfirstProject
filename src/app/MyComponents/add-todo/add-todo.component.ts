import { Component, OnInit, Output,EventEmitter} from '@angular/core';

import { Todos } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title:string='';
  desc:string='';

  @Output() todoAdd:EventEmitter<Todos>=new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  addTodo()
  {
    const todo={
        sNo:5,
        title:this.title,
        desc:this.desc,
        active:true
    }
    this.todoAdd.emit(todo);
  }
}
