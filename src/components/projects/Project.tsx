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
        <div className="project" id='project_id' >
            <span className="sectiontag">&lt;section&gt;</span>
            <h1 className="about__headingPrimary">
                <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
            </h1>

            {/* ----------------------------------------- for desktops -------------------------- */}

            <LazyLoad once height={400}>
                <section className='project__section'>
                    <div className="project__left">
                        <img className='project__img' src="https://raw.githubusercontent.com/code735/stanzaLiving/main/readme_homepage.png" alt="" height="100%" style={{objectFit:"cover"}}/>
                    </div>
                    <div className="project__right">
                        <h3 className='project__headingTertiary'>Featured Project</h3>
                        <a href="https://code735.github.io/stanzaLiving/" target='_blank' rel="noreferrer" className='project__headingSecondary'><h2 >Stanza Living Clone</h2></a>
                        <div className="project__descriptionContainer">
                            <p className='project__description'>
                            Stanzaliving provides apartments, co-living and PG properties on rent across major cities in the country. These properties exhibit professional standards in hygine, maintainence and come furnished with myriad amneties.
                            </p>
                            <div className='project__tags'> HTML &nbsp; CSS &nbsp; Vanilla JS &nbsp; BootStrap</div>
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
                        <a href="https://asos-clone-cw.netlify.app/" target="_blank" rel="noreferrer" className='project__headingSecondary'><h2 >Asos Clone</h2></a>
                        <div className="project__descriptionContainer project__descriptionContainer1">
                            <p className='project__description'>
                            Asos, is an clothing e-commerce website, headquartered in London, United Kingdom. The company was founded in 2000 by José Antonio Ramos Calamonte. Asos is a women centric luxury clothing store, it has physical stores as well as virtual stores all across the world. </p>
                            <div className='project__tags'>HTML &nbsp;
                                Css &nbsp; Vanilla JS </div>
                            <div className="project__icons project__icons1">
                                <a href="https://github.com/nitika02/Asos" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="project__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://asos-clone-cw.netlify.app/" target='_blank' rel='noreferrer'>
                                    <svg className="project__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="project__right">
                        <img className='project__img' src="../favicon/asos.png" alt=""/>
                    </div>
                </section>
            </LazyLoad>
            <LazyLoad once height={400}>
                <section className='project__section project__section3'>
                    <div className="project__left">
                        <img className='project__img' src="../favicon/TodoApp.png" alt="" />
                    </div>
                    <div className="project__right">
                        <h3 className='project__headingTertiary'>Featured Project</h3>
                        <a href="http://13.233.212.122:3000/" target='_blank' rel='noreferrer' className='project__headingSecondary'><h2 >Todo App</h2></a>
                        <div className="project__descriptionContainer">
                            <p className='project__description'>
                            This is a End-to-End Todo Application, Build using MongoDb Atlas for database and React for FrontEnd UI. it is hosted on AWS in a single unit, both the frontEnd and backEnd part are hosted on a single instance. The UI is basic but effictive, application provides ADD, DELETE, UPDATE functionalities. 
                            </p>
                            <div className='project__tags'>Express &nbsp; MongoDb Atlas&nbsp; JavaScript&nbsp; React&nbsp; NodeJs&nbsp; AWS </div>
                            <div className="project__icons">
                                <a href="https://github.com/mohitkhairia/TodoApp" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="project__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="http://13.233.212.122:3000/" target='_blank' rel='noreferrer'>
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
                                <a href="https://github.com/code735/stanzaLiving" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="projectResp__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://code735.github.io/stanzaLiving/" target='_blank' rel='noreferrer'>
                                    <svg className="projectResp__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="projectResp__cardBody">
                            <div className="projectResp__cardBodyHeading">Stanza Living Clone</div>
                            <p className='projectResp__cardBodyDescription'>
                            Stanzaliving provides apartments, co-living and PG properties on rent across major cities in the country. These properties exhibit professional standards in hygine, maintainence and come furnished with myriad amneties.
                            </p>                        </div>
                        <div className="projectResp__cardFooter">
                            <div className='projectResp__tags'>  HTML &nbsp; CSS &nbsp; Vanilla JS &nbsp; BootStrap</div>
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
                                <a href="https://github.com/nitika02/Asos" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="projectResp__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://asos-clone-cw.netlify.app/" target='_blank' rel='noreferrer'>
                                    <svg className="projectResp__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="projectResp__cardBody">
                            <div className="projectResp__cardBodyHeading">Asos Clone</div>
                            <p className='projectResp__cardBodyDescription'>
                            Asos, is an clothing e-commerce website, headquartered in London, United Kingdom. The company was founded in 2000 by José Antonio Ramos Calamonte. Asos is a women centric luxury clothing store.                     
                            </p>
                        </div>
                        <div className="projectResp__cardFooter">
                            <div className='projectResp__tags'> Bootstrap &nbsp; HTML/CSS &nbsp; Javascript </div>
                        </div>
                    </div>
                </li>
                {/* <li className="projectResp__items projectResp__items3">
                    <div className="projectResp__card">
                        <div className="projectResp__cardTop">
                            <svg className="projectResp__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='projectResp__cardLink'>
                                <a href="https://github.com/mohitkhairia/TodoApp" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="projectResp__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="http://13.233.212.122:3000/" target='_blank' rel='noreferrer'>
                                <svg className="projectResp__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="projectResp__cardBody">
                            <div className="projectResp__cardBodyHeading">Todo App</div>
                            <p className='projectResp__cardBodyDescription'>
                            This is a End-to-End Todo Application, Build using MongoDb Atlas for database and React for FrontEnd UI. The UI is basic but effictive, application provides ADD, DELETE, UPDATE functionalities.</p>
                        </div>
                        <div className="projectResp__cardFooter">
                            <div className='projectResp__tags'> React &nbsp; MongoDb &nbsp; Express &nbsp; AWS</div>
                        </div>
                    </div>
                </li> */}
            </ul>



            <span className="sectiontag">&lt;/section&gt;</span>

        </div>
    )
}

export default Project