import React from "react";
import "./WelcomeScreen.css";

function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">
      <div className="WelcomeMessage">
        <h1>Welcome to the Meet app</h1>
      </div>
      <div className="LogInScreen">
        <h3>
          Log in to see upcoming events around the world for full-stack
          developers
        </h3>
      </div>
      <div className="button_cont" align="center">
        <div class="google-btn">
          <div class="google-icon-wrapper">
            <img
              class="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google sign-in"
            />
          </div>
          <button
            onClick={() => {
              props.getAccessToken();
            }}
            rel="nofollow noopener"
            class="btn-text"
          >
            <b>Sign in with google</b>
          </button>
        </div>
      </div>
      <div className="PrivacyText">
        <a
          href="https://nirlepshah.github.io/meet/privacy.html"
          rel="nofollow noopener"
        >
          Privacy policy
        </a>
      </div>
    </div>
  ) : null;
}
export default WelcomeScreen;
