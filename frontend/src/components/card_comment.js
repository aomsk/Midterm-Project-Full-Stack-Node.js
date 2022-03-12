const Card_Comment = ({ post, data_comments }) => {
    const result = data_comments.filter((comment) => {
        return post.id == comment.post
    })
    return (
        <div>
            <h2>Comment ({result.length})</h2>
            {
                result.map((item, index) => {
                    let comment_date = new Date(item.date_gmt).toDateString()
                    let local_time = new Date(item.date_gmt).toLocaleTimeString()
                    return (
                        <div className='card mb-2' key={index}>
                            <div className='card-body'>
                                <h4 className='card-title'>{item.author_name}</h4>
                                <div className='card-text' dangerouslySetInnerHTML={{ __html: item.content.rendered }}></div>
                                <div className='card-text'>{comment_date} | {local_time}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card_Comment