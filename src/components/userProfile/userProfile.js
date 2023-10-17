import React, { useEffect, useState } from "react";
import styles from "./userProfile.module.css";
import { Button } from "../general";
import { LocationIcon, PlatformIcon } from "../../assets/icons";

const UserProfile = ({ myProfile }) => {
  return (
    <section className={styles.profile__con}>
      <p>User</p>
      <header>
        <div className={styles.user__img__con}>
          <img
            src="https://avatars.githubusercontent.com/u/108897101?v=4"
            alt="Testing"
          />
        </div>
        <div>
          <h3>{myProfile.name}</h3>
          <p>
            <a
              href="https://github.com/bezbrain"
              target="_blamk"
              rel="noreferrer"
            >
              @{myProfile.login}
            </a>
          </p>
        </div>
        <a href="https://github.com/bezbrain" target="_blank" rel="noreferrer">
          <Button btnContent="Follow" btnStyles={styles.btn__con} />
        </a>
      </header>

      <p>
        <span>Creator of </span>
        <a
          href="https://jobtrackierjobs.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          JobTrackier
        </a>
      </p>

      <footer>
        <div>
          <p>
            <PlatformIcon />
          </p>
          <p>JobTrackier</p>
        </div>

        <div>
          <p>
            <LocationIcon />
          </p>
          <p>Location</p>
        </div>
      </footer>
    </section>
  );
};

export default UserProfile;
