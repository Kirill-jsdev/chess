import './Field.css'
import Bbishop from '../../../assets/Bbishop.svg'
import Bknight from '../../../assets/Bknight.svg'
import Brook from '../../../assets/Brook.svg'
import Bqueen from '../../../assets/Bqueen.svg'
import Bking from '../../../assets/Bking.svg'
import Bpawn from '../../../assets/Bpawn.svg'

import Wbishop from '../../../assets/Wbishop.svg'
import Wknight from '../../../assets/Wknight.svg'
import Wrook from '../../../assets/Wrook.svg'
import Wqueen from '../../../assets/Wqueen.svg'
import Wking from '../../../assets/Wking.svg'
import Wpawn from '../../../assets/Wpawn.svg'



// type FieldType = {
//     color?: 'white' | 'black'
//     x?: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h'
//     y?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
//     figure?: 'Wpawn' | 'Wrook' | 'Wknight' | 'Wbishop' | 'Wqueen' | 'Wking' | 'Bpawn' | 'Brook' | 'Bknight' | 'Bbishop' | 'Bqueen' | 'Bking'
//     handleSelectFigure: any
// }

type FieldType = any

const Field = ({color, x, y, figure, handleSelectFigure, setPrevSelectedFigure } : FieldType ) => {

    const handleDrag = (e: React.DragEvent, figure: any) => {
        e.dataTransfer.setData('figure', figure)
        setPrevSelectedFigure(JSON.parse(figure))
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()

    }

    const handleOnDrop = (e: React.DragEvent) => {
        const data = JSON.parse(e.dataTransfer.getData('figure'))
        handleSelectFigure({x, y, figure: data.figure, color})
    }

    return (
        <div className={`${color} board-field`} onClick={() => handleSelectFigure({x, y, figure, color})} onDrop={handleOnDrop} onDragOver={handleDragOver}>
            {figure === 'Brook' && <img src={Brook} style={{width: '100%'}} draggable onDragStart={(e) => handleDrag(e, JSON.stringify({x, y, figure, color}))} />}
            {figure === 'Bknight' && <img src={Bknight} style={{width: '100%'}} draggable onDragStart={(e) => handleDrag(e, JSON.stringify({x, y, figure, color}))} />}
            {figure === 'Bbishop' && <img src={Bbishop} style={{width: '100%'}} draggable onDragStart={(e) => handleDrag(e, JSON.stringify({x, y, figure, color}))} />}
            {figure === 'Bqueen' && <img src={Bqueen} style={{width: '100%'}} draggable onDragStart={(e) => handleDrag(e, JSON.stringify({x, y, figure, color}))} />}
            {figure === 'Bking' && <img src={Bking} style={{width: '100%'}} draggable onDragStart={(e) => handleDrag(e, JSON.stringify({x, y, figure, color}))} />}
            {figure === 'Bpawn' && <img src={Bpawn} style={{width: '100%'}} draggable onDragStart={(e) => handleDrag(e, JSON.stringify({x, y, figure, color}))} />}

            {figure === 'Wrook' && <img src={Wrook} style={{width: '100%'}} draggable onDragStart={(e) => handleDrag(e, JSON.stringify({x, y, figure, color}))} />}
            {figure === 'Wknight' && <img src={Wknight} style={{width: '100%'}} draggable onDragStart={(e) => handleDrag(e, JSON.stringify({x, y, figure, color}))} />}
            {figure === 'Wbishop' && <img src={Wbishop} style={{width: '100%'}} draggable onDragStart={(e) => handleDrag(e, JSON.stringify({x, y, figure, color}))} />}
            {figure === 'Wqueen' && <img src={Wqueen} style={{width: '100%'}} draggable onDragStart={(e) => handleDrag(e, JSON.stringify({x, y, figure, color}))} />}
            {figure === 'Wking' && <img src={Wking} style={{width: '100%'}} draggable onDragStart={(e) => handleDrag(e, JSON.stringify({x, y, figure, color}))} />}
            {figure === 'Wpawn' && <img src={Wpawn} style={{width: '100%'}} draggable onDragStart={(e) => handleDrag(e, JSON.stringify({x, y, figure, color}))} />}
        </div>
    )
}

export default Field