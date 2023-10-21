import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleRepo } from "../../apis/githubApis";
import styles from "./singleRepo.module.css";
import { Link } from "react-router-dom";
import { FollowingIcon } from "../../assets/icons";
import ErrorPage from "../error/error";
import TitleText from "../../components/helpers/helmet";
import Loading from "../../components/helpers/loader/loading";

const SingleRepoDesc = () => {
  const { repoId } = useParams();
  const [detailsIsLoading, setDetailsIsLoading] = useState(false);

  const [singleRepo, setSingleRepo] = useState({});

  useEffect(() => {
    const getSingleRepo = async () => {
      setDetailsIsLoading(true);
      try {
        const getRepo = await fetchSingleRepo(repoId);
        // console.log(getRepo);
        setSingleRepo(getRepo);
        setDetailsIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleRepo();
  }, [repoId]);

  // Get repo name first two characters
  const repoName = singleRepo?.name;
  const getFirstTwo = repoName?.slice(0, 2);
  const capitalizeChar = getFirstTwo?.toUpperCase();

  if (detailsIsLoading) {
    return (
      <Loading
        loadingStyle={styles.loading__width__height}
        loadingCon={styles.loading__con}
      />
    );
  }

  if (singleRepo === "Request failed with status code 404") {
    return <ErrorPage />;
  }

  return (
    <>
      <TitleText title="Repo details" content="More deatails about a repo" />
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
    </>
  );
};

export default SingleRepoDesc;
