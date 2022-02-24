import Link from 'next/link'
import { Container, Row, Col, Button, Card  } from 'react-bootstrap'

const Card_Post = ({ posts }) => {
    return (
        // <div className="columns mt-3 is-multiline">
        //     {
        //         posts.map((post, index) => {
        //             return (
        //                 <div key={index} className="column is-4">
        //                     <div className='card'>
        //                         <div className='card-content'>
        //                             <p className='is-size-6 title'>{post.title.rendered}</p>
        //                         </div>
        //                         <footer className='card-footer'>
        //                             <p className="card-footer-item">
        //                                 <Link href={'/posts/' + post.id}>
        //                                     <a className="card-footer-item">Read More</a>
        //                                 </Link>
        //                             </p>
        //                         </footer>
        //                     </div>
        //                 </div>
        //             )
        //         })
        //     }
        // </div>
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