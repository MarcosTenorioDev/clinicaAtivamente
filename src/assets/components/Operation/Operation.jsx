import Card from '../Card/Card'
import '../Operation/Operation.css'
import acolhimento from '../../images/acolhimentos.svg'
import depressao from '../../images/depressao.svg'
import burnout from '../../images/burnout.svg'
import ansiedade from '../../images/ansiedade.svg'
import estresse from '../../images/estresse.svg'
import inseguranca from '../../images/inseguranca.svg'


const Operation = () =>{
    return(
        <div id='operation'>
            <h2 className='operationTitle'>Principais Atuações</h2>
            <div className='operationContainer'>   
                <div className='operationCardsContainer'>
                    <Card 
                    title='Ansiedade'
                    content='O transtorno de ansiedade pode ser tratado com abordagens terapêuticas, como a terapia cognitivo-comportamental'
                    imgSrc={ansiedade}
                    />
                    <Card 
                    title='Depressão'
                    content='A depressão é um transtorno mental que afeta o humor, os pensamentos e o comportamento de uma pessoa.'
                    imgSrc={depressao}
                    />
                    <Card 
                    title='Estresse'
                    content='xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx'
                    imgSrc={estresse}
                    />
                </div>
                <div className='operationCardsContainer'>
                    <Card 
                    title='Medo e insegurança'
                    content='xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx'
                    imgSrc={inseguranca}
                    />
                    <Card 
                    title='Burnout'
                    content='xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx'
                    imgSrc={burnout}
                    />
                    <Card 
                    title='Outros acolhimentos'
                    content='xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxx'
                    imgSrc={acolhimento}
                    />
                </div>
            </div>
            
            
        </div> 
    )
};

export default Operation