import { T } from "./T";
import styles from "./Footer.module.css";
import common from "./common.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <T
        es="Última actualización: Septiembre 2026"
        en="Last updated: September 2026"
      />{" "}
      ·{" "}
      <a
        href="https://github.com/ncorrea-13/portfolio/blob/main/LICENSE"
        className={common.link}
      >
        MIT License
      </a>
    </footer>
  );
}
