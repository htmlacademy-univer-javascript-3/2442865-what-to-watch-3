import Logo from '../../components/logo/logo';
import FilmCard from './film-card';
import SmallFilmCard from '../../components/small-film-card';
import {Helmet} from 'react-helmet-async';

type FilmCardProps = {
    name: string;
    genre: string;
    year: number;
}

function MainScreen(props: FilmCardProps): JSX.Element {
  return (
    <div>
      <Helmet>
        <title>WTW. Главная страница</title>
      </Helmet>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <FilmCard {...props}/>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__films-list">
            <SmallFilmCard name = {props.name}/>
            <SmallFilmCard name = {props.name}/>
            <SmallFilmCard name = {props.name}/>
            <SmallFilmCard name = {props.name}/>
            <SmallFilmCard name = {props.name}/>
            <SmallFilmCard name = {props.name}/>
            <SmallFilmCard name = {props.name}/>
            <SmallFilmCard name = {props.name}/>
            <SmallFilmCard name = {props.name}/>
            <SmallFilmCard name = {props.name}/>
            <SmallFilmCard name = {props.name}/>
            <SmallFilmCard name = {props.name}/>
            <SmallFilmCard name = {props.name}/>
            <SmallFilmCard name = {props.name}/>
            <SmallFilmCard name = {props.name}/>
            <SmallFilmCard name = {props.name}/>
            <SmallFilmCard name = {props.name}/>
            <SmallFilmCard name = {props.name}/>
            <SmallFilmCard name = {props.name}/>
            <SmallFilmCard name = {props.name}/>
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <Logo />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default MainScreen;