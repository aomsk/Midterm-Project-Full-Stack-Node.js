import Navbar from '../components/navbar'
import { TagContext } from '../../contexts/TagContext';
import { CategoryContext } from '../../contexts/CategoryContext';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {

    const { tags } = pageProps
    const [navTags] = useState(tags)

    const { many_categories } = pageProps
    const [navCategory] = useState(many_categories)

    return (
        <div>
            <TagContext.Provider value={navTags}>
                <CategoryContext.Provider value={navCategory}>
                    <Navbar />
                    <Component {...pageProps} />
                </CategoryContext.Provider>
            </TagContext.Provider>
        </div>
    )
}

export default MyApp
