import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    hederRatio: 0.15,
    difficultlevel: 0.1,

    getColumnsAmount(){
        const width = Dimensions.get('window').width
        return Math.floor(width/this.blockSize)
    },
    getRowsAmount(){
        const totalHeight = Dimensions.get('window').height
        const boardheight = totalHeight * (1 - this.hederRatio)
        return Math.floor(boardheight / this.blockSize)
    }
}

export default params