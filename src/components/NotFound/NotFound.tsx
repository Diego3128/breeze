import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <p>Oops! We couldn't find that city. Try again.</p>
    </div>
  );
};
