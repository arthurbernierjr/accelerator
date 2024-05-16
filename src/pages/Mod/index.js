import React from 'react'

import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import LectureCard from '../../components/LectureCard';

import styles from './course-content-display.module.scss';


export default function Mod ({ data, location }) {

  const [posts, setPosts] = useState([])
  const {mod} = useParams()

  useEffect(()=> {
    const getPosts = async () => {
      const response = await fetch(`/api/posts/${mod}`)
      const data = await response.json()
      setPosts(data)
    }
    getPosts()
  }, [])

    return (
        <div>
            <h1>Code Come Up Accelerator</h1>
            <center>
              <div>
                <a href="#">
                  Course Schedule and Important Links
                </a>
              </div>
            </center>
            <main className={styles.main}>
              {posts.map((item) => {
                return (
                  <LectureCard
                  key={item._id}
                  slug={`/lesson/${item._id}`}
                  title={item.data.title}
                  topics={item.data.excerpt}
                />
                )
              })}
            </main>
        </div>
    );
}


