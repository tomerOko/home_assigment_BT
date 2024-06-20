 import { observer } from "mobx-react";
import { useEffect } from "react";

import booksRepository from "./Books/Books.repository";
import "./styles.css";

const NoneObservableApp = ()=> {

  useEffect(() => {
    async function load() {
      const books = await booksRepository.getBooks();
    }
    load();
  }, []);
 
  return (
    <>
    </>
  );
}

export default observer(NoneObservableApp);
