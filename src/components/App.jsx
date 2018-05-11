class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentVideo: {
        id: {
          videoId: ''
        },
        snippet: { 
          title: '',
          description: ''
        }
      },
      videos: []
    };
  }
  
  // youtubeRequest() {
  //   buildApiRequest(
  //     'GET',
  //     '/youtube/v3search',
  //     {
  //       'maxResults': '25',
  //       'part': 'surfing',
  //       'type': ''
  //     }
  //   );
  // }
  componentDidMount() {
    this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: 'cats'}, this.setSearchState.bind(this));
  }
  
  
  
  setSearchState(videos) {
    this.setState({
      currentVideo: videos[0],
      videos: videos
    });
  }
  
  handleSearch(event) {
    this.props.searchYouTube(
      {
        key: window.YOUTUBE_API_KEY,
        query: event.target.value,
        max: 25
      },
      _.debounce(this.setSearchState.bind(this), 500)
    );
  }
  
  handleClick(video) {
    this.setState({//ALWAYS USE setState TO CHANGE STATE - this lets React to recognize change
      currentVideo: video
    });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={ this.handleSearch.bind(this) } />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} click={this.handleClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
//test