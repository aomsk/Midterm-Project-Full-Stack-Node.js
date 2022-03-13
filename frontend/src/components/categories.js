const Categories = () => {
    return (
        <div className='container mt-3'>
            <h3>Categories</h3>
            <div className="row">
                {/* {
                    tags.map((tag, index) => {
                        return (
                            <div key={index} className="column is-3-desktop">
                                <div className="buttons">
                                    <Link href={'/tag/' + tag.id}>
                                        <button className="button is-primary is-focused">{tag.name}</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                } */}
            </div>
        </div>
    )
}

export default Categories