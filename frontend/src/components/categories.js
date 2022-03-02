import { Container, Row, Col } from 'react-bootstrap'

const Categories = () => {
    return (
        <Container className='mt-3'>
            <h3>Categories</h3>
            <Row>
                {/* {
                    tags.map((tag, index) => {
                        return (
                            <div key={index} className="column is-3-desktop">
                                <div className="buttons">
                                    <Link href={'/tag/' + tag.id}>
                                        <button className="button is-primary is-focused">{tag.name}</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                } */}
            </Row>
        </Container>
    )
}

export default Categories