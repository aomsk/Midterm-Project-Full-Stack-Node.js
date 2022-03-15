export async function getServerSideProps() {
    const responsse = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/comments`, {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data = await responsse.json()

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
            comments: data,
            tags: data_tags, //fecth for navbar navTags
            many_categories: data_many_categories, //fecth for navbar navCategory
        },
        // revalidate: 10
    }
}

import Link from 'next/link'
import Head from 'next/head'

const allComments = ({comments}) => {
    console.log('comments: ', comments);

    return (
        <div className='container'>
            <Head>
                <title>Comments</title>
            </Head>
            <h3>All Comments ({ comments.length })</h3>
            <div className='row'>
                <div className='col'>
                    {
                        comments.map((comment, index) => {
                            let comment_date = new Date(comment.date).toDateString()
                            let local_time = new Date(comment.date).toLocaleTimeString()
                            return (
                                <div className='card shadow p-3 mb-4 bg-white rounded' key={index}>
                                    <div className='card-body'>
                                        <h4 className='card-title'>{comment.author_name}</h4>
                                        <p className='card-text'>Published on {comment_date} | {local_time}</p>
                                        <div className='card-text' dangerouslySetInnerHTML={{ __html: comment.content.rendered }}></div>
                                        <Link href={'/posts/' + comment.post}>
                                            <button type='button' className='btn btn-outline-primary'>Go To Post</button>
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
export default allComments