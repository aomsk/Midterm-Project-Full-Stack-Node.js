export async function getStaticProps() {
    const responsse = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/comments`, {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data = await responsse.json()

    const responsse_tags = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/tags', {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data_tags = await responsse_tags.json()

    return {
        props: {
            comments: data,
            tags: data_tags, //fecth for navbar navTags
        }
    }
}

import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Link from 'next/link'
import Head from 'next/head'

const allComments = (comments) => {
    console.log('comments: ', comments.comments);

    return (
        <div className='container'>
            <Head>
                <title>Comments</title>
            </Head>
            {/* <h2>Create Comment</h2>
            <Input_Comment /> */}
            <h3>All Comments ({ comments.comments.length })</h3>
            <div className='row'>
                <div className='col'>
                    {
                        comments.comments.map((comment, index) => {
                            let comment_date = new Date(comment.date_gmt).toDateString()
                            let local_time = new Date(comment.date_gmt).toLocaleTimeString()
                            return (
                                <div className='card shadow p-3 mb-5 bg-white rounded mb-2' key={index}>
                                    <div className='card-body'>
                                        <h4 className='card-title'>{comment.author_name} From Post {comment.post}</h4>
                                        <div className='card-text'>Published on {comment_date} | {local_time}</div>
                                        <div dangerouslySetInnerHTML={{ __html: comment.content.rendered }}></div>
                                        <Link href={'/posts/' + comment.post}>
                                            <button type='button' className='btn btn-outline-primary'>Go To Post</button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default allComments