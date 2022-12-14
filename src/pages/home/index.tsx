import { Button } from '../../components/button';
import { Header } from '../../components/header';
import { 

    Container,
    TextContent,
    Title,
    TitleHighlight

} from './styles'

import image from '../../assets/banner.png'
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () =>{

        navigate('/login')
    }

return (

    <>
        <Header/>
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implemente
                         <br/>
                        </TitleHighlight>
                        o seu futuro global agora! 
                </Title>
                <TextContent>
                    Domine as tecnologias  utilizadas pelas empresas mais inovadoras do mundo e 
                    encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar Agora" variant="secondary" onClick={handleClickSignIn} />


            </div>
            <div>
                <img src={image} alt="imagem principal" />
            </div>


        </Container>


    </>


)};

export {Home}