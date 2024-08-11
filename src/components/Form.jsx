// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import styles from "./Form.module.css";
import { convertToEmoji } from "../utils/helpers";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Message from "./Message";
import Spinner from "./Spinner";
import BackButton from "./BackButton";

import { useEffect, useState } from "react";
import { useUrlCityPosition } from "../hooks/useUrlCityPosition";
import { useAddCity } from "../hooks/useAddCity";

function Form() {
  const [lat, lng] = useUrlCityPosition();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [cityName, setCityName] = useState("");
  const [emoji, setEmoji] = useState("");
  const [country, setCountry] = useState("");
  const [notes, setNotes] = useState("");

  const [date, setDate] = useState(new Date());

  const { addCity, isPending, error: addCityError } = useAddCity();

  useEffect(
    function () {
      async function getCityInfo() {
        try {
          setError("");
          setIsLoading(true);
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();

          if (!data.countryCode) throw new Error("no country");

          setCityName(data.city || data.locality);
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
        } catch (err) {
          if (err.message === "no country")
            setError("That doesn't same to be a country");
          else {
            console.error(err);
            setError(
              "couldn't get position data. Check your internet and try again."
            );
          }
        } finally {
          setIsLoading(false);
        }
      }

      getCityInfo();
    },
    [lat, lng]
  );

  if (isLoading) return <Spinner />;

  if (error || addCityError)
    return <Message message={error || addCityError.message} />;

  function handleSubmit(e) {
    e.preventDefault();

    const newCity = {
      cityName,
      country,
      emoji,
      notes,
      date,
      position: { lat, lng },
    };

    addCity(newCity);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">City name</label>

        <div>
          <input
            type="text"
            id="name"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
          <span>{emoji}</span>
        </div>
      </div>
      <div>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker
          id="date"
          selected={date}
          onChange={(date) => setDate(date)}
        />
      </div>
      <div>
        <label htmlFor="notes">Notes about your trip to {cityName}?</label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
      </div>

      <div>
        <button className="cta">Add</button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
