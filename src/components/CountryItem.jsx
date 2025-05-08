import styles from "./CountryItem.module.css";

function CountryItem({ Countries }) {
  return (
    <li className={styles.countryItem}>
      <span>{Countries.emoji}</span>
      <span>{Countries.country}</span>
    </li>
  );
}

export default CountryItem;
