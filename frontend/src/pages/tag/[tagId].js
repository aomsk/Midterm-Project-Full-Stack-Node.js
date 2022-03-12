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
    const responsse_post = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/posts/`, {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data = await responsse.json()
    const data_post = await responsse_post.json()

    return {
        props: {
            tag: data,
            posts: data_post
        }
    }
}

import Head from 'next/head'
import Link from 'next/link'

const TagId = ({ tag, posts }) => {
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
                <div className='col col-lg-4'>
                    <h5>Tag ID : {tag.id}</h5>
                    <h5>Tag Name : {tag.name}</h5>
                    <h5>Tag Count : {tag.count}</h5>
                </div>
                <div className='col col-lg-8'>
                    {
                        post_in_tag.map((post, index) => {
                            return (
                                <div key={index}>
                                    <h3>{post.title.rendered} </h3>
                                    <h6>Published on { post.date }</h6>
                                    {/* <h6>Post ID : {post.id} </h6> */}
                                    <Link href={'/posts/' + post.id}>
                                        {/* <Button style={{ backgroundColor: '#AF7AC5', color: '#fff', border: 1 }}>Continue reading</Button> */}
                                        <button type="button" className="btn btn-outline-info">Continue reading</button>
                                    </Link>
                                    <hr></hr>
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