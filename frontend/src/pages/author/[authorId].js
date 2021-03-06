export async function getStaticPaths() {
    const response = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/users', {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data = await response.json()
    const paths = data.map((user) => {
        return {
            params: {
                authorId: user.id.toString()
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
    const responsse_posts = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/posts', {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data_posts = await responsse_posts.json()

    //users
    const responsse_user = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/users/${params.authorId}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==',
            'Content-Type': 'application/json'
        }
    })
    const data_user = await responsse_user.json()

    //tags
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
            posts: data_posts,
            user: data_user,
            tags: data_tags, //fecth for navbar navTags
            many_categories: data_many_categories, //fecth for navbar navCategory
        }
    }
}

import Link from 'next/link'
import Head from 'next/head'

const Author = ({ posts, user }) => {
    console.log('user: ', user);

    const post_author = posts.filter((post) => {
        return post.author == user.id
    })

    console.log('post_author: ', post_author);

    return (
        <div className='container'>
            <Head>
                <title>{user.name}</title>
            </Head>
            <h2>Author : {user.name} ({post_author.length})</h2>
            <div className='row'>
                {
                    post_author.map((post, index) => {
                        let post_date = new Date(post.date_gmt).toDateString()
                        let local_time = new Date(post.date_gmt).toLocaleTimeString()

                        return (
                            <div className="card shadow p-3 mb-3 mt-3 bg-white rounded" key={index}>
                                <div className="card-body">
                                    <h3 className="card-title">{post.title.rendered}</h3>
                                    <p className='card-text mb-4'>Published on {post_date} | {local_time}</p>
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
    )
}

export default Author