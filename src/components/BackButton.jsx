import styles from "./BackButton.module.css";

import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate(-1);
  }
  return (
    <button className={styles.back} onClick={handleClick}>
      &larr; Back
    </button>
  );
}

export default BackButton;
