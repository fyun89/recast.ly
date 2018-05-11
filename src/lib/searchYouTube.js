var searchYouTube = (options, callback) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v3/search', 
    {
      key: options.key,
      part: 'snippet',
      q: options.query,
      type: 'video',
      maxResults: options.max || 5,
      videoEmbeddable: true
    },
    function(data) {
      callback(data.items);
    }
  );
};



window.searchYouTube = searchYouTube;
