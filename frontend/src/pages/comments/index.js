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

import { Container, Row, Col, Card } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const allComments = (comments) => {
    console.log('comments: ', comments.comments);

    return (
        <Container>
            <h2>Create Comment</h2>
            <span></span>
            <input className="form-control" type="text" placeholder="comment"></input>
            <input className="form-control" type="text" placeholder="author"></input>
            <h3>All Comments</h3>
            <Row>
                <Col>
                    {
                        comments.comments.map((comment, index) => {
                            return (
                                <Card className='mb-2' key={index}>
                                    <Card.Body>
                                        <Card.Title>{comment.author_name} From Post {comment.post}</Card.Title>
                                        <Card.Text>Published on {comment.date}</Card.Text>
                                        <div dangerouslySetInnerHTML={{ __html: comment.content.rendered }}></div>
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