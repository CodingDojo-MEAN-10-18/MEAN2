import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Book } from '../../models';
import { BookService } from '../../services';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent implements OnInit {
  book: Book = new Book();

  @Output()
  createBook = new EventEmitter<Book>();

  constructor(
    private readonly bookService: BookService,
    private readonly router: Router
  ) {}

  ngOnInit() {}
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.book);

    this.bookService.createBook(this.book).subscribe(newBook => {
      this.createBook.emit(this.book);

      this.book = new Book();
      form.reset();
      console.log(newBook);
      // this.router.navigate(['/']);
      this.router.navigateByUrl('/');
    });

    // this.books.push(this.book);
  }
}
