import styles from "./style.scss";
import Header from "@@/Header";

export default function Example() {
  return (
    <>
      <Header />
      <div className={styles.container}>首页</div>
    </>
  );
}
