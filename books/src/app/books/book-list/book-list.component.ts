import { Component, OnInit } from '@angular/core';

import { Book } from '../../models';
import { BookService } from '../../services';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => (this.books = books));
  }

  onSelect(book: Book): void {
    console.log('selected', book);

    this.selectedBook = this.selectedBook === book ? null : book;

    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }
  }

  onCreate(book: Book) {
    console.log('creating book', book);

    this.bookService.createBook(book).subscribe(createdBook => {
      console.log(createdBook);
      // this.books.push(createdBook);
      this.books = [...this.books, createdBook];
    });
  }

  onDelete(id: number) {
    console.log('deleting book');

    this.bookService.removeBook(id).subscribe(deletedBook => {
      console.log('removed book', deletedBook);

      this.books = this.books.filter(book => book._id !== deletedBook._id);
    });
  }

  onEvent(event: Event): void {
    console.log('eventing....');

    event.stopPropagation();
  }
}
