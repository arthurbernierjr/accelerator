import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Lesson (props) {
    const [post, setPost] = useState(null)
    const { postSlug } = useParams()

    useEffect(() => {
        const getPost = async () => {
            const response = await fetch(`/api/posts/lesson/${postSlug}`)
            const data = await response.json()
            setPost(data)
        }
        getPost()
        window.setTimeout(()=>{
            window.highlightSyntax()
        }, 500)
    }, [])

    return (
        <div className='full-blog container'>
            {
            post ?
            <div className='card'>
                <a href={`${post._id}`}>
                    <h2 className='card-title'>
                        {post.data.title}
                    </h2>
                </a>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            {post.data.subTitle}
                        </h5>
                        <div className='card-img-container'>
                            <img 
                                className='card-img' 
                                src={post.data.featureImage}
                                alt={post.data.title}
                             />
                        </div>
                        <div className='container mx-auto' dangerouslySetInnerHTML={{__html: post.content}}></div>
                    </div>
                
            </div>:
            <>...loading</>
            }
        </div>
    )

}


