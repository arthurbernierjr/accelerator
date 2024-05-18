import {useEffect, useState} from 'react'

import { useParams, Link } from 'react-router-dom'
import { formatModString, capitalizeFirstLetter } from '../../utilities/helpers';

import LectureCard from '../../components/LectureCard';

import styles from './course-content-display.module.scss';


export default function Home ({ data, location }) {

  const [posts, setPosts] = useState([])
  const {type} = useParams()

  useEffect(()=> {
    const getPosts = async () => {
      const response = await fetch(`/api/posts/type/${type}`)
      const data = await response.json()
      setPosts(data)
    }
    getPosts()
  }, [])

    return (
        <div>
            <h1>Code Come Up Accelerator {capitalizeFirstLetter(formatModString(type).split(' ')[1])}s </h1>
            <h5><Link to="/">Go Back Home</Link></h5>
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


