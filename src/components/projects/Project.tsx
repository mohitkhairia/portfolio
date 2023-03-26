import React, { useState, useEffect } from 'react'
import "./project.scss"
import LazyLoad from 'react-lazyload';

import AnimatedLettersFast from 'components/AnimatedlettersFast';

const Project = () => {

    const [letterClass, setLetterClass] = useState("text-animate-fast")
    const nameArray = "02. My Projects".split("")


    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-fast-hover")
        }, 4000)

    })
    return (
        <div className="project">
            <span className="sectiontag">&lt;section&gt;</span>
            <h1 className="about__headingPrimary">
                <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
            </h1>

            {/* ----------------------------------------- for desktops -------------------------- */}

            <LazyLoad once height={400}>
                <section className='project__section'>
                    <div className="project__left">
                        <img className='project__img' src="https://raw.githubusercontent.com/code735/stanzaLiving/main/readme_homepage.png" alt="color palette" height="100%" style={{objectFit:"cover"}}/>
                    </div>
                    <div className="project__right">
                        <h3 className='project__headingTertiary'>Featured Project</h3>
                        <a href="https://code735.github.io/stanzaLiving/" target='_blank' rel="noreferrer" className='project__headingSecondary'><h2 >Stanza Living Clone</h2></a>
                        <div className="project__descriptionContainer">
                            <p className='project__description'>
                            Stanzaliving provides apartments, co-living and PG properties on rent across major cities in the country. These properties exhibit professional standards in hygine, maintainence and come furnished with myriad amneties.
                            </p>
                            <div className='project__tags'> HTML &nbsp; CSS &nbsp; Vanilla JS </div>
                            <div className="project__icons">
                                <a href="https://github.com/code735/stanzaLiving" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="project__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://code735.github.io/stanzaLiving/" target='_blank' rel='noreferrer'>
                                    <svg className="project__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </LazyLoad>
            <LazyLoad once height={400}>
                <section className='project__section'>
                    <div className="project__left1">
                        <h3 className='project__headingTertiary'>Featured Project</h3>
                        <a href="https://github.com/code735/zoomcar" target="_blank" rel="noreferrer" className='project__headingSecondary'><h2 >Cloning of Zoomcar WEBSITE</h2></a>
                        <div className="project__descriptionContainer project__descriptionContainer1">
                            <p className='project__description'>
                            Zoomcar, is an Indian self-drive car rental company, headquartered in Bangalore, India. The company was founded in 2013 by David Back and Greg Moran. It currently operates in 34+ cities. Self-drive cars from Zoomcar have given customers more control, privacy, and freedom. Book a self-drive car in any city you visit with the Zoomcar app on your phone and feel at home wherever you go. </p>
                            <div className='project__tags'>React.js &nbsp;
                                Bootstrap &nbsp; Redux.js </div>
                            <div className="project__icons project__icons1">
                                <a href="https://github.com/code735/zoomcar" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="project__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://github.com/code735/zoomcar" target='_blank' rel='noreferrer'>
                                    <svg className="project__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="project__right">
                        <img className='project__img' src="https://raw.githubusercontent.com/code735/zoomcar/main/src/images/Home%20Page.png" />
                    </div>
                </section>
            </LazyLoad>
            <LazyLoad once height={400}>
                <section className='project__section project__section3'>
                    <div className="project__left">
                        <img className='project__img' src="../favicon/HotStarHomePage.png" />
                    </div>
                    <div className="project__right">
                        <h3 className='project__headingTertiary'>Featured Project</h3>
                        <a href="https://hotstar-tawny.vercel.app/" target='_blank' rel='noreferrer' className='project__headingSecondary'><h2 >Disney+ Hotstar Clone</h2></a>
                        <div className="project__descriptionContainer">
                            <p className='project__description'>
                            This is a clone of Disneyplus Hotstar. It is an online video streaming platform owned by Novi Digital Entertainment Private Limited, a wholly owned subsidiary of Star India Private Limited. Disney+ Hotstar currently offers over 100,000 hours of TV content and every major sport covered live.
                            </p>
                            <div className='project__tags'>React.js &nbsp; Redux.js &nbsp; Bootstrap &nbsp; HTML/CSS &nbsp; javascript &nbsp; chakra UI </div>
                            <div className="project__icons">
                                <a href="https://github.com/hero007noob/hotstar-clone" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="project__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://hotstar-tawny.vercel.app/" target='_blank' rel='noreferrer'>
                                    <svg className="project__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </LazyLoad>

            {/* --------------------------------------------------- for Mobiles ----------------------------------------------------------------- */}


            <ul className="projectResp__list">
                <li className="projectResp__items projectResp__items1">
                    <div className="projectResp__card">
                        <div className="projectResp__cardTop">
                            <svg className="projectResp__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='projectResp__cardLink'>
                                <a href="https://github.com/yashfalke77/food-ordering-app" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="projectResp__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://youtu.be/Bm6oUdohS9M" target='_blank' rel='noreferrer'>
                                    <svg className="projectResp__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="projectResp__cardBody">
                            <div className="projectResp__cardBodyHeading">Colors.co</div>
                            <p className='projectResp__cardBodyDescription'>
                                Coolors is the essential tool for creating and collecting color palettes. It allows you to generate perfect matching colors in seconds. Even if you are not so skilled in design!. You may use a variety of color spaces, including RGB, CMYK, LAB etc.
                            </p>                        </div>
                        <div className="projectResp__cardFooter">
                            <div className='projectResp__tags'> Next.js &nbsp; React.js &nbsp; Node.js &nbsp; MongoDB &nbsp; Express.js &nbsp; SCSS/SASS</div>
                        </div>
                    </div>
                </li>
                <li className="projectResp__items  projectResp__items2">
                    <div className="projectResp__card">
                        <div className="projectResp__cardTop">
                            <svg className="projectResp__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='projectResp__cardLink'>
                                <a href="https://github.com/yashfalke77/iNotebook" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="projectResp__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://youtu.be/MF7xbfKyaEk" target='_blank' rel='noreferrer'>
                                    <svg className="projectResp__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="projectResp__cardBody">
                            <div className="projectResp__cardBodyHeading">YelpCamp Campgrounds</div>
                            <p className='projectResp__cardBodyDescription'>
                                A camping sites web app project that enables
                                you to add, update, and delete campgrounds as
                                well as view campgrounds added by other users
                                and receive comments and ratings from other
                                users.
                            </p>
                        </div>
                        <div className="projectResp__cardFooter">
                            <div className='projectResp__tags'> React.js &nbsp;
                                Express.js &nbsp; Node.js &nbsp; MongoDB &nbsp; Cloudinary &nbsp; ejs</div>
                        </div>
                    </div>
                </li>
                <li className="projectResp__items projectResp__items3">
                    <div className="projectResp__card">
                        <div className="projectResp__cardTop">
                            <svg className="projectResp__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='projectResp__cardLink'>
                                <a href="https://github.com/yashfalke77/Natours-project" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="projectResp__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://codepen.io/yashfalke77/pen/zYpvOBo" target='_blank' rel='noreferrer'>
                                    <svg className="projectResp__icon">
                                        <use href="icons/symbol-defs.svg#icon-codepen"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="projectResp__cardBody">
                            <div className="projectResp__cardBodyHeading">Online Grocery store</div>
                            <p className='projectResp__cardBodyDescription'>
                                The project entailed creating an ecommerce
                                website with everyday necessities and food as
                                its products.<br /><br />
                                An Django application with email based
                                authentication and uses cookies - sessions</p>
                        </div>
                        <div className="projectResp__cardFooter">
                            <div className='projectResp__tags'> Python &nbsp; Django &nbsp; Bootstrap &nbsp; HTML/CSS &nbsp; javascript</div>
                        </div>
                    </div>
                </li>
            </ul>



            <span className="sectiontag">&lt;/section&gt;</span>

        </div>
    )
}

export default Project