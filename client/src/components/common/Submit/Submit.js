import styles from "./Submit.module.scss";

const Submit = ({ type, name, handleSubmit }) => {
  return (
    <button type={type} onClick={handleSubmit} className={styles.submit}>
      {name}
    </button>
  );
};

export default Submit;
