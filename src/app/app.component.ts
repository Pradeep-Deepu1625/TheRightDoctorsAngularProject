import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryTableComponent } from './country-table/country-table.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CountryTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'countries-table';
}
