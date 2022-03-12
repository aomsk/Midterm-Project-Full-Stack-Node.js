import { useState } from 'react'

const Input_Comment = ({ post, data_comments, ipAddress }) => {

    const [comment, setComment] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [website, setWebsite] = useState('')

    async function postComment() {

        let today = new Date();
        console.log('today: ', today);
        let ISO_DATE = today.toISOString()
        let ISO_split = ISO_DATE.split('T')
        let local_time = today.toLocaleTimeString()
        let date_time = ISO_split[0] + 'T' + local_time
        console.log('รวม Date + Time: ', date_time);

        // const get_id_comment =  data_comments[0].id
        // const id_comment =  get_id_comment + 1
        // console.log('id_comment: ', typeof(id_comment));

        if (comment == '') {
            alert("please fill the form")
        }
        else {
            let data = {
                // "author": 0,
                "author_email": email,
                "author_ip": ipAddress.ip,
                "author_name": name,
                "author_url": website,
                // "author_user_agent": '',
                "content": comment,
                "date": date_time,
                "date_gmt": date_time,
                "parent": 0,
                "post": post.id,
                // "status": 'approved',
                "meta": []
            }
    
            console.log('data: ', data);
    
            fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/comments', {
                method: "post",
                headers: {
                    'Authorization': 'Basic ZnN3ZDpmc3dkLWNtcw==',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
            .then(response => {
                console.log(response)
                window.location.reload() //for Reload Page after post comment
            })
            .then(json => console.log(json))
            .catch(err => console.log(err))
        }
    }
    
    return (
        <div>
            <h2>Reply Comment</h2>
            <label className="form-label">Comment</label>
            <div className="input-group mb-2">
                <textarea className="form-control" type="text" onChange={e => setComment(e.target.value)}></textarea>
            </div>
            <label className="form-label">Name (optional)</label>
            <div className="input-group mb-2">
                <input className="form-control" type="text" onChange={e => setName(e.target.value)}></input>
            </div>
            <label className="form-label">Email (optional)</label>
            <div className="input-group mb-2">
                <input className="form-control" type="text" onChange={e => setEmail(e.target.value)}></input>
            </div>
            <label className="form-label">Website</label>
            <div className="input-group mb-2">
                <input className="form-control" type="text" onChange={e => setWebsite(e.target.value)}></input>
            </div>
            <div className="d-grid gap-2 mb-3">
                <button type="button" className="btn btn-success" onClick={postComment}>Submit</button>
            </div>
        </div>
    )
}

export default Input_Comment