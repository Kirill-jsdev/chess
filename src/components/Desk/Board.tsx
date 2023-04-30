import './Board.css'
import Field from './Field/Field'


const Board = () => {

    return <div className='chess-board'>
        <Field color='white' x={'a'} y={8} figure={'Brook'}/>
        <Field color='black' x={'a'} y={7} figure={'Bpawn'}/>
        <Field color='white' x={'a'} y={6}/>
        <Field color='black' x={'a'} y={5}/>
        <Field color='white' x={'a'} y={4}/>
        <Field color='black' x={'a'} y={3}/>
        <Field color='white' x={'a'} y={2} figure={'Wpawn'}/>
        <Field color='black' x={'a'} y={1} figure={'Wrook'}/>

        <Field color='black' x={'b'} y={8} figure='Bknight'/>
        <Field color='white' x={'b'} y={7} figure={'Bpawn'}/>
        <Field color='black' x={'b'} y={6}/>
        <Field color='white' x={'b'} y={5}/>
        <Field color='black' x={'b'} y={4}/>
        <Field color='white' x={'b'} y={3}/>
        <Field color='black' x={'b'} y={2} figure={'Wpawn'}/>
        <Field color='white' x={'b'} y={1} figure='Wknight'/>

        <Field color='white' x={'c'} y={8} figure='Bbishop'/>
        <Field color='black' x={'c'} y={7} figure={'Bpawn'}/>
        <Field color='white' x={'c'} y={6}/>
        <Field color='black' x={'c'} y={5}/>
        <Field color='white' x={'c'} y={4}/>
        <Field color='black' x={'c'} y={3}/>
        <Field color='white' x={'c'} y={2} figure={'Wpawn'}/>
        <Field color='black' x={'c'} y={1} figure='Wbishop'/>

        <Field color='black' x={'d'} y={8} figure='Bqueen'/>
        <Field color='white' x={'d'} y={7} figure={'Bpawn'}/>
        <Field color='black' x={'d'} y={6}/>
        <Field color='white' x={'d'} y={5}/>
        <Field color='black' x={'d'} y={4}/>
        <Field color='white' x={'d'} y={3}/>
        <Field color='black' x={'d'} y={2} figure={'Wpawn'}/>
        <Field color='white' x={'d'} y={1} figure='Wqueen'/>

        <Field color='white' x={'e'} y={8} figure='Bking'/>
        <Field color='black' x={'e'} y={7} figure={'Bpawn'}/>
        <Field color='white' x={'e'} y={6}/>
        <Field color='black' x={'e'} y={5}/>
        <Field color='white' x={'e'} y={4}/>
        <Field color='black' x={'e'} y={3}/>
        <Field color='white' x={'e'} y={2} figure={'Wpawn'}/>
        <Field color='black' x={'e'} y={1} figure='Wking'/>

        <Field color='black' x={'f'} y={8} figure='Bbishop'/>
        <Field color='white' x={'f'} y={7} figure={'Bpawn'}/>
        <Field color='black' x={'f'} y={6}/>
        <Field color='white' x={'f'} y={5}/>
        <Field color='black' x={'f'} y={4}/>
        <Field color='white' x={'f'} y={3}/>
        <Field color='black' x={'f'} y={2} figure={'Wpawn'}/>
        <Field color='white' x={'f'} y={1} figure='Wbishop'/>

        <Field color='white' x={'g'} y={8} figure='Bknight'/>
        <Field color='black' x={'g'} y={7} figure={'Bpawn'}/>
        <Field color='white' x={'g'} y={6}/>
        <Field color='black' x={'g'} y={5}/>
        <Field color='white' x={'g'} y={4}/>
        <Field color='black' x={'g'} y={3}/>
        <Field color='white' x={'g'} y={2} figure={'Wpawn'}/>
        <Field color='black' x={'g'} y={1} figure='Wknight'/>

        <Field color='black' x={'h'} y={8} figure={'Brook'}/>
        <Field color='white' x={'h'} y={7} figure={'Bpawn'}/>
        <Field color='black' x={'h'} y={6}/>
        <Field color='white' x={'h'} y={5}/>
        <Field color='black' x={'h'} y={4}/>
        <Field color='white' x={'h'} y={3}/>
        <Field color='black' x={'h'} y={2} figure={'Wpawn'}/>
        <Field color='white' x={'h'} y={1} figure={'Wrook'}/>
    </div>
}

export default Board