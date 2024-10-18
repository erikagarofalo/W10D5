import { Injectable, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnInit {

  todo: Todo[] = [];


  constructor() {}
  ngOnInit(): void {
    this.getTodos();
  }

  async getTodos(): Promise<Todo[]> {
    let response = await fetch('assets/data/db.todo.json');
    let data = await response.json();
    console.log(data);
    
    return data as Todo[];
  }

  getCompletedToDo(): Todo[] {
    return this.todo.filter(todo => todo.completed);
  }

}
