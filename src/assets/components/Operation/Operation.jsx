import Card from '../Card/Card'
import '../Operation/Operation.css'
import acolhimento from '../../images/acolhimentos.svg'
import depressao from '../../images/depressao.svg'
import burnout from '../../images/burnout.svg'
import ansiedade from '../../images/ansiedade.svg'
import estresse from '../../images/estresse.svg'
import inseguranca from '../../images/inseguranca.svg'


const Operation = () => {
    return (
        <div id='operation'>
            <h2 className='operationTitle'>Principais Atuações</h2>
            <div className='operationContainer'>
                <div className='operationCardsContainer'>
                    <Card
                        title='Ansiedade'
                        content='Emoção de preocupação, medo e tensão; pode ser normal ao estresse, mas em excesso se torna um transtorno que prejudica a vida diária.'
                        imgSrc={ansiedade}
                    />
                    <Card
                        title='Depressão'
                        content=' Transtorno mental com tristeza persistente e perda de interesse nas atividades diárias.'
                        imgSrc={depressao}
                    />
                    <Card
                        title='Estresse'
                        content=' Resposta física e emocional a situações desafiadoras; pode ser útil em doses moderadas, mas em excesso pode causar danos à saúde e ao bem-estar.'
                        imgSrc={estresse}
                    />
                </div>
                <div className='operationCardsContainer'>
                    <Card
                        title='Medo e insegurança'
                        content='Emoções naturais, medo é reação a ameaças, insegurança é falta de confiança; ambos impactam comportamentos, mas podem ser superados com apoio.'
                        imgSrc={inseguranca}
                    />
                    <Card
                        title='Burnout'
                        content='Esgotamento por estresse no trabalho; leva a baixo desempenho e despersonalização; requer cuidados para evitar impactos na saúde e vida pessoal.'
                        imgSrc={burnout}
                    />
                    <Card
                        title='Outros acolhimentos'
                        content={
                            <p className="outrosAcolhimentosList">
                                <li>Autocobrança</li>
                                <li>Procrastinação</li>
                                <li>Timidez</li>
                                <li>Insatisfação e Transição de Carreira</li>
                                <li>Dificuldade para tomar decisões</li>
                                <li>Autoconhecimento e Desenvolvimento Pessoal</li>
                            </p>
                        }
                        imgSrc={acolhimento}
                    />
                </div>
            </div>


        </div>
    )
};

export default Operation