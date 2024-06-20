import { makeAutoObservable } from "mobx";
import { Book, BookType, BookTypes } from "./Books.types";

class BooksModelClass {

  private publicBooks: Book[] = [];
  private privateBooks: Book[] = []
  private presentedBooksType: BookType = BookTypes.PUBLIC
  presentedBooks: Book[] = []
  newBookName = "";
  newBookAuthor = "";
  privateBooksCount = 0


  constructor() {
    makeAutoObservable(this);
  }

  private updatePresentedBooks(){
    switch(this.presentedBooksType){
      case BookTypes.PRIVATE:
        this.presentedBooks=this.privateBooks
        break;
      case BookTypes.PUBLIC:
        this.presentedBooks=this.publicBooks
        break;
    }
  }

  setBooksState( publics:Book[], privates: Book[]){
    this.publicBooks = publics
    this.privateBooks = privates
    this.updatePresentedBooks()
    this.privateBooksCount = this.privateBooks.length
  }

  setPresentedBooksType(bookType:BookType){
    this.presentedBooksType = bookType
    this.updatePresentedBooks()
  }

}

export const BooksModel = new BooksModelClass();

