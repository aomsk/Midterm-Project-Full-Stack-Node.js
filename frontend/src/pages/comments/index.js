import { Container, Row, Col, Card } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const allComments = () => {
    const [dataComments, setDataComments] = useState(null)

    useEffect(() => {
        async function fetchCommentsAPI() {
            let response = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/comments')
            response = await response.json()
            setDataComments(response)
            console.log(response)
        }
        fetchCommentsAPI()
    }, [])

    return (
        <Container>
            <h3>All Comments</h3>
            {/* <Row>
                <Col lg={3} style={{ backgroundColor: 'cyan' }}>
                    {
                        !!dataComments &&
                        dataComments.map((data, index) => {
                            return (
                                <div key={index}>
                                    <h3>Comment ID : {data.id}</h3>
                                    <p>From Post : {data.post}</p>
                                    <Link href={'/comments/' + data.author_name}>
                                        <a style={{ color: 'black' }}>{data.author_name}</a>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </Col>
                <Col lg={9} style={{ backgroundColor: 'pink' }}>
                    {
                        !!dataComments &&
                        dataComments.map((data, index) => {
                            return (
                                <div key={index}>
                                    <h6>Author Name : {data.author_name}</h6>
                                    <div dangerouslySetInnerHTML={{ __html: data.content.rendered }}></div>
                                </div>
                            )
                        })
                    }
                </Col>
            </Row> */}
            <Row>
                <Col>
                    {
                        !!dataComments &&
                        dataComments.map((data, index) => {
                            return (
                                <Card className='mb-2'>
                                    <Card.Body>
                                        <Card.Title>{data.author_name} From Post { data.post }</Card.Title>
                                        <Card.Text>Published on {data.date}</Card.Text>
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