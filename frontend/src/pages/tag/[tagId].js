export async function getStaticPaths() {
    const response = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/tags', {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data = await response.json()
    const paths = data.map((tag) => {
        return {
            params: { tagId: tag.id.toString() }
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const responsse = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/tags/${params.tagId}`, {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data = await responsse.json()
    
    const responsse_post = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/posts/`, {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data_post = await responsse_post.json()

    const responsse_tags = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/tags', {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data_tags = await responsse_tags.json()

    //categories
    const responsse_many_categories = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/categories', {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data_many_categories = await responsse_many_categories.json()

    return {
        props: {
            tag: data,
            posts: data_post,
            tags: data_tags, //fecth for navbar navTags
            many_categories: data_many_categories, //fecth for navbar navCategory
        }
    }
}

import Head from 'next/head'
import Link from 'next/link'

const TagId = ({ tag, posts, tags }) => {
    const list = []
    const post_tags_id = []
    const post_in_tag = []
    //ได้ list ของ post tags ออกมา ตัวอย่าง [0: [22, 23], 1: [22, 25]] มีทั้งหมด 10 ตัว
    posts.map((post) => {
        list.push(post.tags)
    })
    //for i j ทำเพื่อให้ได้ list รวม post tags id ตัวอย่าง [22, 23, 22, 25, 22, 22, 23, 22, 23, 23, 25, 23, 25, 23, 22, 23] มีทั้งหมด 16 ตัว
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list[i].length; j++) {
            // post_tags_id.push(list[i][j])
            if (list[i][j] == tag.id) {
                post_in_tag.push(posts[i])
                //post_in_tag จะเก็บ list ตัวที่มี tag.id ตรงกับที่ list[i][j] และเก็บ posts[i] เข้าไป post_in_tag มีขนาดตามจำนวนโพสที่อยู่ใน tag นั้นๆ
            }
        }
    }
    console.log('list: ', list);
    // console.log('post_tags_id: ', post_tags_id);
    console.log('post_in_tag : ', post_in_tag)

    return (
        <div className='container'>
            <Head>
                <title>{ tag.name }</title>
            </Head>
            <div className='row'>
                <div className='col col-lg-12'>
                <h2>Tag : {tag.name} ({tag.count})</h2>
                    {
                        post_in_tag.map((post, index) => {
                            return (
                                <div className='card shadow p-3 mb-3 mt-3 bg-white rounded' key={index}>
                                    <div className='card-body'>
                                        <h3 className='card-title'>{post.title.rendered} </h3>
                                        <h6 className='card-text'>Published on {post.date}</h6>
                                        <Link href={'/posts/' + post.id}>
                                            <button type="button" className="mt-2 btn btn-outline-info">Continue reading</button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TagId