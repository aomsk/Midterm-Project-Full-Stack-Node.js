import Card_Post from '../components/card_post'
import Head from 'next/head'

export async function getStaticProps() {
    const responsse_posts = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/posts', {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data_posts = await responsse_posts.json()

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
            tags: data_tags, //fecth for navbar navTags
            many_categories: data_many_categories, //fecth for navbar navCategory
        },
    }
}

const Home = ({ posts, tags, many_categories }) => {
    return (
        <div className='container'>
            <Head>
                <title>Home</title>
            </Head>
            <div className='row'>
                <Card_Post posts={posts} />
            </div>
        </div>
    )
}

export default Home