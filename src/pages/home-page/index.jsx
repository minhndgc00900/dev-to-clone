import React, { createContext } from 'react'
import Navigation from '../../components/navigation/index'
import LeftSideBar from '../../components/left-side-bar/index'
import Content from '../../components/content/index'
import RightSideBar from '../../components/right-side-bar/index'
import { listings, news, help } from './home-page.configs'

const CreatedHomePageContext = createContext();

function HomePage() {
    
    return (
        <CreatedHomePageContext.Provider value={{
            listings,
            news,
            help
        }}>
            <Navigation />
            <main className='main-container'>
                <LeftSideBar />
                <Content />
                <RightSideBar />
            </main>
        </CreatedHomePageContext.Provider>
    )
}

export default HomePage
export { CreatedHomePageContext }
