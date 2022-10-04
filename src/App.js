import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  scifi: [
    { name: "Dark Matter", rating: "4.5/5" },
    { name: "Recursion", rating: "4/5" },
    { name: "1984", rating: "4.3/5" },
    { name: "Hyperionn", rating: "3.9/5" },
    { name: "Red Rising", rating: "3.8/5" }
  ],

  crime: [
    {
      name: "Sherlock holmes",
      rating: "5/5"
    },

    {
      name: "The Devil in the white city",
      rating: "4/5"
    },
    {
      name: "Gone Girl",
      rating: "4/5"
    },

    {
      name: "The Silent Patient",
      rating: "4.2/5"
    },
    {
      name: "In t=cold blood",
      rating: "3.8/5"
    }
  ],
  fantasy: [
    {
      name: "The Hobbit",
      rating: "4.5/5"
    },

    {
      name: "Harry Potter series",
      rating: "5/5"
    },
    {
      name: "The Name of Wind",
      rating: "3.8/5"
    },
    {
      name: "The Night Circus",
      rating: "4.1/5"
    },
    {
      name: "The Way Of Kings",
      rating: "3.7/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("scifi");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>My Best BOOK Recommendations </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "lightblue",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
