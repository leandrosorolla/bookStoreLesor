import { BookInterface } from './../../model/book';
import { DataApiService } from './../../servicio/data-api.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
public book: BookInterface = {};
  ngOnInit() {
    const idBook = this.route.snapshot.params.id;
    this.getDetails(idBook);

  }
  getDetails(idBook: string) {
    this.dataApi.getOneBook(idBook).subscribe(book => {
      this.book = book;
    });
  }
}
