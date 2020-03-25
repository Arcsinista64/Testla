import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models';
import { COUNTRIES } from 'src/app/data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  countries: Country[];
  constructor() { }

  ngOnInit(): void {
    this.countries = COUNTRIES;
  }

}
