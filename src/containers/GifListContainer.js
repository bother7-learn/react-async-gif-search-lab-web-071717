import React from 'react'
import GifList from '../components/GifList'


const GifListContainer = (props) => {
  return (<div> <GifList urls={props.urls}/> </div>)
}



export default GifListContainer
