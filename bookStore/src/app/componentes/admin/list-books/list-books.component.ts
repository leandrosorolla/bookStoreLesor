import { AuthService } from 'src/app/servicio/auth.service';
import { UserInterface } from './../../../model/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { BookInterface } from './../../../model/book';
import { DataApiService } from './../../../servicio/data-api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  constructor(private dataApi: DataApiService, private authService: AuthService) { }
  private books: BookInterface[];
  public isAdmin: any = null;
  public userUid: string = null;
  ngOnInit() {
    this.getListBooks();
    this.getCurrentUser();
  }
  getCurrentUser(){
    this.authService.isAuth().subscribe(auth=>{
      if(auth){
        this.userUid=auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole =>{
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
        //  this.isAdmin = true;
        });
      }
    });
  }
  getListBooks() {
    this.dataApi.getAllBooks().subscribe(books => {
      this.books = books;

    });
  }
  onDeleteBook(idBook: string) {
    const confirmacion = confirm('Are you sure?');
    if (confirmacion) {
      this.dataApi.deleteBook(idBook);
    }
  }
  onPreUpdateBook(book: BookInterface){
    console.log('BOOK',book);
    this.dataApi.selectedBook = Object.assign({}, book);
  }
}
