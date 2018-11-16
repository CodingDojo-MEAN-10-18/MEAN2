import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../../models';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent implements OnInit {
  book: Book = new Book();

  @Output()
  createBook = new EventEmitter<Book>();

  constructor() {}

  ngOnInit() {}
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.book);

    this.createBook.emit(this.book);

    this.book = new Book();
    form.reset();
    // this.books.push(this.book);
  }
}
