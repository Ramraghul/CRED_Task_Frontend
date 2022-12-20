import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
    return (
        <>
                <div id="page-top">
                    <div id="wrapper">
                        <div id="content-wrapper" className="d-flex flex-column">
                            <div id="content">
                                <div className="container-fluid">
                                    <Outlet/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Home