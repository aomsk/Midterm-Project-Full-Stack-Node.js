import Link from 'next/link'

const Home = ({ posts }) => {
    return (
        <div className="container">
            <div className="columns mt-3 is-multiline">
                {
                    posts.map((post, index) => {
                        return (
                            <div key={index} className="column is-4">
                                <div className='card'>
                                    <div className='card-content'>
                                        <p className='is-size-6'>{ post.title.rendered }</p>
                                    </div>
                                    <footer className='card-footer'>
                                        <p className="card-footer-item">
                                            <Link href={'/postcontent'}>
                                                <a className="card-footer-item">Read More</a>
                                            </Link>
                                        </p>
                                    </footer>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home

export async function getStaticProps() {
    const responsse = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/posts')
    const data = await responsse.json()
    console.log(data)

    return {
        props: {
            posts: data
        }
    }
}