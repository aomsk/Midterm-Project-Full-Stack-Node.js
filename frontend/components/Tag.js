import Link from "next/link"
import { Container, Row, Col, Button } from 'react-bootstrap'

const Tag = ({ tags }) => {

    return (
        // <div className="conrainer">
        //     <p className="is-size-4 has-text-weight-bold mb-2 mt-2">Tags</p>
        //     <div className="columns is-mobile">
        //         {
        //             tags.map((tag, index) => {
        //                 return (
        //                     <div key={index} className="column is-3-desktop">
        //                         <div className="buttons">
        //                             <Link href={'/tag/' + tag.id}>
        //                                 <button className="button is-focused is-rounded is-primary">{tag.name}</button>
        //                             </Link>
        //                         </div>
        //                     </div>
        //                 )
        //             })
        //         }
        //     </div>
        // </div>
        <Container className="mt-3">
            <h3>Tags</h3>
            <Row>
                {
                    tags.map((tag, index) => {
                        return (
                            <Col lg={3} md={4} xs={7} key={index}>
                                <div>
                                    <Link href={'/tag/' + tag.id}>
                                        <Button style={{ backgroundColor: '#F1948A', color: '#fff', border: 1 }}>{tag.name}</Button>
                                    </Link>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}
export default Tag