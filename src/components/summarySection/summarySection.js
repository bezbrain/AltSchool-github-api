import React, { useEffect, useState } from "react";
import styles from "./summarySect.module.css";
import { SummaryCard } from "../../components";
import { RepoIcon, FollowersIcon, FollowingIcon } from "../../assets/icons";

const SummarySection = ({
  loading,
  numberOfRepo,
  numberOfFollowings,
  numberOfFollowers,
}) => {
  const summary = [
    {
      id: 1,
      avatar: <RepoIcon />,
      number: numberOfRepo || "No record",
      about: "Repositories",
    },
    {
      id: 2,
      avatar: <FollowersIcon />,
      number: numberOfFollowers || "No record",
      about: "Followers",
    },
    {
      id: 3,
      avatar: <FollowingIcon />,
      number: numberOfFollowings || "No record",
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
