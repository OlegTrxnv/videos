import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
// import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

// Hooks-based with custom hook
// Created custom hook useVideos, contains all video list related code (no selected video)
// useVideos can be reused in another component for obtaining list of videos
// OnTermSubmit renamed to search (makes more sense)
const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("most watched");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);


  return (
    <div className="ui container">
      <SearchBar onTermSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};


// Hooks-based component before refactoring

// const App = () => {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   useEffect(() => {
//     onTermSubmit("most watched");
//   }, []);

//   const onTermSubmit = async (term) => {
//     const response = await youtube.get("/search", {
//       params: {
//         q: term,
//       },
//     });

//     setVideos(response.data.items);
//     setSelectedVideo(response.data.items[0]);
//   };

//   const onVideoSelect = (video) => {
//     setSelectedVideo(video);
//   };

//   return (
//     <div className="ui container">
//       <SearchBar onTermSubmit={onTermSubmit} />
//       <div className="ui grid">
//         <div className="ui row">
//           <div className="eleven wide column">
//             <VideoDetail video={selectedVideo} />
//           </div>
//           <div className="five wide column">
//             <VideoList onVideoSelect={onVideoSelect} videos={videos} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



// class App extends React.Component {
//   state = { videos: [], selectedVideo: null };

//   componentDidMount() {
//     this.onTermSubmit("most watched");
//   }

//   onTermSubmit = async (term) => {
//     const response = await youtube.get("/search", {
//       params: {
//         q: term,
//       },
//     });

//     this.setState({
//       videos: response.data.items,
//       selectedVideo: response.data.items[0],
//     });
//   };

//   onVideoSelect = (video) => {
//     this.setState({ selectedVideo: video });
//   };

//   render() {
//     return (
//       <div className="ui container">
//         <SearchBar onTermSubmit={this.onTermSubmit} />
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDetail video={this.state.selectedVideo} />
//             </div>
//             <div className="five wide column">
//               <VideoList
//                 onVideoSelect={this.onVideoSelect}
//                 videos={this.state.videos}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
