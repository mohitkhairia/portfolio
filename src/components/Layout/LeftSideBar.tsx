import React from 'react'
import "./leftSideBar.scss"

const LeftSideBar = () => {
    return (
        <div className="left">
            <main className="left__main">
                <ul className="left__social">
                    
                    <li className="left__linkItems">
                        <a href='https://codepen.io/mohitkhairia' className="left__links" target="_blank" rel='noreferrer'>
                            <svg className="left__icon">
                                <use href="/icons/symbol-defs.svg#icon-codepen"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="left__linkItems">
                        <a href='https://github.com/mohitkhairia' className="left__links" target="_blank" rel='noreferrer'>
                            <svg className="left__icon">
                                <use href="/icons/symbol-defs.svg#icon-github"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="left__linkItems">
                        <a href='https://www.instagram.com/mohitkhairia/' className="left__links" target="_blank" rel='noreferrer'>
                            <svg className="left__icon">
                                <use href="/icons/symbol-defs.svg#icon-instagram"></use>
                            </svg>
                        </a>
                    </li>
                    <li className="left__linkItems">
                        <a href='https://www.linkedin.com/in/mohit-khairia-06172b58/' target="_blank" rel='noreferrer' className="left__links">
                            <svg className="left__icon">
                                <use href="/icons/symbol-defs.svg#icon-linkedin"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
                <div className="left__line"></div>
            </main>
        </div>
    )
}

export default LeftSideBar