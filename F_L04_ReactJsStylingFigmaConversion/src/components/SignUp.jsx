
import styles from "./SignUp.module.css";
import logo from "../assets/logo.svg";

export default function SignUp() {
    return (
        <main className={styles.page}>
            {/* LEFT PANEL */}
            <section className={styles.left}>
                <h1 className={styles.tagline}>
                    Need webdesign
                    <br />
                    for your business?
                    <br />
                    <strong>Design Spacee</strong>
                    <br />
                    will help you.
                </h1>

                <img
                    className={styles.logo}
                    src={logo}
                    alt="Design Spacee logo"
                />

                <p className={styles.brandLink}>
                    figma.com/@designspacee
                </p>
            </section>

            {/* RIGHT PANEL */}
            <section className={styles.right}>
                <div className={styles.formContainer}>
                    <header className={styles.header}>
                        <h2>Create an Account</h2>
                    </header>

                   
                    <div className={styles.socialSignup}>
                        <button
                            type="button"
                            className={styles.socialButton}
                        >
                            <span>Sign up with Google</span>
                        </button>

                        <button
                            type="button"
                            className={styles.socialButton}
                        >
                            <span>Sign up with Facebook</span>
                        </button>
                    </div>

                    {/* OR DIVIDER */}
                    <div className={styles.divider}>
                        <span>OR</span>
                    </div>

                    {/* SIGN-UP FORM */}
                    <form className={styles.form}>
                        <div className={styles.field}>
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                placeholder="Enter your full name"
                                autoComplete="name"
                                required
                            />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                autoComplete="email"
                                required
                            />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                autoComplete="new-password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className={styles.submitButton}
                        >
                            Create Account
                        </button>
                    </form>

                    <p className={styles.loginText}>
                        Already have an account?{" "}
                        <a href="#login">Log In</a>
                    </p>
                </div>
            </section>
        </main>
    );
}
