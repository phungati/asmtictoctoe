import { useState } from "react"
import Square from './square'

const Board = ({ children }) => {
    const [game, setGame] = useState([null, null, null, null, null, null, null, null, null])
    const [player, setPlayer] = useState(true)

    const handlePlay = (position) => {
        console.log(position);
        const newGame = game.map((i, index) => {
            if (index === position) {
                return player ? "X" : "O"
            }
            return i
        })
        setGame(newGame)
        setPlayer(!player)

    }

    const winList = [
        [2, 4, 6], [0, 4, 8], [0, 1, 2]
    ]

    const checkWinner = () => {
        for (let i = 0; i < winList.length; i++) {
            const [p1, p2, p3] = winList[i]
            if (game[p1] === game[p2] && game[p2] === game[p3] && game[p3] === game[p1]) {
                return game[p1]
            }
        }
        return null
    }

    return <>
        <h2>Winner is: {checkWinner()}</h2>
        <div className="grid grid-cols-3 gap-3">
            <Square value={game[0]} position={0} handlePlay={handlePlay} />
            <Square value={game[1]} position={1} handlePlay={handlePlay} />
            <Square value={game[2]} position={2} handlePlay={handlePlay} />
            <Square value={game[3]} position={3} handlePlay={handlePlay} />
            <Square value={game[4]} position={4} handlePlay={handlePlay} />
            <Square value={game[5]} position={5} handlePlay={handlePlay} />
            <Square value={game[6]} position={6} handlePlay={handlePlay} />
            <Square value={game[7]} position={7} handlePlay={handlePlay} />
            <Square value={game[8]} position={8} handlePlay={handlePlay} />
        </div>
    </>
}



export default Board