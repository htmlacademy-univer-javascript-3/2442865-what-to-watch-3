import {Film} from '../types/film';

const FILM_URL = 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm';

export const films: Film[] = [
  {
    id: 1,
    name: 'Побег из Шоушенка',
    genre: 'драмма',
    year: 2000,
    src: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/orig',
    video: FILM_URL,
    rating: 9.1,
    discription: 'Несправедливо осужденный банкир готовит побег из тюрьмы. Тим Роббинс в выдающейся экранизации Стивена Кинга',
    directors:
            {
              name: 'Фрэнк Дарабонт'
            }
  },
  {
    id: 2,
    name: 'Зеленая миля',
    genre: 'драмма',
    year: 2001,
    src: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/orig',
    video: FILM_URL,
    rating: 9,
    discription: 'В тюрьме для смертников появляется заключенный с божественным даром. Мистическая драма по роману Стивена Кинга',
    directors:
            {
              name: 'Фрэнк Дарабонт'
            }
  },
  {
    id: 3,
    name: 'Форрест Гамп',
    genre: 'драмма',
    year: 1999,
    src: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/3560b757-9b95-45ec-af8c-623972370f9d/orig',
    video: FILM_URL,
    rating: 8.9,
    discription: 'Полувековая история США глазами чудака из Алабамы. Абсолютная классика Роберта Земекиса с Томом Хэнксом',
    directors:
            {
              name: 'Фрэнк Дарабонт'
            }
  },
  {
    id: 4,
    name: 'Список Шиндлера',
    genre: 'драмма',
    year: 1999,
    src: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/1e1ac6d9-c658-4f5f-937e-d080bca0d893/orig',
    video: FILM_URL,
    rating: 8.8,
    discription: 'История немецкого промышленника, спасшего тысячи жизней во время Холокоста. Драма Стивена Спилберга',
    directors:
            {
              name: 'Фрэнк Дарабонт'
            }
  },
  {
    id: 5,
    name: '1+1',
    genre: 'драмма',
    year: 2010,
    src: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/orig',
    video: FILM_URL,
    rating: 8.8,
    discription: 'Аристократ на коляске нанимает в сиделки бывшего заключенного. Искрометная французская комедия с Омаром Си',
    directors:
            {
              name: 'Фрэнк Дарабонт'
            }
  },
  {
    id: 6,
    name: 'Крестный отец',
    genre: 'драмма',
    year: 2010,
    src: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/c11652e8-653b-47c1-8e72-1552399a775b/orig',
    video: FILM_URL,
    rating: 8.8,
    discription: 'В семье крупного нью-йоркского мафиози наметился кризис. Революция в гангстерском кино и начало большого эпоса',
    directors:
            {
              name: 'Фрэнк Дарабонт'
            }
  },
  {
    id: 7,
    name: 'Бойцовский клуб',
    genre: 'драмма',
    year: 2010,
    src: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/8ef070c9-2570-4540-9b83-d7ce759c0781/orig',
    video: FILM_URL,
    rating: 8.6,
    discription: 'Страховой работник разрушает рутину своей благополучной жизни. Культовая драма по книге Чака Паланика',
    directors:
            {
              name: 'Фрэнк Дарабонт'
            }
  },
  {
    id: 8,
    name: 'Начало',
    genre: 'драмма',
    year: 2010,
    src: 'https://st.kp.yandex.net/images/film_big/447301.jpg',
    video: FILM_URL,
    rating: 8.6,
    discription: 'Профессиональные воры внедряются в сон наследника огромной империи. Фантастический боевик Кристофера Нолана',
    directors:
            {
              name: 'Кристофер Нолан'
            }
  },
];
