export type Book = {
    name: String;
    author: String;
}

export const BookTypes = {
    PRIVATE: "PRIVATE",
    PUBLIC: "PUBLIC"
} as const

export type BookType = keyof typeof BookTypes