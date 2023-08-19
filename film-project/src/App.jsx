import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getFilms } from "./api";
import Card from "./Card";

function App() {
  const categories = ["Tumu", "Aksiyon", "Drama", "Komedi"];
  const [films, setFilms] = useState([]);
  const [category, setCategory] = useState("Tumu");
  useEffect(() => {
    getFilms().then((data) => setFilms(data));
  }, []);

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const filteredFilms =
    category === "Tumu"
      ? films
      : films.filter((film) => film.category === category);
  return (
    <div className="App">
      <h1>Filmler Projesi</h1>
      <div className="categories">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              type="button"
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="films">
        {filteredFilms.map((film) => (
          <Card key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
}

export default App;
