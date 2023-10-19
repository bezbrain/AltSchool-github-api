import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleRepo } from "../../apis/githubApis";
import styles from "./singleRepo.module.css";
import { Link } from "react-router-dom";
import { FollowingIcon } from "../../assets/icons";

const SingleRepoDesc = () => {
  const { repoId } = useParams();

  const [singleRepo, setSingleRepo] = useState({});

  useEffect(() => {
    const getSingleRepo = async () => {
      try {
        const getRepo = await fetchSingleRepo(repoId);
        setSingleRepo(getRepo);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleRepo();
  }, [repoId]);

  // Get repo first two characters
  const repoName = singleRepo?.name;
  const getFirstTwo = repoName?.slice(0, 2);
  const capitalizeChar = getFirstTwo?.toUpperCase();

  return (
    <main className={styles.single__repo__desc}>
      <article className={styles.each__repo__desc}>
        <header>
          <div className={styles.repo__name__char}>
            <h2>{capitalizeChar}</h2>
          </div>
          <h1>{singleRepo?.name}</h1>
        </header>

        <section className={styles.desc__body}>
          <div className={styles.repo__owner}>
            <div>
              <FollowingIcon />
            </div>
            <h3>OWNER: bezbrain</h3>
          </div>

          <Link to="" target="_blank">
            TO REPO ON GITHUB
          </Link>

          <section className={styles.repo__about}>
            <p>
              <span>Created At: </span>
              <span>{singleRepo?.created_at}</span>
            </p>
            <p>
              <span>Visibilty: </span>
              <span>{singleRepo?.visibility}</span>
            </p>
            <p>
              <span>Forks: </span>
              <span>{singleRepo?.forks}</span>
            </p>
            <p>
              <span>Open Issues: </span>
              <span>{singleRepo?.open_issues}</span>
            </p>
          </section>

          <footer>
            <Link to="/">BACK HOME</Link>
            <a
              href="https://github.com/bezbrain"
              target="_blamk"
              rel="noreferrer"
            >
              TO GITHUB PROFILE
            </a>
          </footer>
        </section>
      </article>
    </main>
  );
};

export default SingleRepoDesc;
