import React from "react";
import styles from "./Header.module.css";
import logo from "../../Assets/logo.png"

const Header = () => {
  return (
    <>
      <div className={styles.headerParent}>
        <section>
          <p>megafpo.com</p>
        </section>
        <section className={styles.iconBox}>
          <i className="fa-brands fa-facebook-f px-3" />
          <i className="fa-brands fa-twitter" />
          <i className="fa-brands fa-instagram px-3" />
          <img src={logo} alt="" width="82px" />
        </section>
      </div>
      <div className={styles.inputFieldsBtnParent}>
        <section className={styles.menuBtnBox}>
          <button>Menu&gt;&gt;</button>
        </section>
        <section className={styles.inpBox}>
          <p>Search</p>
          <input type="text" placeholder="Product, FPO , State, City ...," />
          <i className="fa-solid fa-magnifying-glass d-block"> </i>
        </section>
        <section className={styles.loginSignupBtn}>
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.signupBtn}>Signup</button>
        </section>
      </div>
    </>
  );
};

export default Header;
