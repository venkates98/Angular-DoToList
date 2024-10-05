import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
updateTodoTitle() {
throw new Error('Method not implemented.');
}
  @Input() todo!: { id: number, title: string, completed: boolean };
  @Output() delete = new EventEmitter<number>();
  @Output() toggleComplete = new EventEmitter<number>();
  @Output() updateTitle = new EventEmitter<{ id: number, newTitle: string }>();

  editing = false;
  editTitle: string = '';


  startEditing() {
    this.editing = true;
    this.editTitle = this.todo.title;
  }


  saveTitle() {
    if (this.editTitle.trim()) {
      this.updateTitle.emit({ id: this.todo.id, newTitle: this.editTitle });
      this.editing = false;
    }
  }

 
  cancelEditing() {
    this.editing = false;
  }

  
  toggleTodoComplete() {
    this.toggleComplete.emit(this.todo.id);
  }


  deleteTodo() {
    this.delete.emit(this.todo.id);
  }
}
