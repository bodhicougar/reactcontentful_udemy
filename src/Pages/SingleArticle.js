import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import client from '../Pages/Client'
import marked from 'marked'
import BlackLoader from '../images/black-loader.gif'

class SingleArticle extends Component {
    constructor() {
        super()
        this.state = { article: [] }
    }
    componentDidMount() {
        const slug = this.props.match.params.slug

        if (slug) {
            client.getEntries({
                content_type: 'blogs', 'fields.slug': slug
            }).then((entries) => {
                this.setState({ article: entries.items[0] }) // 200
            })
        }

    }

    getParsedMarkdown(blogDescription) {
        return {
            __html: marked(blogDescription, { sanitize: true })
        }
    }

    redirectToTarget = () => {
        this.props.history.push('/Blogs')
    }

    render() {
        return (
            <div>
                {this.state.article.length === 0 ?
                    <div align="center" className="pt-5"> <img src={BlackLoader} alt="Loader" /> </div>
                    :
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="mt-4">{this.state.article.fields.blogTitle}</h2>
                                <p dangerouslySetInnerHTML={this.getParsedMarkdown(this.state.article.fields.blogDescription)}></p>
                                <p style={{ textAlign: 'right', cursor: 'pointer', fontWeight: 'bold' }}><Link to="#" onClick={this.redirectToTarget}>Back</Link></p>

                            </div>
                        </div>

                    </div>
                }
            </div>
        )
    }

}

export default SingleArticle