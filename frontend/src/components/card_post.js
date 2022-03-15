import Link from 'next/link'

const Card_Post = ({ posts }) => {
    return (
        <div className='container mt-4'>
            <div className='row'>
                {
                    posts.map((post, index) => {
                        let post_date = new Date(post.date_gmt).toDateString()
                        let local_time = new Date(post.date_gmt).toLocaleTimeString()
                        return (
                            <div className='col-12 col-lg-6 col-md-12' key={index}>
                                <div className="card shadow p-3 mb-5 bg-white rounded">
                                    <div className='card-body'>
                                        <h5 className='card-title'>{ post.title.rendered }</h5>
                                        <p className='card-text mb-4'>Published on { post_date } | { local_time }</p>
                                        <Link href={'/posts/' + post.id}>
                                            <button type="button" className='btn btn-outline-secondary'>Read More</button>
                                        </Link>
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

export default Card_Post;