class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
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
            <Search />
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