import React from 'react'

const GifSearch = (props) => {
  return (<div><form><input type="text" onChange={props.changeSearch} value={props.searchValue} /><input type="submit" value="Search" onClick={props.submitForm}/></form></div>)
}


export default GifSearch
