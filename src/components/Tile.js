import React, { Component } from "react"; 
import  {Motion, spring} from "react-motion"

    const tileStyle = {
        backgroundColor: 'grey',
        boxShadow: 'inset 0 0 1px 0 black',
        boxSizing: 'border-box',
        display: 'block',
        padding: 6,
        position: 'absolute',
        cursor:'pointer'
    }
    
    const holeStyle = {
        opacity: 0
    }

  // Get the row/col pair from a linear index--will return the rows and cols like we have passed 3*3 matrix so will return 0th, 1, 2 row
    function getMatrixPosition (index, cols) {
        return {
            row: Math.floor(index / cols),   
            col: index % cols
        }
    }

    function getVisualPosition ({row, col}, width, height) {
        return {
            x: col * width,
            y: row * height
        }
    }

  class Tile extends Component {      
    handleClick () {
      const {index} = this.props
      console.log("this.props", this.props)
      this.props.onClick(index)
    }
    
    render () {
      const {hole, number, index, rows, cols, width, height} = this.props
      const matrixPos = getMatrixPosition(index, rows, cols)
      const visualPos = getVisualPosition(matrixPos, width, height)
    //   console.log("visualPos >>>", visualPos)
      const motionStyle = {
        translateX: spring(visualPos.x),
        translateY: spring(visualPos.y)
      }
      const style = {
        ...tileStyle,
        ...(number === hole ? holeStyle : ""),
        width,
        height
      }
      
      return (
        <Motion style={motionStyle}>
          {({translateX, translateY}) => (
            <li style={{...style, transform: `translate3d(${translateX}px, ${translateY}px, 0)`}}
              onClick={() => this.handleClick()}
              >
              {number}
            </li>
          )}
        </Motion>
      )
    }
  }
  export default Tile;