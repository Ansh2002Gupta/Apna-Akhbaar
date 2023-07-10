import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
        let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
          <div className="my-3">
            <div className="card" style={{width: '19rem'}}>
                <img src={imageUrl ? imageUrl : 'https://techcrunch.com/wp-content/uploads/2023/07/EGYM.jpg?resize=1200,691'} className="card-img-top" alt="newsPicture" />
                <div className="card-body">
                <span class="badge text-bg-info">{source ? source : 'Unknown'}</span>
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">{author ? author : 'Unknown'}<br></br><small className="text-muted">{date ? new Date(date).toUTCString() : 'Unknown'}</small></small></p>
                <a href={newsUrl} target = "_blank" rel="noreferrer" className="btn btn-primary">
                  Read More
                </a>
                </div>
            </div>
          </div>
    );
  }
}
