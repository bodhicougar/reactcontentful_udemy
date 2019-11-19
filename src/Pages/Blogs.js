import React, { Component } from 'react';
import client from '../Pages/Client';
import BlackLoader from '../images/black-loader.gif';
import { Link } from 'react-router-dom';

class Blogs extends Component {
  constructor() {
    super();
    this.state = { blogpage: [] };
  }
  componentDidMount() {
    client
      .getEntries({
        content_type: 'blogs'
      })
      .then(entries => {
        this.setState({ blogpage: entries.items });
      });
  }
  render() {
    return (
      <div>
        <section className="pt-4">
          <div className="container">
            <div className="text-center">
              <h2> Blogs </h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur porta in ipsum non facilisis.
              </p>
            </div>
            {this.state.blogpage.length === 0 ? (
              <div align="center" className="pt-5">
                {' '}
                <img src={BlackLoader} alt="Loader" />{' '}
              </div>
            ) : (
              <div className="row">
                {this.state.blogpage.map((item, index) => {
                  return (
                    <div key={index} className="col-md-6 blog-content">
                      <img
                        src={item.fields.blogThumbnail.fields.file.url}
                        className="img-blog img-fluid"
                        alt=""
                      />
                      <h3>
                        <Link to={`../Blogs/${item.fields.slug}`}>
                          {item.fields.blogTitle}
                        </Link>
                      </h3>
                      <p>{item.fields.blogDescription}</p>
                      <button className="btn btn-primary">
                        <Link to={`../Blogs/${item.fields.slug}`}>
                          Read more...
                        </Link>
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}
export default Blogs;
