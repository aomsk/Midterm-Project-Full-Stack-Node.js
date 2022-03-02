import Link from 'next/link'
import { Container, Row, Col, Button, Card  } from 'react-bootstrap'

const Card_Post = ({ posts }) => {
    return (
        <Container className='mt-4'>
            <Row>
                {
                    posts.map((post, index) => {
                        return (
                            <Col xs={12} md={6} lg={6} key={index} className='mb-2'>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{ post.title.rendered }</Card.Title>
                                        <Card.Text>Published on { post.date }</Card.Text>
                                        <Link href={'/posts/' + post.id}>
                                            <Button style={{ backgroundColor: '#AF7AC5', color: '#fff', border: 1 }}>Read More</Button>
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