import React from "react";
import styles from "./SignUpInputs.module.css";

const SignUpInputs = () => {
  return (
    <>
      <section className={styles.topParaBox}>
        <p>Sign up for MEGAFPO.COM:</p>
      </section>
      <div className={styles.inputFieldsBox}>
        <section className={styles.child1}>
          <div>
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
            <input type="checkbox" />I accept all{" "}
            <span> terms & conditions</span>
          </label>
          <section className={styles.btnBox}>
            <button>Sign up</button>
          </section>
          <section className={styles.paraBox}>
              <p>ALREDY HAVE AN ACCOUNT ? <span>LOGIN</span></p>
          </section>
        </section>

        <section className={styles.child2}>
          <p>SignUp</p>
          <p>
            This Button Will be a gatewayto enter the My Fpo portal as it will
            do a registration which will provide a user ID And Password to a new
            user after proper validation of the mobile number and E MAil ID by
            sending OTP and clickable verification link in email
          </p>
        </section>
      </div>
    </>
  );
};

export default SignUpInputs;
