import React, { Component } from 'react'
import Slider1 from '../images/slider_one.jpg'
import './main.css'
import client from '../Pages/Client'
import BlackLoader from '../images/black-loader.gif'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            homebanner: [],
            homefeature: [],
            homegallery: [],
            homefaqs: []
        }
    }
    componentDidMount() {
        client.getEntries({
            content_type: 'homeBanner'
        }).then((entries) => {
            this.setState({ homebanner: entries.items })
        })

        client.getEntries({
            content_type: 'homeFeatures'
        }).then((entries) => {
            this.setState({ homefeature: entries.items })
        })

        client.getEntries({
            content_type: 'homeGallery'
        }).then((entries) => {
            this.setState({ homegallery: entries.items })
        })

        client.getEntries({
            content_type: 'homeFaqs'
        }).then((entries) => {
            this.setState({ homefaqs: entries.items })
        })
    }

    setClass = (index) => {
        if (index === 0) {
            return "carousel-item active"
        }
        else return "carousel-item"
    }


    render() {
        return (
            <div>
                {/* Corousel section starts here */}
                {this.state.homebanner.length === 0 ?
                    <div align="center" className="pt-5"> <img src={BlackLoader} alt="Loader" /> </div>

                    :

                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            {this.state.homebanner.map((item, index) => {
                                return (
                                    <div key={index} className={this.setClass(index)}>
                                        <img src={item.fields.homeBannerImage.fields.file.url} className="d-block w-100" alt="..." />
                                    </div>
                                )
                            })}


                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                }

                {/* Corousel section ends here */}
                <section id="feature">
                    <div className="container text-center pt-4">
                        <h2>Features</h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam laoreet nunc, eu gravida ex interdum in. Curabitur feugiat et mauris non scelerisque. </p>
                    </div>
                    {this.state.homefeature.length === 0 ?
                        <div align="center" className="pt-5"> <img src={BlackLoader} alt="Loader" /> </div>
                        :
                        <div className="container">
                            <div className="row">

                                {this.state.homefeature.map((item, index) => {
                                    return (
                                        <div key={index} className="col-md-4">
                                            <div className="feature-wrap">
                                                <i className={item.fields.featureIcon}></i>
                                                <h2>{item.fields.featureTitle}</h2>
                                                <h3>{item.fields.featureDescription}</h3>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    }

                </section>
                <section id="portfolio">
                    <div className="container text-center pt-4">
                        <h2>Portfolio</h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam laoreet nunc, eu gravida ex interdum in. Curabitur feugiat et mauris non scelerisque. </p>
                    </div>
                    {this.state.homegallery.length === 0 ?
                        <div align="center" className="pt-5"> <img src={BlackLoader} alt="Loader" /> </div>
                        :
                        <div className="container">
                            <div className="grid">
                                {this.state.homegallery.map((item, num = 0) => {
                                    num = num + 1
                                    return (
                                        <div key={num} className="grid-item">
                                            <input type="checkbox" id={num} />
                                            <label htmlFor={num} className="lightbox"><img src={item.fields.galleryImage.fields.file.url} /></label>
                                            <label htmlFor={num}><img src={item.fields.galleryImage.fields.file.url} /></label>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    }
                </section>
                <section id="faqs">
                    <div className="container text-center pt-4">
                        <h2>Faq's</h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam laoreet nunc, eu gravida ex interdum in. Curabitur feugiat et mauris non scelerisque. </p>
                    </div>
                    {this.state.homefaqs.length === 0 ?
                        <div align="center" className="pt-5"> <img src={BlackLoader} alt="Loader" /> </div>
                        :
                        <div className="container mt-10">

                            <div className="col-md-12">


                                <div className="panel-group" id="accordion3" role="tablist" aria-multiselectable="true">

                                    {this.state.homefaqs.map((item, num = 0) => {
                                        num = num + 1
                                        return (
                                            
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="headingOne3">
                                                    <h4 className="panel-title">
                                                        <a role="button" className="collapsed" data-toggle="collapse" href={"#one" + num} aria-expanded="true" aria-controls="collapseOne3">
                                                            {item.fields.faqTitle}
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id={"one" + num} className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne3">
                                                    <div className="panel-body">
                                                        <p>{item.fields.faqDescription}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}



                                </div>

                            </div>
                        </div>
                    }
                </section>
                <div className="spacer"></div>
            </div>
        );
    }
}
export default Home