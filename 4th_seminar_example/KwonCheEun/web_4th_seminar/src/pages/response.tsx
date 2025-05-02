import styles from '@/styles/Responsive.module.css'

export default function Response() {
  return (
    <main>
      <h1 style={{ textAlign: 'center' }}>📱 반응형 3단계 레이아웃</h1>
      <div className={styles.container}>
        <div className={styles.box}>박스 1</div>
        <div className={styles.box}>박스 2</div>
        <div className={styles.box}>박스 3</div>
        <div className={styles.box}>박스 4</div>
        <div className={styles.box}>박스 5</div>
        <div className={styles.box}>박스 6</div>
      </div>
    </main>
  )
}