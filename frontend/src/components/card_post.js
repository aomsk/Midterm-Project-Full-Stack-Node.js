import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Card  } from 'react-bootstrap'

const Card_Post = ({ posts }) => {
    return (
        <Container className='mt-4'>
            <Row>
                {
                    posts.map((post, index) => {
                        let post_date = new Date(post.date_gmt).toDateString()
                        let local_time = new Date(post.date_gmt).toLocaleTimeString()
                        return (
                            <Col xs={12} md={6} lg={6} key={index} className='mb-2'>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{ post.id }</Card.Title>
                                        <Card.Title>{ post.title.rendered }</Card.Title>
                                        {/* <Card.Text>{post._links.author[0].href}</Card.Text> */}
                                        <Card.Text>Published on { post_date } | { local_time }</Card.Text>
                                        <Link href={'/posts/' + post.id}>
                                            {/* <Button style={{ backgroundColor: '#AF7AC5', color: '#fff', border: 1 }}>Read More</Button> */}
                                            <button type="button" className='btn btn-outline-secondary'>Read More</button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default Card_Post;