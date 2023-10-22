export const pagination = (currentPage, reposPerPage, publicRepos) => {
  // Calculate the index of the first and last repo to display on the current page
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = publicRepos.slice(indexOfFirstRepo, indexOfLastRepo);
};
