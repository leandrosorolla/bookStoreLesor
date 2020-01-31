import { DataApiService } from './../../servicio/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public books = [];
  public book = '';
  ngOnInit() {

    this.getOffers();
  }
  getOffers() {
    this.dataApi.getAllBooksOffers().subscribe(offers => this.books = offers);
  }
}
