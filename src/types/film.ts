export type Person = {
    name: string;
}

export type Film = {
    id: number;
    name: string;
    genre: string;
    year: number;
    src: string;
    video: string;
    rating: number;
    discription: string;
    directors: Person;
}

export type Films = Film[];
