import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.interface';
import { User } from 'src/app/interfaces/user.interface';
import { TodoService } from 'src/app/services/todo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  todos: Todo[] = [];
  combinedItems: (Todo & { assignedTo: string })[] = [];

  constructor(private srvToDo: TodoService, private srvUser: UserService) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      this.todos = await this.srvToDo.getTodos();
      this.users = await this.srvUser.getUsers();

      this.combinedItems = this.todos.map(todo => {
        const assignedTo = this.getName(todo.userId);
        return { ...todo, assignedTo };
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  getName(id: number): string {
    const user = this.users.find(user => user.id === id);
    return user ? `${user.firstName} ${user.lastName}` : '';
  }

  getDoneTodos(userId: number): Todo[] {
    return this.todos.filter(todo => todo.userId === userId && todo.completed);
  }

  getUndoneTodos(userId: number): Todo[] {
    return this.todos.filter(todo => todo.userId === userId && !todo.completed);
  }

  toggleCompleted(todo: Todo & { assignedTo: string }): void {
    todo.completed = !todo.completed;
    // Puoi inserire qui la logica per salvare il cambiamento di stato del todo sul backend, se necessario.
  }

  hasTasks(userId: number): boolean {
    return this.combinedItems.some(todo => todo.userId === userId);
  }
}
