import Main from '../../pages/main-screen/main-screen';

type FilmCardProps = {
    name: string;
    genre: string;
    year: number;
}

function App(props: FilmCardProps): JSX.Element {
  return (
    <Main {...props} />
  );
}

export default App;
