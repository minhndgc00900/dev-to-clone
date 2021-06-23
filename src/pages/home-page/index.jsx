import React from 'react'
import Navigation from '../../components/navigation/index'
import LeftSideBar from '../../components/left-side-bar/index'
import Content from '../../components/content/index'
import RightSideBar from '../../components/right-side-bar/index'


function HomePage() {
    return (
        <>
            <Navigation />

            <main className='main-container'>
                <LeftSideBar />
                <Content />
                <RightSideBar />
            </main>
        </>
    )
}

export default HomePage
