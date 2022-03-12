import Navbar from '../components/navbar'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { TagContext } from '../../contexts/TagContext';
<<<<<<< HEAD:frontend/src/pages/_app.js
=======
// import { AuthorContext } from '../../contexts/AuthorContext';
>>>>>>> dev:frontend/pages/_app.js
import { useState } from 'react';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
// import '../styles/scss/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {

    const { tags } = pageProps
    const [ navTags ] = useState(tags)
 
    // const { authorData } = pageProps
    // const [ author ] = useState(authorData)

    return (
        <div>
            <TagContext.Provider value={navTags}>
                {/* <AuthorContext.Provider value={author}> */}
                    <Navbar />
                    <Component {...pageProps} />
                {/* </AuthorContext.Provider> */}
            </TagContext.Provider>
        </div>
    )
}

export default MyApp
