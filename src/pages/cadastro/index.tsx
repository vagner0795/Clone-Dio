import { MdLock, MdEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import { Header } from '../../components/header';
import { Input } from '../../components/input/index';

import { 

    Container, 
    Title,
    Column,
    CriarText,
    Text,
    Row,
    SubTitleLogin,
    TitleLogin,
    Wrapper
    
} from './styles'

const Cadastro = () => {
    const navigate = useNavigate();

    const handleClickCreate = () =>{

        navigate('/feed')
    }


return (

    <>
        <Header/>
        <Container>
            <Column>
                <Title>
                    A plantaforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubTitleLogin>Crie sua conta e make the change</SubTitleLogin>
                    
                        <Input name="user"  control={''} placeholder='Nome completo' required leftIcon={<MdEmail/>} type="text"/>
                        <Input name="email" control={''}  placeholder='Email' required leftIcon={<MdEmail/>} type="email"/>
                        <Input name="password" control={''} placeholder='Senha' required leftIcon={<MdLock/>} type="password" />
                        <br/>
                        <br/>
                        <Button title="Criar minha conta" variant='second' onClick={ handleClickCreate}  type="submit" />
            
                    <Row>
                        <Text>Ao clicar em "Criar minha conta grátis", declaro que 
                            aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </Text>
                        <br/>
                        <br/>
                   <Text> Já tenho conta. <CriarText>Fazer login</CriarText></Text>
                    </Row>

                </Wrapper>
            </Column>


        </Container>


    </>


)};

export {Cadastro}