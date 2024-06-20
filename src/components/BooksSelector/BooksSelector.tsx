import { BookTypes } from '../../logic/Books/Books.types';
import './BooksSelector.css';
import {setPresentedBooksType} from "../../logic/Books/Books.ctrl";


const BooksSelector = () => {
  return (
    <div className="books-selector">
      <label>
        <input
          type="radio"
          name="booksType"
          value= {BookTypes.PUBLIC.toLowerCase()}
          onChange={() => setPresentedBooksType(BookTypes.PUBLIC)}
        />
        {BookTypes.PUBLIC.toLowerCase()}
      </label>
      <label>
        <input
          type="radio"
          name="booksType"
          value= {BookTypes.PRIVATE.toLowerCase()}
          onChange={() => setPresentedBooksType(BookTypes.PRIVATE)}
        />
         {BookTypes.PRIVATE.toLowerCase()}
      </label>
    </div>
  );
};

export default BooksSelector;
