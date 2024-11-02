export interface Bio {
    id: number;
    biodata: string;
}

export interface BookTitle {
    id: number;
    title: string;
}

export interface Author {
    id: number;
    firstName: string;
    lastName: string;
    bio?: Bio;
    books: BookTitle[];
}