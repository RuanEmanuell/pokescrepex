import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class SearchInputComponent {
  @Input() inputValue : string = "";
  @Output() inputValueChange = new EventEmitter<string>();

  onInputChange(value: string){
    this.inputValueChange.emit(value);
  }
}
