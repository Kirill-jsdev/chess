import {useState} from 'react'
import './Board.css'
import Field from './Field/Field'


const Board = () => {

    const [selectedFigure, setSelectedFigure] = useState<any>()


    const handleSelectFigure = (selected: any) => {
        if (selected.figure)
            setSelectedFigure(selected)
        else
            setSelectedFigure(null)
    }

    console.log(selectedFigure)

    return <div className='chess-board'>

        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.a8}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.b8}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.c8}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.d8}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.e8}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.f8}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.g8}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.h8}/>

        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.a7}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.b7}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.c7}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.d7}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.e7}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.f7}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.g7}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.h7}/>

        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.a6}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.b6}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.c6}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.d6}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.e6}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.f6}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.g6}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.h6}/>

        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.a5}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.b5}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.c5}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.d5}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.e5}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.f5}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.g5}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.h5}/>

        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.a4}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.b4}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.c4}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.d4}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.e4}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.f4}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.g4}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.h4}/>

        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.a3}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.b3}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.c3}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.d3}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.e3}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.f3}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.g3}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.h3}/>

        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.a2}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.b2}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.c2}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.d2}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.e2}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.f2}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.g2}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.h2}/>

        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.a1}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.b1}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.c1}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.d1}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.e1}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.f1}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.g1}/>
        <Field handleSelectFigure={handleSelectFigure} {...initialPosition.h1}/>

    </div>
}

export default Board

const initialPosition = {
    a1: {color:'black', x: 'a', y:1, figure: 'Wrook'},
    b1: {color:'white', x: 'b', y:1, figure: 'Wknight'},
    c1: {color:'black', x: 'c', y:1, figure: 'Wbishop'},
    d1: {color:'white', x: 'd', y:1, figure: 'Wqueen'},
    e1: {color:'black', x: 'e', y:1, figure: 'Wking'},
    f1: {color:'white', x: 'f', y:1, figure: 'Wbishop'},
    g1: {color:'black', x: 'g', y:1, figure: 'Wknight'},
    h1: {color:'white', x: 'h', y:1, figure: 'Wrook'},

    a2: {color:'white', x: 'a', y:2, figure: 'Wpawn'},
    b2: {color:'black', x: 'b', y:2, figure: 'Wpawn'},
    c2: {color:'white', x: 'c', y:2, figure: 'Wpawn'},
    d2: {color:'black', x: 'd', y:2, figure: 'Wpawn'},
    e2: {color:'white', x: 'e', y:2, figure: 'Wpawn'},
    f2: {color:'black', x: 'f', y:2, figure: 'Wpawn'},
    g2: {color:'white', x: 'g', y:2, figure: 'Wpawn'},
    h2: {color:'black', x: 'h', y:2, figure: 'Wpawn'},

    a3: {color:'black', x: 'a', y:3},
    b3: {color:'white', x: 'b', y:3},
    c3: {color:'black', x: 'c', y:3},
    d3: {color:'white', x: 'd', y:3},
    e3: {color:'black', x: 'e', y:3},
    f3: {color:'white', x: 'f', y:3},
    g3: {color:'black', x: 'g', y:3},
    h3: {color:'white', x: 'h', y:3},

    a4: {color:'white', x: 'a', y:4},
    b4: {color:'black', x: 'b', y:4},
    c4: {color:'white', x: 'c', y:4},
    d4: {color:'black', x: 'd', y:4},
    e4: {color:'white', x: 'e', y:4},
    f4: {color:'black', x: 'f', y:4},
    g4: {color:'white', x: 'g', y:4},
    h4: {color:'black', x: 'h', y:4},

    a5: {color:'black', x: 'a', y:5},
    b5: {color:'white', x: 'b', y:5},
    c5: {color:'black', x: 'c', y:5},
    d5: {color:'white', x: 'd', y:5},
    e5: {color:'black', x: 'e', y:5},
    f5: {color:'white', x: 'f', y:5},
    g5: {color:'black', x: 'g', y:5},
    h5: {color:'white', x: 'h', y:5},

    a6: {color:'white', x: 'a', y:6},
    b6: {color:'black', x: 'b', y:6},
    c6: {color:'white', x: 'c', y:6},
    d6: {color:'black', x: 'd', y:6},
    e6: {color:'white', x: 'e', y:6},
    f6: {color:'black', x: 'f', y:6},
    g6: {color:'white', x: 'g', y:6},
    h6: {color:'black', x: 'h', y:6},

    a7: {color:'black', x: 'a', y:7, figure: 'Bpawn'},
    b7: {color:'white', x: 'b', y:7, figure: 'Bpawn'},
    c7: {color:'black', x: 'c', y:7, figure: 'Bpawn'},
    d7: {color:'white', x: 'd', y:7, figure: 'Bpawn'},
    e7: {color:'black', x: 'e', y:7, figure: 'Bpawn'},
    f7: {color:'white', x: 'f', y:7, figure: 'Bpawn'},
    g7: {color:'black', x: 'g', y:7, figure: 'Bpawn'},
    h7: {color:'white', x: 'h', y:7, figure: 'Bpawn'},

    a8: {color:'white', x: 'a', y:8, figure: 'Brook'},
    b8: {color:'black', x: 'b', y:8, figure: 'Bknight'},
    c8: {color:'white', x: 'c', y:8, figure: 'Bbishop'},
    d8: {color:'black', x: 'd', y:8, figure: 'Bqueen'},
    e8: {color:'white', x: 'e', y:8, figure: 'Bking'},
    f8: {color:'black', x: 'f', y:8, figure: 'Bbishop'},
    g8: {color:'white', x: 'g', y:8, figure: 'Bknight'},
    h8: {color:'black', x: 'h', y:8, figure: 'Brook'},
}