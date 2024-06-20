import { ApiGateway } from "../Shared/ApiGateway";
import { BookType } from "./Books.types";
import { BooksModel } from "./Books.model";
import { BOOKS_API_BASE } from "../Shared/config";

const booksApiGateway = new ApiGateway(BOOKS_API_BASE);
const STATUS_OK = "ok";

export const updateNewBookName = (name: string): void => {
  BooksModel.newBookName = name;
};

export const updateNewBookAuthor = (author: string): void => {
  BooksModel.newBookAuthor = author;
};

export const loadBooks = async (): Promise<void> => {
  try {
    const [publicBooks, privateBooks] = await Promise.all([
      booksApiGateway.get("/"),
      booksApiGateway.get("/private")
    ]);
    BooksModel.setBooksState(publicBooks, privateBooks);
  } catch (error) {
    console.error("Failed to load books:", error);
  }
};

export const addBook = async (): Promise<void> => {
  try {
    const bookAddDto = await booksApiGateway.post("/", {
      name: BooksModel.newBookName,
      author: BooksModel.newBookAuthor,
    });

    if (bookAddDto?.status === STATUS_OK) {
      await loadBooks();
      updateNewBookName("");
      updateNewBookAuthor("");
    } else {
      throw new Error("Book could not be added");
    }
  } catch (error) {
    console.error("Failed to add book:", error);
    alert("An error occurred while adding the book");
  }
};

export const setPresentedBooksType = (bookType: BookType): void => {
  BooksModel.setPresentedBooksType(bookType);
};




  /**
   * update ui
   * add tests
   */

// store.newBookName
