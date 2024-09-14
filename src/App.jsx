import { useState } from "react";

import cities from "./cities.json";
import Input from "./main";
import { persianToEnglishMap } from "./faToEn";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [hint, setHint] = useState("");
  const [validation, setValidation] = useState(true);

  const handleChange = (event) => {
    const value = event.target.value
      .split("")
      .map((char) => persianToEnglishMap[char] || char)
      .join("");
    setInputValue(value);
    setValidation(true);
    setHint("");
    if (value) {
      const firstChar = value.charAt(0);
      if (firstChar === firstChar.toUpperCase()) {
        const matchedCity = cities.find((city) => city.startsWith(value));
        matchedCity ? setHint(matchedCity) : setValidation(false);
        console.log(matchedCity);
      } else {
        const matchedCity = cities.find((city) =>
          city.toLocaleLowerCase().startsWith(value)
        );
        matchedCity
          ? setHint(matchedCity.toLocaleLowerCase())
          : setValidation(false);
      }
    } else {
      setHint("");
    }
  };

  return (
    <div>
      <Input
        handleChange={handleChange}
        hint={hint}
        validation={validation}
        inputValue={inputValue}
      />
    </div>
  );
}

export default App;
