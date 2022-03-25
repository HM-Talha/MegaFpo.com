import React from "react";
import styles from "./LoginInputs.module.css";

const LoginInputs = () => {
  return (
    <div className="mt-5">
      <section className={styles.topParaBox}>
        <p className={styles.para}> In for myFPO:</p>
      </section>
      <section className={styles.loginInpParent}>
        <div className={styles.child1}>
          <section className={styles.inpBox}>
            <input type="email" placeholder="email@gmail.com" />
          </section>
          <section className={styles.inpBox}>
            <input type="password" placeholder="Password" />
          </section>
          <section className={styles.btnBox}>
            <button>Sign In</button>
          </section>
          <section className={styles.paraBox1}>
            <p>
              DON’T HAVE AN ACCOUNT ? <span>REGISTER</span>
            </p>
          </section>
        </div>
        <div className={styles.child2}>
          {/* <section className={styles.paraBox2}>
            <p>
              After clicking the <span>Log In</span> in button a new page will
              open in which user can enter the valid details and can login to
              the portal.
            </p>
            <p>After proper sign in Dashboard will be visible to the user.</p>
          </section> */}
        </div>
      </section>
    </div>
  );
};

export default LoginInputs;
