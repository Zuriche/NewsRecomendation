// import './NewsPanel.css';
import Auth from '../Auth/Auth';
import NewsCard from '../NewsCard/NewsCard';
import React from 'react';
import _ from 'lodash';


class NewsPanel extends React.Component {
    constructor() {
        super();
        this.state = { news: null, pageNum:1, loadedAll:false };
    }
    componentDidMount() {
        this.loadMoreNews("componentDidMount");
        this.loadMoreNews = _.debounce(this.loadMoreNews, 1000);
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        if((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50) ) {
            console.log('Handle Scroll.');
            this.loadMoreNews("handleScroll");
        }
    }
    renderNews() {
        const news_list = this.state.news.map((news) => {
            return (
                <div className='list-group-item' key={news.digest} >
                    <NewsCard news={news}/>
                </div>
            );
        });

        return (
            <div className='container-fluid'>
                <div>
                    {news_list}
                </div>
            </div>
        );
    }

    loadMoreNews() {
        console.log("loadAll? " + this.state.loadedAll)
        // if(this.state.loadedAll === true) {
        //     return;
        // }
        if(!this.state.loadedAll)   console.log('Loading more news!');
        const news_url = 'http://' + window.location.hostname + ':3000' +
        '/news/userId=' + Auth.getEmail() + "&pageNum=" + this.state.pageNum;
        const request = new Request(
            encodeURI(news_url), {
            method: 'GET',
            headers: {
                'Authorization': 'bearer ' + Auth.getToken(),
            }
        } );
        fetch(request)
            .then(res => res.json())
            .then(new_news => {
                if(!new_news || new_news.length === 0) {
                    this.setState({loadedAll:true});
                }
                this.setState({
                    news: this.state.news ? this.state.news.concat(new_news) : new_news,
                    pageNum: this.state.pageNum + 1,
                });
            });

    }
    render() {
        if(this.state.news) {
            return (
                <div>
                    {this.renderNews()}
                </div>

            );
        } else {
            return(
                <div>
                    Loading...
                </div>
            );
        }

    }
}

export default NewsPanel;
