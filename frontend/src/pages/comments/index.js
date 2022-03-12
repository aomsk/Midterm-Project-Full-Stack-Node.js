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
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Input_Comment from '../../components/input_comment'

const allComments = (comments) => {
    console.log('comments: ', comments.comments);

    return (
        <Container>
            <Head>
                <title>Comments</title>
            </Head>
            {/* <h2>Create Comment</h2>
            <Input_Comment /> */}
            <h3>All Comments ({ comments.comments.length })</h3>
            <Row>
                <Col>
                    {
                        comments.comments.map((comment, index) => {
                            let comment_date = new Date(comment.date_gmt).toDateString()
                            let local_time = new Date(comment.date_gmt).toLocaleTimeString()
                            return (
                                <Card className='mb-2' key={index}>
                                    <Card.Body>
                                        <Card.Title>{comment.author_name} From Post {comment.post}</Card.Title>
                                        <Card.Text>Published on {comment_date} | {local_time}</Card.Text>
                                        <div dangerouslySetInnerHTML={{ __html: comment.content.rendered }}></div>
                                        <Link href={'/posts/' + comment.post}>
                                            <div type='button' className='btn btn-outline-primary' variant="primary">Go To Post</div>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}
export default allComments