export async function getStaticPaths() {
    const response = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/posts', {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data = await response.json()
    const paths = data.map((post) => {
        return {
            params: { 
                postId: post.id.toString(),
            }
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const responsse = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/posts/${params.postId}`, {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data = await responsse.json()

    return {
        props: {
            post: data,
        }
    }
}

import { Container, Row, Col } from 'react-bootstrap'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const PostId = ({ post }) => {

    const [dataAuthor, setDataAuthor] = useState('')
    
    useEffect(() => {
        async function fetchDataAuthor() {

            // await fetch(post._links.author[0].href, {
            //     method: 'GET',
            //     headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
            // })
            // .then( responsse => responsse.json() )
            // .then( data => console.log(data) )
            // .catch(function(error) {
            //     console.log('Looks like there was a problem: ', error);
            //   });


            // try {
            //         const response = await fetch(post._links.author[0].href, {
            //         method: 'GET',
            //         mode: 'cors',
            //         headers: {
            //             'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==',
            //             'Content-Type': 'application/json',
            //         }
            //     })

            //     if (!response.ok) {
            //         throw new Error(`Error! status: ${response.status}`)
            //     }

            //     response = await response.json()
            //     setDataAuthor(response)
            //     console.log(response)
            // } catch (err) {
            //     console.log(err)
            // }
        }
        fetchDataAuthor()
    }, [])
    
    return (
        <Container>
            <Head>
                <title>{post.title.rendered}</title>
            </Head>
            <Row>
                <Col>
                    <h4>Post ID : {post.id}</h4>
                    <div>
                        <h1>{post.title.rendered}</h1>
                        <h6>Author :&nbsp;
                            <Link href={'/author/' + dataAuthor.name}>
                                <a>{dataAuthor.name}</a>
                            </Link>
                        </h6>
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