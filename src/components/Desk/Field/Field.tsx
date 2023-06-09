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



type FieldType = {
    color: 'white' | 'black'
    x: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h'
    y: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
    figure?: 'Wpawn' | 'Wrook' | 'Wknight' | 'Wbishop' | 'Wqueen' | 'Wking' | 'Bpawn' | 'Brook' | 'Bknight' | 'Bbishop' | 'Bqueen' | 'Bking'
}

const Field = ({color, x, y, figure } : FieldType ) => {
    return (
        <div className={color} onClick={() => console.log(`${x} - ${y} - ${figure}`)}>
            {figure === 'Brook' && <img src={Brook} style={{width: '100%'}} />}
            {figure === 'Bknight' && <img src={Bknight} style={{width: '100%'}} />}
            {figure === 'Bbishop' && <img src={Bbishop} style={{width: '100%'}} />}
            {figure === 'Bqueen' && <img src={Bqueen} style={{width: '100%'}} />}
            {figure === 'Bking' && <img src={Bking} style={{width: '100%'}} />}
            {figure === 'Bpawn' && <img src={Bpawn} style={{width: '100%'}} />}

            {figure === 'Wrook' && <img src={Wrook} style={{width: '100%'}} />}
            {figure === 'Wknight' && <img src={Wknight} style={{width: '100%'}} />}
            {figure === 'Wbishop' && <img src={Wbishop} style={{width: '100%'}} />}
            {figure === 'Wqueen' && <img src={Wqueen} style={{width: '100%'}} />}
            {figure === 'Wking' && <img src={Wking} style={{width: '100%'}} />}
            {figure === 'Wpawn' && <img src={Wpawn} style={{width: '100%'}} />}
        </div>
    )
}

export default Field