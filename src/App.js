import React, { useState } from "react";
import "./styles.css";
const MovieDatabase = {
  Fiction: [
    { name: "Inception", rating: "9/10" },
    { name: "The Matrix", rating: "8.8/10" },
    { name: "Interstellar", rating: "8.7/10" },
    { name: "The Prestige", rating: "8.6/10" },
    { name: "Terminator 2 - Judgement Day", rating: "8/10" },
    { name: "Back to the Future", rating: "7.8/10" },
    { name: "Avengers: Infinity war", rating: "7.5/10" }
  ],
  Action: [
    { name: "The Dark Knight", rating: "9/10" },
    { name: "The Lord of rings : The return of king", rating: "8.8/10" },
    { name: "The Mountain II", rating: "8.7/10" },
    { name: "Inception", rating: "8.6/10" },
    { name: "The Matrix", rating: "8/10" }
  ],
  Drama: [
    { name: "The Shawshank Redemption", rating: "9/10" },
    { name: "Hababam Sinifi", rating: "8.8/10" },
    { name: "The God Father", rating: "8.7/10" },
    { name: "Schinder's List", rating: "8.6/10" },
    { name: "Fight Club", rating: "8/10" },
    { name: "Forest Gump", rating: "7.8/10" },
    { name: "Parasite", rating: "7.5/10" }
  ],
  Horror: [
    { name: "Psycho", rating: "9/10" },
    { name: "The Shining", rating: "8.8/10" },
    { name: "Alien", rating: "8.7/10" },
    { name: "Tumbbad", rating: "8.6/10" },
    { name: "The Blue Elephant", rating: "8/10" },
    { name: "The Cabinet of Dr. Caligari", rating: "7.8/10" },
    { name: "The Exorcist", rating: "7.5/10" }
  ],
  War: [
    { name: "The Mountain II", rating: "9/10" },
    { name: "Saving Private Ryan", rating: "8.8/10" },
    { name: "LIfe Is Beautiful", rating: "8.7/10" },
    { name: "The Painist", rating: "8.6/10" },
    { name: "Grave of Fireflies", rating: "8/10" },
    { name: "Apocalypse Now", rating: "7.8/10" },
    { name: "Paths of Glory", rating: "7.5/10" }
  ]
};

const movies = Object.keys(MovieDatabase);

export default function App() {
  const [userGenre, setgenre] = useState("Fiction");

  function OnClickHandler(item) {
    setgenre(item);
  }

  return (
    <div className="App">
      <h2 className="head">
        <b> MOVIE HUB</b>
      </h2>
      <hr />
      <div className="bgm1">
        <h4>
          <em>Select a genre </em>
        </h4>
        <div>
          {movies.map((item) => (
            <button
              className={
                `btn genre-name ` + (userGenre === item ? "active" : "")
              }
              onClick={() => OnClickHandler(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <hr />

      <div className="bgm">
        <div className="body">
          <ul>
            {MovieDatabase[userGenre].map((movie) => (
              <li className="li">
                <div className="div1" key={movie.name}>
                  <b> {movie.name}</b>
                </div>
                <div className="div2" key={movie.rating}>
                  <strong> Rating:{movie.rating} </strong>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
