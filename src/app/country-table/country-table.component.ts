import { Component,OnInit } from '@angular/core';
import {  CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-country-table',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css'
})


export class CountryTableComponent implements OnInit {
  countries: any[] = [];
  editIndex: number | null = null;
  editedCountry: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCountries();
  }

  fetchCountries(): void {
    this.http.get<any[]>('https://restcountries.com/v3.1/all').subscribe(
      data => this.countries = data,
      error => console.error('Error fetching countries:', error)
    );
  }

  editCountry(index: number): void {
    this.editIndex = index;
    this.editedCountry = { ...this.countries[index] };
  }

  saveEdit(index: number): void {
    this.countries[index] = this.editedCountry;
    this.editIndex = null;
  }

  deleteCountry(index: number): void {
    this.countries.splice(index, 1);
  }
}
