import { makeAutoObservable } from "mobx";
import ApiGateway from "../Shared/ApiGateway";
// import ApiGateway from "../Shared/ApiGateway.js";


export type Book = {
  name: String;
  author: String;
}

class BooksRepository {

  /**
   * improve ui
   * add typescript
   * clean it all
   * add tests
   */

  httpGateway: ApiGateway

  books: Book[] = [];
  newBookName: string = "";
  newBookAuthor: string = "";


  constructor() {
    makeAutoObservable(this);
    this.httpGateway = new ApiGateway();
  }


  async addBook() {
      const bookAddDto = await this.httpGateway.post("/", { name: this.newBookName , author: this.newBookAuthor });
      const succsedded = bookAddDto && bookAddDto.status === "ok" ? true : false;
      if(succsedded) {
        await this.getBooks()
        this.newBookName = "";
        this.newBookAuthor = "";
      } else {
        alert('booked could not be added')
      }
  }


  getBooks = async () => {
    const booksDto = await this.httpGateway.get("/");
    this.books = booksDto
  };

  getPrivateBooks = async () => {
    const booksDto = await this.httpGateway.get("/private");
    this.books = booksDto
  };

}

const booksRepository = new BooksRepository();
export default booksRepository;

