import React from "react";
import { observer } from "mobx-react";

import store from "../Books/Books.repository";
import "./AddBook.css"; // Create a CSS file for custom styles

function AddBook() {
  return (
    <div className="grid">

        <input
            className="input"
            value={store.newBookName}
            onChange={(evt) => {
                store.newBookName = evt.target.value
            }}
            placeholder="New book name"
            type="text"
        />

        <input
            className="input"
            value={store.newBookAuthor}
            onChange={(evt) => {
                store.newBookAuthor = evt.target.value
            }}
            placeholder="New book author"
            type="text"
        />

        
      <button className="button" onClick={() => store.addBook()}>Add Book</button>
    </div>
  );
}

export default observer(AddBook);