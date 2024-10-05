import { Component } from '@angular/core';
interface Todo{
  id: number;
  title: string;
  completed: boolean;

}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  todos: Todo[]= [];
  newTodoTitle: string = '';


  addTodo() {
    if (this.newTodoTitle.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        title: this.newTodoTitle,
        completed: false
      };
      this.todos.push(newTodo);
      this.newTodoTitle = '';
    }
  }


  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }


  toggleComplete(id: number) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }


  updateTodoTitle(id: number, newTitle: string) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.title = newTitle;
    }
  }

}
