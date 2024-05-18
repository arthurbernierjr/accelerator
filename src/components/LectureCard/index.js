import React from 'react';
import { Link } from 'react-router-dom';
import styles from './lecture-card.module.scss';

export default function LectureCard(props) {
  const formatTopic = (topic) => {
    if (topic.length > 60) {
      return (
        <span className={styles.tooltip}>
          {`${topic.slice(0, 60)}...`}
          <span className={styles.tooltiptext}>{topic}</span>
        </span>
      );
    }
    return topic;
  };

  return (
    <Link to={props.slug}>
      <section className={styles.card}>
        <h2>{props.title}</h2>
        <h4>{formatTopic(props.topics)}</h4>
        <p>{props.prereqs ? `Pre-Reqs: ${props.prereqs}` : ''}</p>
      </section>
    </Link>
  );
}
