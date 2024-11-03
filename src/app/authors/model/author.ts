export interface Links {
    self: { href: string };
    bio?: { href: string };
    books?: { href: string };
}

export interface Bio {
    id: number;
    biodata: string;
    _links: Links;
}

export interface BookTitle {
    id: number;
    title: string;
    _links: Links;
}

export interface Author {
    id: number;
    firstName: string;
    lastName: string;
    bio?: Bio;
    books: BookTitle[];
    _links: Links;
}