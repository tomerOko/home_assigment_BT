
import './BooksList.css';
import { BooksModel } from '../../logic/Books/Books.model'
import { observer } from 'mobx-react';

const BooksList= () => {
  return (
    <div className="books-list">
      {BooksModel.presentedBooks.map((book, index) => (
        <div key={index} className="book-item">
          <h2>{book.name}</h2>
          <p>by {book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default observer(BooksList);
          