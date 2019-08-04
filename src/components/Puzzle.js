import React, { Component } from "react";
import Tiles from "./Tiles"
import "./Puzzle.scss";


class Puzzle extends Component {
  render () {
    return (
    <div className="puzzle">
      <Tiles rows={3} cols={3} hole={8} width={300} height={300}/>
     </div>
    )
  }
}
export default Puzzle;