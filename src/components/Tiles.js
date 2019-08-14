import React, { Component } from "react"; 
import _ from 'lodash';
import Tile from "./Tile"

    const tilesStyle = {
        listStyle: 'none',
        margin: '0 auto',
        padding: 5,
        position: 'relative'
    }

    // Get the row/col pair from a linear index--will return the rows and cols like we have passed 3*3 matrix so will return 0th, 1, 2 row
    function getMatrixPosition (index, rows, cols) {
        return {
            row: Math.floor(index / cols),   
            col: index % cols
        }
    }

    // check if clicked tile can be swaped or not by comparing its srcRow and srcCol and empty hole will be destRow, destCol
    function canSwap (src, dest, rows, cols) {
        const {row: srcRow, col: srcCol} = getMatrixPosition(src, rows, cols)
        const {row: destRow, col: destCol} = getMatrixPosition(dest, rows, cols)
        return (Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1)
    }


    class Tiles extends Component {
        constructor (props) {
            super(props)    
            const {rows, cols} = props
            this.state = {numbers: _.range(0, rows * cols)}
        }
  
        handleTileClick (index) {
            this.swap(index)
        }  

        swap (tileIndex) {
            const {hole, rows, cols} = this.props
            const {numbers} = this.state
            const holeIndex = numbers.indexOf(hole)
            if (canSwap(tileIndex, holeIndex, rows, cols)) {
                const newNumbers = _.clone(numbers); // will clone the numbers in tiles eg 0-8 
                //and then below will swap the clicked tile to empty hole 
                [newNumbers[tileIndex], newNumbers[holeIndex]] = [newNumbers[holeIndex], newNumbers[tileIndex]]
                this.setState({numbers: newNumbers})
            }
        }
  
        render () {        
            const {rows, cols, width, height} = this.props
            const tileWidth = Math.round(width / cols)
            const tileHeight = Math.round(height / rows)
            const style = {
            ...tilesStyle,
            width,
            height
            }
    
        return (
            <div>
                <ul style={style}>
                {this.state.numbers.map((number, index) => (
                    <Tile {...this.props} index={index} number={number} key={number}
                    width={tileWidth} height={tileHeight}
                    handleClick={(e) => this.handleTileClick(e)}
                    />
                ))}
                </ul>
            </div>
        )
        }
    }

export default Tiles
