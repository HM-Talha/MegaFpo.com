import React from "react";
import styles from "./SignUpInputs.module.css";

const SignUpInputs = () => {
  return (
    <>
      <section className={styles.topParaBox}>
        <p>Sign up for MEGAFPO.COM:</p>
      </section>
      <div className="container">
        <div className={styles.inputFieldsBox}>
          <section className={styles.child1}>
            <div className={styles.inp1}>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className={styles.inpParent}>
              <input type="email" placeholder="email@gmail.com" />
            </div>
            <div className={styles.inpParent}>
              <input type="number" placeholder="Phone Number" />
            </div>
            <div className={styles.inpParent}>
              <input type="password" placeholder="Password" />
            </div>
            <label htmlFor="">
              <input type="checkbox" />
              <section>I accept all</section>
              <span> terms & conditions</span>
            </label>
            <section className={styles.btnBox}>
              <button>Sign up</button>
            </section>
            <section className={styles.paraBox}>
              <p>
                ALREDY HAVE AN ACCOUNT ? <span>LOGIN</span>
              </p>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default SignUpInputs;
