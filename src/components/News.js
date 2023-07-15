import React, {Component} from 'react';
import NewsItem from './NewsItem';
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import default_image from './default_image.png';

export default class News extends Component{
    constructor(props){
        super(props)
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalPages: 1,
            category: this.props.category
        }
        // document.title = `TajaKhabar | ${this.capitalize(this.props.category)}`
    }
    
    static defaultProps = {
        country: 'in',
        apiKey: '',
        page: 1,
        pagesize: 6,
        category: 'general',
        totalResults: 0
    }

    static propTypes = {
        country: PropTypes.string,
        apiKey: PropTypes.string,
        page: PropTypes.number,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        totalResults: PropTypes.number
    }


    // props are read-only, they can not be changed.Only states can be changed. You can set state by passing the props and then can change them but you can never change the props.
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.props.page}&pagesize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            loading: false,
            totalPages: Math.ceil(parsedData.totalResults/this.props.pageSize)
        })
        this.props.setProgress(Math.round(this.state.page/this.state.totalPages * 100))
    }

    // showPrevious = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pagesize=${this.props.pageSize}`
    //     this.setState({
    //         loading: true
    //     })
    //     let data = await fetch(url)
    //     let parsedData = await data.json()
    //     this.setState({
    //         page: this.state.page-1,
    //         articles: parsedData.articles,
    //         loading: false
    //     })
    // }

    // showNext = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pagesize=${this.props.pageSize}`
    //     // console.log('total pages ' + this.state.totalPages + " next page number: " + (this.state.page+1))
    //     this.setState({
    //         loading: true
    //     })
    //     let data = await fetch(url)
    //     let parsedData = await data.json()
    //     this.setState({
    //         page: this.state.page+1,
    //         articles: parsedData.articles,
    //         loading: false
    //     })
    // }

    capitalize = (string) => {
        return string.charAt(0).toUpperCase()+string.slice(1)
    }

    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pagesize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page+1, //this is asynchronous in nature hence will take some time to do page = page+1
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(Math.round(this.state.page/this.state.totalPages * 100))
    }

    render(){
        return(
            <>
                <h2 className='text-center' style={{marginTop: '90px'}}>Top Headlines - {this.capitalize(this.props.category)}</h2>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll 
                    dataLength = {this.state.articles.length}
                    next = {this.fetchMoreData}
                    hasMore = {this.state.articles.length !== this.state.totalResults}
                    loading = {<Spinner/>}>
                    
                    <div className="row d-flex justify-content-center">
                        {
                            this.state.articles.map((element)=>{
                                return <div className="col-md-3 px-4" key={element.url}>
                                    <NewsItem 
                                        title={element.title ? element.title.slice(0,45) : ""} 
                                        description={element.description ? element.description.slice(0,88) + "..." : ""} 
                                        imageUrl = {element.urlToImage ? element.urlToImage : default_image} newsUrl = {element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        source={element.source.name}
                                    />
                                </div> 
                            })
                        }
                    </div>
                    {/* <div className="container d-flex justify-content-between">
                    <button type="button" className={`btn btn-dark ${this.state.page === 1 ? 'disabled' : ''}`} onClick={this.showPrevious}>&larr;Previous</button>
                    <button type="button" className={`btn btn-dark ${this.state.page+1 > this.state.totalPages ? 'disabled' : ''}`} onClick={this.showNext}>Next&rarr;</button>
                    </div> */}
                </InfiniteScroll>
            </>
        )
    }
}
