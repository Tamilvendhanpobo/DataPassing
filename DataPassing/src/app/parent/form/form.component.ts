import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports:[FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output() addItem = new EventEmitter<string>();

  newItem: string = '';

  submit() {
    if (this.newItem.trim()) {
      this.addItem.emit(this.newItem);
      this.newItem = '';
    }
  }
}
