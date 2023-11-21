import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import { Film } from '../../types/film';
import {Link} from 'react-router-dom';
import ReviewForm from '../../components/review-form/review-form';


interface AddReviewScreenProps {
  films: Film[];
}

function AddReviewScreen({films}: AddReviewScreenProps): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <Helmet>
        <title>WTW. Добавить рецензию</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={films[0].src} alt={films[0].name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to="/films/1" className="breadcrumbs__link">{films[0].name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

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

        <div className="film-card__poster film-card__poster--small">
          <img src={films[0].src} alt={films[0].name} width="218" height="327" />
        </div>
      </div>

      <ReviewForm/>

    </section>
  );
}

export default AddReviewScreen;
