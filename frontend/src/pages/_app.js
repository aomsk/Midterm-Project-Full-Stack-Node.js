import Navbar from '../components/navbar'
import { TagContext } from '../../contexts/TagContext';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {

    const { tags } = pageProps
    const [navTags] = useState(tags)

    return (
        <div>
            <TagContext.Provider value={navTags}>
                <Navbar />
                <Component {...pageProps} />
            </TagContext.Provider>
        </div>
    )
}

export default MyApp
