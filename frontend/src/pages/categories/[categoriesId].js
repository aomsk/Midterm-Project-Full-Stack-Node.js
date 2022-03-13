export async function getStaticPaths() {
    const response = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/categories', {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data = await response.json()
    const paths = data.map((categories) => {
        return {
            params: {
                categoriesId: categories.id.toString(),
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
    const responsse_categories = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/categories/${params.categoriesId}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==',
            'Content-Type': 'application/json'
        }
    })
    const data_categories = await responsse_categories.json()

    const responsse_posts = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/posts', {
        method: 'GET',
        headers: { 'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==' }
    })
    const data_posts = await responsse_posts.json()

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
            categories: data_categories,
            tags: data_tags, //fecth for navbar navTags
            many_categories: data_many_categories, //fecth for navbar navCategory
        }
    }
}

import Head from 'next/head'
import Link from 'next/link'

const categoriesId = ({ posts, categories, tags }) => {
    console.log('categories: ', categories);
    const post_in_categories = []
    const list_post_category_id = posts.map((post) => {
        return post.categories
    })
    console.log('list_post_category_id: ', list_post_category_id);
    
    for (let i = 0; i < list_post_category_id.length; i++) {
        for (let j = 0; j < list_post_category_id[i].length; j++) {
            if (list_post_category_id[i][j] == categories.id) {
                post_in_categories.push(posts[i])
            }
        }
    }
    console.log('post_in_categories: ', post_in_categories);

    return (
        <div className="container">
            <div className="row">
                <div className="col col-lg-12">
                    <h2>Categories : {categories.name} ({categories.count})</h2>
                    {
                        post_in_categories.map((post, index) => {
                            let post_date = new Date(post.date_gmt).toDateString()
                            let local_time = new Date(post.date_gmt).toLocaleTimeString()
                            return (
                                <div className="card shadow p-3 mb-3 mt-3 bg-white rounded" key={index}>
                                    <div className="card-body">
                                        <h3 className="card-title">{post.title.rendered}</h3>
                                        <p className='card-text mb-4'>Published on { post_date } | { local_time }</p>
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
export default categoriesId