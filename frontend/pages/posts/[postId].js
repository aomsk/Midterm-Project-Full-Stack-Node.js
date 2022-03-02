export async function getStaticPaths() {
    const response = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/posts')
    const data = await response.json()
    const paths = data.map((post) => {
        return {
            params: { postId: post.id.toString() }
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const responsse = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/posts/${params.postId}`)
    const data = await responsse.json()
    return {
        props: {
            post: data,
        }
    }
}

import { Container, Row, Col } from 'react-bootstrap'
import Head from 'next/head'

const PostId = ({ post }) => {
    return (
        // <div className="container">
        //     <p className="is-size-4">Post ID : {post.id}</p>
        //     <div>
        //         <p className="is-size-2 is-titles">{post.title.rendered}</p>
        //         <p>Date : {post.date}</p>
        //         <p>Tag : {post.tags}</p>
        //         <p>Categories : {post.categories}</p>
        //         <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
        //     </div>
        // </div>
        <Container>
            <Head>
                <title>{post.title.rendered}</title>
            </Head>
            <Row>
                <Col>
                    <h4>Post ID : {post.id}</h4>
                    <div>
                        <h1>{post.title.rendered}</h1>
                        <h6>Date : {post.date}</h6>
                        <h6>Tag : {post.tags}</h6>
                        <h6>Categories : {post.categories}</h6>
                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default PostId