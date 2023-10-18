import React, { useEffect, useState } from "react";
import styles from "./allRepo.module.css";
import { EachRepo } from "../../components";
import { fetchAllRepos } from "../../apis/githubApis";
import { Loading } from "../helpers";

const AllRepos = ({ isLoading, setIsLoading }) => {
  const [publicRepos, setPublicRepos] = useState([]);

  useEffect(() => {
    const getAllRepos = async () => {
      setIsLoading(true);
      try {
        const getMyRepos = await fetchAllRepos();
        setPublicRepos(getMyRepos);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getAllRepos();
  }, []);
  return (
    <section className={styles.all__repos__section}>
      <h1>My Public Repositories</h1>
      <div className={styles.display__repos}>
        <>
          {isLoading ? (
            <Loading
              loadingStyle={styles.loading__width__height}
              loadingCon={styles.loading__con}
            />
          ) : publicRepos?.length > 0 ? (
            publicRepos.map((each) => <EachRepo {...each} key={each.id} />)
          ) : (
            <h2 className={styles.loading__con}>No repo found</h2>
          )}
        </>
      </div>
    </section>
  );
};

export default AllRepos;
// {}
