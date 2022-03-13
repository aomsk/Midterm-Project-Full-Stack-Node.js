import Navbar from '../components/navbar'
import { TagContext } from '../../contexts/TagContext';
import { CategoryContext } from '../../contexts/CategoryContext';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider';

function MyApp({ Component, pageProps }) {

    const { tags } = pageProps
    const [navTags] = useState(tags)

    const { many_categories } = pageProps
    const [navCategory] = useState(many_categories)

    return (
        <div>
            <SSRProvider>
                <TagContext.Provider value={navTags}>
                    <CategoryContext.Provider value={navCategory}>
                        <Navbar />
                        <Component {...pageProps} />
                    </CategoryContext.Provider>
                </TagContext.Provider>
            </SSRProvider>
        </div>
    )
}

export default MyApp
