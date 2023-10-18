import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleRepo } from "../../apis/githubApis";
import styles from "./singleRepo.module.css";
import { Link } from "react-router-dom";
import { FollowingIcon } from "../../assets/icons";

const SingleRepoDesc = () => {
  const { repoId } = useParams();

  const [singleRepo, setSingleRepo] = useState({});

  // console.log(repoId);

  useEffect(() => {
    // console.log(fetchSingleRepo(repoId));
    const getSingleRepo = async () => {
      try {
        const getRepo = await fetchSingleRepo(repoId);
        setSingleRepo(getRepo);
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <main className={styles.single__repo__desc}>
      <article className={styles.each__repo__desc}>
        <header>
          <div className={styles.repo__name__char}>
            <h2>03</h2>
          </div>
          <h1>Name of Repo</h1>
        </header>

        <section className={styles.desc__body}>
          <div className={styles.repo__owner}>
            <div>
              <FollowingIcon />
            </div>
            <h3>OWNER: bezbrain</h3>
          </div>

          <Link to="" target="_blank">
            GO TO REPO ON GITHUB
          </Link>

          <section className={styles.repo__about}>
            <p>
              <span>Created At: </span>
              <span>2022-12-30</span>
            </p>
            <p>
              <span>Visibilty: </span>
              <span>Public</span>
            </p>
            <p>
              <span>Forks: </span>
              <span>0</span>
            </p>
            <p>
              <span>Open Issues: </span>
              <span>0</span>
            </p>
          </section>

          <footer>
            <Link to="">GO BACK HOME</Link>
            <Link to="">GO TO MY GITHUB PROFILE</Link>
          </footer>
        </section>
      </article>
    </main>
  );
};

export default SingleRepoDesc;
