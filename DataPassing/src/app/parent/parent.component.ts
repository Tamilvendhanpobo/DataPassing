import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-parent',
  imports: [FormComponent, ListComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  items: string[] = [];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
