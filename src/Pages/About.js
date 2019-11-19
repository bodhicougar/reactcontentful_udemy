import React, { Component } from 'react';
import client from './Client';
import BlackLoader from '../images/black-loader.gif';
import marked from 'marked';
// import CMS from 'netlify-cms';

class About extends Component {
  constructor() {
    super();
    this.state = { aboutpage: [] };
  }

  componentDidMount() {
    client
      .getEntries({
        content_type: 'about'
      })
      .then(entries => {
        this.setState({ aboutpage: entries.items[0] });
      });
  }

  getParsedMarkdown(aboutDescription) {
    return {
      __html: marked(aboutDescription, { sanitize: true })
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2 className="text-center">Was wir so machen...</h2>
          {this.state.aboutpage.length === 0 ? (
            <div align="center" className="pt-5">
              {' '}
              <img src={BlackLoader} alt="Loader" />{' '}
            </div>
          ) : (
            <div
              dangerouslySetInnerHTML={this.getParsedMarkdown(
                this.state.aboutpage.fields.aboutDescription
              )}
            ></div>
          )
          // <p>{this.state.aboutpage.fields.aboutDescription}</p>
          }
        </div>
      </div>
    );
  }
}
export default About;
