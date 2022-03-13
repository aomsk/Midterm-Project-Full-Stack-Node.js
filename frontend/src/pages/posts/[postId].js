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
    //post
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

    //comments
    const response_comments = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/comments`, {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data_comments = await response_comments.json()

    //tags
    const responsse_tags = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/tags', {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data_tags = await responsse_tags.json()

    //categories
    const responsse_categories = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/categories', {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data_categories = await responsse_categories.json()

    return {
        props: {
            post: data,
            authorData: authorData,
            data_comments: data_comments,
            tags: data_tags, //fecth for navbar navTags
            many_categories: data_categories, //fecth for navbar navCategory
            categories: data_categories
        }
    }
}

import Head from 'next/head'
import Link from 'next/link'
import Input_Comment from '../../components/input_comment'
import Card_Comment from '../../components/card_comment'

const PostId = ({ post, authorData, data_comments, tags, categories, many_categories }) => {
    // console.log('tags: ', tags);
    // console.log('categories: ', categories);
    // console.log('authorData: ', authorData);

    //tags
    const tag_in_post = tags.filter((tag, index) => {
        return post.tags[index]
    })
    console.log('tag_in_post: ', tag_in_post);

    //categorise
    const categories_in_post = categories.filter((category, index) => {
        return post.categories[index]
    })
    console.log('categories_in_post: ', categories_in_post);

    // const result = data_comments.filter((comment) => {
    //     return post.id == comment.post
    // }) // get comment ที่มี post_id ตรงกับ post  
    // console.log('result : ', result)

    let local_date = new Date(post.date_gmt).toDateString()
    let local_time = new Date(post.date_gmt).toLocaleTimeString()

    return (
        <div className='container'>
            <Head>
                <title>{post.title.rendered}</title>
            </Head>
            <div className='row'>
                <div className='col'>
                    <div>
                        <h1>{post.title.rendered}</h1>
                        <h6>Author :&nbsp;
                            <Link href={'/author/' + authorData.id}>
                                <a>{authorData.name}</a>
                            </Link>
                        </h6>
                        <h6>Date : {local_date} | {local_time}</h6>
                        <h6>Tag : </h6>
                        <div>
                        {
                            tag_in_post.map((tag, index) => {
                                return (
                                    <div key={index}>
                                        <Link href={'/tag/' + tag.id}>
                                            <button type="button" className="btn btn-dark mb-2" style={{marginLeft: '30px', border: '1px solid', borderRadius: '5px'}}>{tag.name}</button>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <h6>Categories : </h6>
                        <div>
                        {
                            categories_in_post.map((category, index) => {
                                return (
                                    <div key={index}>
                                        <Link href={'/categories/' + category.id}>
                                            <button type="button" className="btn btn-dark mb-2" style={{marginLeft: '30px', border: '1px solid', borderRadius: '5px'}}>{category.name}</button>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <hr></hr>
                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                        <Card_Comment post={post} data_comments={data_comments} />
                        <Input_Comment post={post} data_comments={data_comments} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostId