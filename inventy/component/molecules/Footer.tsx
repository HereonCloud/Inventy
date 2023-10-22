import styles from "./styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        Image by
        <a href="https://www.freepik.com/free-vector/flat-illustration-person-shrugging_24014013.htm#query=oh%20no%20cartoon&position=24&from_view=search&track=ais">
          {" "}
          Freepik
        </a>
        <br />
        <a href="https://storyset.com/data">Data illustrations by Storyset</a>
      </div>
    </footer>
  );
};

export default Footer;
