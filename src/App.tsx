 import { observer } from "mobx-react";
import React, { useEffect } from "react";

import booksRepository from "./Books/Books.repository";
import AddBook from "./components/AddBook";
import "./styles.css";

const NoneObservableApp = ()=> {

  useEffect(() => {
    async function load() {
      const books = await booksRepository.getBooks();
    }
    load();
  }, []);

  return (
    <div>
      {booksRepository.books.map((book, i) => (
        <div key={i}>
          {book.author}: {book.name}
        </div>
      ))}
      <AddBook></AddBook>
    </div>
  );
}

export default observer(NoneObservableApp);
