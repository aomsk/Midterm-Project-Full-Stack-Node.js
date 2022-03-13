const Card_Comment = ({ post, data_comments }) => {
    const result = data_comments.filter((comment) => {
        return post.id == comment.post
    })
    return (
        <div>
            {/* <hr></hr> */}
            <h2>Comment ({result.length})</h2>
            {
                result.map((item, index) => {
                    let comment_date = new Date(item.date_gmt).toDateString()
                    let local_time = new Date(item.date_gmt).toLocaleTimeString()
                    return (
                        <div className='card shadow p-3 mb-3 bg-white rounded' key={index}>
                            <div className='card-body'>
                                <h4 className='card-title'>{item.author_name}</h4>
                                <p className='card-text'>{comment_date} | {local_time}</p>
                                <p className='card-text' dangerouslySetInnerHTML={{ __html: item.content.rendered }}></p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card_Comment