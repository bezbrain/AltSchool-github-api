import React, { useEffect, useState } from "react";
import styles from "./summarySect.module.css";
import { SummaryCard } from "../../components";
import { RepoIcon, FollowersIcon, FollowingIcon } from "../../assets/icons";

const SummarySection = ({
  numberOfRepo,
  numberOfFollowings,
  numberOfFollowers,
  loading,
}) => {
  const summary = [
    {
      id: 1,
      avatar: <RepoIcon />,
      number: numberOfRepo,
      about: "Repositories",
    },
    {
      id: 2,
      avatar: <FollowersIcon />,
      number: numberOfFollowers,
      about: "Followers",
    },
    {
      id: 3,
      avatar: <FollowingIcon />,
      number: numberOfFollowings,
      about: "Followings",
    },
  ];

  return (
    <section className={styles.summary__section}>
      {summary.map((each) => (
        <SummaryCard key={each.id} {...each} loading={loading} />
      ))}
    </section>
  );
};

export default SummarySection;
