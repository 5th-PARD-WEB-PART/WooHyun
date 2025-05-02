import styles from '../css-component/styles.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>
          <h2 className={styles.heading}>About Me</h2>
          <p className={styles.text}>
            <span className={styles.textHighlight}>Name:</span> 권채채
          </p>
          <p className={styles.text}>
            <span className={styles.textHighlight}>Age:</span> 23
          </p>
          <p className={styles.text}>
            <span className={styles.textHighlight}>MBTI:</span> INFP
          </p>
          <p className={styles.text}>
            <span className={styles.textHighlight}>Major:</span> Computer Science
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;