import React, { useEffect, useState } from "react";
import styles from "./allRepo.module.css";
import { EachRepo } from "../../components";
import { fetchAllRepos } from "../../apis/githubApis";
import { Loading } from "../helpers";

const AllRepos = ({ isLoading, setIsLoading }) => {
  const [publicRepos, setPublicRepos] = useState([]);

  // >>>>>>>>>
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(10); // Number of repos to display per page

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
  }, [setIsLoading]);

  // Calculate the index of the first and last repo to display on the current page
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = publicRepos.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
          ) : currentRepos?.length > 0 ? (
            <>
              {currentRepos.map((each) => (
                <EachRepo {...each} key={each.id} />
              ))}
              {/* Pagination handling btns */}
              <div className={styles.pagination}>
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={indexOfLastRepo >= publicRepos.length}
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            // What should run if repos request is not completed
            <h2 className={styles.loading__con}>No repo found</h2>
          )}
        </>
      </div>
    </section>
  );
};

export default AllRepos;
