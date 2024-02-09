import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  task: string = '';
  completed: boolean = false;
  duration: number = 0;

  todos: Todo[] = [];

  onSubmit() {
    const newTodo: Todo = {task: this.task, completed: this.completed, duration: this.duration};    
    
    this.todos.push(newTodo);
  }


}
