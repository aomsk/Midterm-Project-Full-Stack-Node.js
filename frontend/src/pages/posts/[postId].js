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
    const response = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/posts/${params.postId}`, {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data = await response.json()

    //ใช้ data อันนี้หา author ได้
    const url_author = data._links.author[0].href
    const responsse_author = await fetch(url_author, {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const authorData = await responsse_author.json()

    const response_comments = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/comments`, {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data_comments = await response_comments.json()

    const response_ipAddress = await fetch('https://api.ipify.org/?format=json')
    const ipAddress = await response_ipAddress.json()

    return {
        props: {
            post: data,
            authorData: authorData,
            data_comments: data_comments,
            ipAddress: ipAddress
        }
    }
}

import { Container, Row, Col } from 'react-bootstrap'
import Head from 'next/head'
import Link from 'next/link'
import Input_Comment from '../../components/input_comment'
import Card_Comment from '../../components/card_comment'

const PostId = ({ post, authorData, data_comments, ipAddress }) => {
    console.log('ipAddress: ', ipAddress);
    console.log('authorData: ', authorData);

    const result = data_comments.filter((comment) => {
        return post.id == comment.post
    }) // get comment ที่มี post_id ตรงกับ post  
    console.log('result : ', result)

    let local_date = new Date(post.date_gmt).toDateString()
    let local_time = new Date(post.date_gmt).toLocaleTimeString()

    return (
        <Container>
            <Head>
                <title>{post.title.rendered}</title>
            </Head>
            <Row>
                <Col>
                    {/* <h4>Post ID : {post.id}</h4> */}
                    <div>
                        <h1>{post.title.rendered}</h1>
                        <h6>Author :&nbsp;
                            <Link href={'/author/' + authorData.id}>
                                <a>{authorData.name}</a>
                            </Link>
                        </h6>
                        <h6>Date : {local_date} | {local_time}</h6>
                        <h6>Tag : {post.tags}</h6>
                        <h6>Categories : {post.categories}</h6>
                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                        {/* <hr></hr> */}
                        <Card_Comment post={post} data_comments={data_comments} />
                        <Input_Comment post={post} data_comments={data_comments} ipAddress={ipAddress} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default PostId