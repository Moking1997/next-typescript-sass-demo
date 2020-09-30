import styles from "./style.scss";
import Link from "next/link";

const navList = [
  {
    name: "首页",
    router: "/",
  },
  {
    name: "新闻中心",
    router: "/news",
  },
];
export default function Example() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>logo</div>
      <div className={styles.nav}>
        {navList.map((item) => {
          return (
            <Link href={item.router}>
              <a>{item.name}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
