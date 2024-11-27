import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchInputComponent } from './search-input/search-input.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [SearchInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokescrepex-front';
  inputValue = '';
}