import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var emojiDictionary = {
    "🧑‍🎨": "artist",
    "🧑‍🚀": "astronout",
    "👷": "construction worker",
    "🧑‍🌾": "farmer",
    "🧑‍🚒": "fire fighter",
    "👨‍🏫": "man teacher",
    "💂": "guard",
    "🧑‍🏭": "factory worker",
    "👮": "police officer",
    "🧑‍💻": "technologist",
    "🕵️": "detective",
    "🧑‍🔬": "scientist",
    "🧑‍⚖️": "judge"
  };

  
  var emojisWeKnow = Object.keys(emojiDictionary);

  const [meaning, setMeaning] = useState("");

  const eventHandler = (event) => {
    var inputEmoji = event.target.value;
    var meaning = emojiDictionary[inputEmoji];
    console.log(event.target.value);
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  };
  const emojiClickHandler = (emoji) => {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  };

  return (
    <div className="App">
      <h1>Welcome to professionopedia!</h1>
      {/* <button onClick={clickHandler}>Like Me!</button> {likeCounter} */}
      <input onChange={eventHandler}></input>
      <h2> {meaning} </h2>
      <h3>Emoji's we Know</h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
