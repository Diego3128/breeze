import styles from "./Form.module.css";
import { countries } from "../../data/countries";
import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import type { Search } from "../../types";
import { Alert } from "../Alert/Alert";

type FormProps = {
  fetchWeather: (search: Search) => void;
};

export const Form = ({ fetchWeather }: FormProps) => {
  const [search, setSearch] = useState<Search>({ city: "", country: "" });

  const [alert, setAlert] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (!["city", "country"].includes(name)) return;
    setSearch((prevSearch) => ({ ...prevSearch, [name]: value }));
  };

  const invalidForm = useMemo(
    () => Object.values(search).includes(""),
    [search]
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (invalidForm) {
      setAlert("All fields are required.");
      return;
    }
    // send request
    fetchWeather(search);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form_group}>
          <label htmlFor="city">City</label>
          <input
            onChange={handleChange}
            value={search.city}
            type="text"
            id="city"
            name="city"
            placeholder="City eg. Miami"
          />
        </div>

        <div className={styles.form_group}>
          <label htmlFor="country">Country</label>
          <select
            onChange={handleChange}
            value={search.country}
            name="country"
            id="country"
          >
            <option value="">choose a country</option>
            {countries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.name.en}
              </option>
            ))}
          </select>
        </div>

        <button
          disabled={alert !== "" && invalidForm}
          className={styles.submit}
          type="submit"
        >
          <span>Search</span>
        </button>
      </form>
      {alert && <Alert>{alert}</Alert>}
    </>
  );
};
