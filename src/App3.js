import React from 'react'
import Navbar from './components/site/navbar/Navbar'

import './App3.scss'
import Footer from './components/site/footer/Footer'
import Section from './components/site/section/Section'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/site/layout/Layout'
import Courses from './components/site/courses/Courses'

function App3() {
    return (
        <div className="app3">
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Section} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </div>
    )
}

export default App3
