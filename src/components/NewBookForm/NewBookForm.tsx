
import { observer } from "mobx-react";
import { addBook, updateNewBookAuthor, updateNewBookName } from "../../logic/Books/Books.ctrl";
import { BooksModel } from "../../logic/Books/Books.model";



import React from 'react';
import './NewBookForm.css';


const NewBookForm = () => {


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addBook()
  };

  return (
    <form className="new-book-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={BooksModel.newBookName}
        onChange={(evt) => updateNewBookName(evt.target.value)}
        placeholder="New book name"
      />
      <input
       value={BooksModel.newBookAuthor}
       onChange={(evt) => updateNewBookAuthor(evt.target.value)}
       placeholder="New book author"
       type="text"
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default observer(NewBookForm);
