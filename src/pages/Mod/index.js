import React from 'react'

import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import LectureCard from '../../components/LectureCard';
import { formatModString } from '../../utilities/helpers';

import styles from './course-content-display.module.scss';


export default function Mod ({ data, location }) {

  const [posts, setPosts] = useState(null)
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
                <h5><Link to="/">Back Home</Link></h5>
              </div>
            </center>
            <main className={styles.main}>
            <h2>Lessons for {formatModString(mod)}</h2>
             <div>
              {posts?.lessons?.map((item) => {
                return (
                  <LectureCard
                  key={item._id}
                  slug={`/lesson/${item._id}`}
                  title={item.data.title}
                  topics={item.data.excerpt}
                />
                )
              })}
             </div>
              
               <h2>Cheatsheets for {formatModString(mod)}</h2>
               <div>
              {posts?.cheatsheets?.map((item) => {
                return (
                  <LectureCard
                  key={item._id}
                  slug={`/lesson/${item._id}`}
                  title={item.data.title}
                  topics={item.data.excerpt}
                />
                )
              })}
              </div>
              
              <h2>Assignments for {formatModString(mod)}</h2>
              <div>
              {posts?.assignments?.map((item) => {
                return (
                  <LectureCard
                  key={item._id}
                  slug={`/lesson/${item._id}`}
                  title={item.data.title}
                  topics={item.data.excerpt}
                />
                )
              })}
              </div>
              
              <h2>Projects for {formatModString(mod)}</h2>
              <div>
              {posts?.projects?.map((item) => {
                return (
                  <LectureCard
                  key={item._id}
                  slug={`/lesson/${item._id}`}
                  title={item.data.title}
                  topics={item.data.excerpt}
                />
                )
              })}
              </div>
              <Link to="/">Back Home</Link>
            </main>
        </div>
    );
}


