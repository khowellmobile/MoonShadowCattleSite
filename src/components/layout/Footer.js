import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footerDiv}>
      <div className={classes.linkDiv}>
        <a className={classes.link} href="https://www.w3schools.com">
          Facebook
        </a>
        <a className={classes.link} href="https://www.w3schools.com">
          Facebook
        </a>
      </div>
      <div>
        <p className={classes.address} class="text-white">
          MOONSHADOW CATTLE, 8390 172 STREET, SURREY, BC, V4N 3G4, CANADA
        </p>
      </div>
    </div>
  );
}

export default Footer;
