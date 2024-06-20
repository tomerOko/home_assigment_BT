 import { observer } from "mobx-react";



import './styles.css';
import BooksList from './components/BooksList/BooksList';
import NewBookForm from './components/NewBookForm/NewBookForm';
import PrivateBooksCounter from './components/PrivateBooksCounter/PrivateBooksCounter';
import BooksSelector from "./components/BooksSelector/BooksSelector";



const App= () => {





  return (
    <div className="app">
      <PrivateBooksCounter  />
      <NewBookForm  />
      <BooksSelector  />
      <BooksList />
    </div>
  );
};

export default observer(App);
