import { observer } from 'mobx-react';
import './PrivateBooksCounter.css';
import { BooksModel } from '../../logic/Books/Books.model';



const PrivateBooksCounter = () => {
  return (
    <div className="books-counter">
      Your books: {BooksModel.privateBooksCount}
    </div>
  );
};

export default observer(PrivateBooksCounter);
