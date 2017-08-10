import React from 'react';

const VideoListItem = ({video , onVideoSelect}) => {
  //const video = props.video; Es lo mismo que poner las llaves en el props de arriba ({props})
  // crea una variable con los props llamada como el nombre que ponemos ({video}) gracias ES6

  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={imageUrl} className="media-object" />
        </div>

        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
