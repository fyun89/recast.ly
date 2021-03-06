var VideoList = (props) =>{
//console.log(props) 
  return(
    <div className="video-list">
      {props.videos.map( //use map because it returns an array
        function(video) {
          return (<VideoListEntry video={video} handleClick={props.click}/>);
        }
      )}
    </div>
  );
};



// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;



// function VideoList(props) {
//   return (
//     'something'
//   );
// }

// const VideoList = (props) => {
//   return (
//     'something'
//   );
// }

// const VideoList = props => {
//     return (
//     'something'
//   );
// }

// const VideoList = props => 'something';    

// const VideoList = props => (
//   'something'
// );