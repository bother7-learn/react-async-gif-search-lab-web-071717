import React from 'react'


const GifList = (props) => {
  return (<div>{props.urls.map(
    function(gif){
      return (<img key={gif} src={gif}></img>)
    }
  )} </div>)
}


export default GifList
