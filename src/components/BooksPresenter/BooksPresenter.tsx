import React from "react"
import booksRepository from "../../Books/Books.model"


export const BooksPresenter = () => {
    return (
        <div>
        {booksRepository.books.map((book, i) => (
          <div key={i}>
            {book.author}: {book.name}
          </div>
        ))}
      </div>
    )
}
