import Card_Post from '../components/card_post'
import Categories from '../components/categories'
import Tag from '../components/tag'

import { Container, Row, Col } from 'react-bootstrap'
import Head from 'next/head'

export async function getStaticProps() {
    const responsse_posts = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/posts', {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data_posts = await responsse_posts.json()

    const responsse_tags = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/tags', {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data_tags = await responsse_tags.json()

    return {
        props: {
            posts: data_posts,
            tags: data_tags,
        }
    }
}

const Home = ({ posts, tags }) => {
    return (
        <Container>
            <Head>
                <title>Home</title>
            </Head>
            {/* <Row>
                <Col>
                    <Tag tags={tags} />
                </Col>
                <Col>
                    <Categories />
                </Col>
            </Row> */}
            <Row>
                <Card_Post posts={posts} />
            </Row>
        </Container>
    )
}

export default Home