import Navbar from '../components/NavBar'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { TagContext } from '../contexts/TagContext';
import { useState } from 'react';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
// import '../styles/scss/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {

    const { tags } = pageProps
    const [ navTags ] = useState(tags)
 
    return (
        <div>
            <TagContext.Provider value={ navTags }>
                <Navbar />
                <Component {...pageProps} />
            </TagContext.Provider>
        </div>
    )
}

export default MyApp