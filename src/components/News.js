import React, {Component} from 'react';
import NewsItem from './NewsItem';
import Spinner from './spinner';
import PropTypes from 'prop-types';

export default class News extends Component{
    constructor(){
        super()
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalPages: 1
        }
    }
    
    static defaultProps = {
        country: 'in',
        apiKey: '6e1a7b2f62c642c1902d269fd180f6dc',
        page: 1,
        pagesize: 6,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        apiKey: PropTypes.string,
        page: PropTypes.number,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }


    // props are read-only, they can not be changed.Only states can be changed. You can set state by passing the props and then can change them but you can never change the props.
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.props.page}&pagesize=${this.props.pageSize}`
        this.setState({
            loading: true
        })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalPages: Math.ceil(parsedData.totalResults/this.props.pageSize),
            loading: false
        })
    }

    showPrevious = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pagesize=${this.props.pageSize}`
        this.setState({
            loading: true
        })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles,
            loading: false
        })
    }

    showNext = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pagesize=${this.props.pageSize}`
        console.log('total pages ' + this.state.totalPages + " next page number: " + (this.state.page+1))
        this.setState({
            loading: true
        })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page+1,
            articles: parsedData.articles,
            loading: false
        })
    }

    render(){
        return(
            <div className='container my-3'>
                <h2 className='text-center'>Top Headlines</h2>
                {this.state.loading && <Spinner/>}
                <div className="row d-flex justify-content-center">
                    {
                        !this.state.loading && this.state.articles.map((element)=>{
                            return <div className="col-md-3 mx-3" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0,45) : ""} description={element.description ? element.description.slice(0,88) + "..." : ""} imageUrl = {element.urlToImage ? element.urlToImage : "https://d.newsweek.com/en/full/2202468/special-presidential-envoy-climate-john-kerry.jpg"} newsUrl = {element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                            </div> 
                        })
                    }
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" className={`btn btn-dark ${this.state.page === 1 ? 'disabled' : ''}`} onClick={this.showPrevious}>&larr;Previous</button>
                    <button type="button" className={`btn btn-dark ${this.state.page+1 > this.state.totalPages ? 'disabled' : ''}`} onClick={this.showNext}>Next&rarr;</button>
                </div>
            </div>
        )
    }
}
