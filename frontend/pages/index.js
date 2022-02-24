import Card_Post from '../components/Card_Post'
import Categories from '../components/Categories'
import Tag from '../components/Tag'
import { Container, Row, Col } from 'react-bootstrap'
import Head from 'next/head'

export async function getStaticProps() {
    const responsse_posts = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/posts')
    const data_posts = await responsse_posts.json()

    const responsse_tags = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/tags')
    const data_tags = await responsse_tags.json()

    console.log('fecth data success')

    return {
        props: {
            posts: data_posts,
            tags: data_tags
        }
    }
}

const Home = ({ posts, tags }) => {
    return (
        // <div className="container">
        //     <div className='columns'>
        //         <div className='column'>
        //             <Tag tags={ tags }/>
        //         </div>
        //         <div className='column'>
        //             <Categories />
        //         </div>
        //     </div>
        //     <div>
        //         <Card_Post posts={ posts }/>
        //     </div>
        // </div>
        <Container>
            <Head>
                <title>Home</title>
            </Head>
            <Row>
                <Col>
                    <Tag tags={tags} />
                </Col>
                <Col>
                    <Categories />
                </Col>
            </Row>
            <Row>
                <Card_Post posts={posts} />
            </Row>
        </Container>
    )
}

export default Home