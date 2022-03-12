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

    const responsse_user = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/users/${params.authorId}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==',
            'Content-Type': 'application/json'
        }
    })
    const data_user = await responsse_user.json()

    return {
        props: {
            posts: data_posts,
            user: data_user,
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

                        return (
                            <div className='col col-lg-12' key={index}>
                                <div className='card mb-3'>
                                    <div className='card-body'>
                                        <h4 className='card-title'>
                                            <div dangerouslySetInnerHTML={{ __html: post.title.rendered }}></div>
                                        </h4>
                                        <div className='card-text'>{post_date}</div>
                                        <div className='container'>
                                            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                                        </div>
                                        {/* <Link href={'/posts/' + post.id}>
                                            <button className='btn' style={{ backgroundColor: '#AF7AC5', color: '#fff', border: 1 }}>Continue reading</button>
                                        </Link> */}
                                    </div>
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