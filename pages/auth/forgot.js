import styles from "../../styles/forgot.module.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { BiLeftArrowAlt } from "react-icons/bi";
import CircledIconBtn from "../../components/buttons/circledIconBtn";
import LoginInput from "../../components/inputs/loginInput";
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Link from "next/link";

export default function forgot() {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState("");
	const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
	const emailValidation = Yup.object({
    email: Yup.string()
      .required(
        "You'll need this when you log in and if you ever need to reset your password."
      )
      .email("Enter a valid email address."),
  })
	const forgotHandler = async () => {
    
  };
  return (
    <>
     <Header country="" />
     <div className={styles.forgot}>
        <div>
            <div className={styles.forgot__header}>
                <div className={styles.back__svg}>
                    <BiLeftArrowAlt></BiLeftArrowAlt>
                </div>
                <span>Forgot your password <Link href="/">Login instead</Link></span>
            </div>
						<div className={styles.forgot__form}>
                <Formik
                  enableReinitialize
                  initialValues={{
                  	email,
                  }}
                  validationSchema={emailValidation}
                  onSubmit={() => {
                    forgotHandler();
                  }}
                >
                    {(form) => (
                        <Form>
                        <LoginInput
                            type="email"
                            name="email"
                            icon="email"
                            placeholder="Email Address"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <CircledIconBtn type="submit" text="Sign in" />
                        {error && (
                          <span className={styles.error}>{error}</span>
                        )}
                        </Form>
                    )}
                </Formik>
          </div>
        </div>
     </div>
     <Footer country="" />
    </>
  )
}
