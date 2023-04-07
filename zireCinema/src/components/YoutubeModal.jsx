import React from "react";
import { Button, Modal } from "react-bootstrap";
import YouTube from 'react-youtube';

const YoutubeModal = (props) => {
    const opts = {
        height: '390',
        width: '800',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const _onReady = (event) => {
        event.target.pauseVideo();
        // event.target.playVideo();
      };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header closeButton>
       
      </Modal.Header>
       <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} />
    </Modal>
  );
};

export default YoutubeModal;
