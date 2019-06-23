import React, {Component} from 'react'

class Contact extends Component {
    render() {
        return(
            <div>
                <section className="pt-4">
                    <div className="container">
                        <div className="text-center">
                            <h2>Drop your message</h2>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="contact-form">
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf-BY17y3WGn1Rf75NqYoFXCJQDGF7i-_0qGtc5wOiipknExQ/viewform?embedded=true" width="640" height="485" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Contact