import { Colors } from "./components/Colors";

function App() {
  const name = "Sviat";

  const imgSrc =
    "https://as1.ftcdn.net/v2/jpg/03/37/46/98/1000_F_337469861_iFRwd4Ia15Ihuwfa8fEDA9OKPhIVsgZR.jpg";
  const imgAlt = "Corgi";

  const favWebsite = {
    label: "chess.com",
    url: "https://www.chess.com/home",
  };

  let a = 5;
  let b = 7;

  return (
    <>
      <h1>{name}</h1>

      <p>Ласкаво просимо до нашого сайту!</p>

      <img src={imgSrc} alt={imgAlt} />

      <a href={favWebsite.url}>{favWebsite.label}</a>

      <p>{a - b}</p>

      <Colors />
    </>
  );
}

export default App;
