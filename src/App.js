import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Blogs from './Pages/Blogs'
import SingleArticle from './Pages/SingleArticle'
import Contact from './Pages/Contact'

class App extends Component {
    constructor() {
        super()

    }

    render() {

        return (
            <Router>
                <div className="">
                    <Navbar />
                    <Route exact path="/" component = {Home} />
                    <Route exact path="/About" component = {About} />
                    <Route exact path="/Services" component = {Services} />
                    <Route exact path="/Blogs" component = {Blogs} />
                    <Route exact path="/Blogs/:slug" component = {SingleArticle} />
                    <Route exact path="/Contact" component = {Contact} />            
                    <Footer />
                </div>
            </Router>
        );
    }
}


export default App