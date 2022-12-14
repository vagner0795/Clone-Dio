import { MdLock, MdEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import { Header } from '../../components/header';
import { Input } from '../../components/input/index';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { api } from '../../services/api'

import { 

    Container, 
    Title,
    Column,
    CriarText,
    EsqueciText,
    Row,
    SubTitleLogin,
    TitleLogin,
    Wrapper
    
} from './styles'
import { IFormData } from './types';
    
const Schema = yup.object({
    email: yup.string().email("Insira um Email valido!😤 Kuso yaro").required('Campo Obrigatorio!! 🤬'),
    password: yup.string().min(8, 'No Minimo 8 caracteres Baka!😡').required('Obrigatorio'),
}).required();

const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: errors } = useForm<IFormData>({
            resolver: yupResolver(Schema),
            mode: 'onChange',
            });
        

    const onSubmit = async (formData: IFormData  ) => {

        try{
                const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)

                if(data.length === 1){
                    navigate('/feed')
                    } else{
                        alert('Email ou Senha invalido')
                    }

            } catch{
                    alert('Houve um erro!, Tente novamente.')
                    }
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
                    <TitleLogin>Faça seu Cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change</SubTitleLogin>
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email.message} control={control} placeholder='Email' required leftIcon={<MdEmail/>} type="email"/>
                        <Input name="password" errorMessage={errors?.password.message} control={control} placeholder='Senha' required leftIcon={<MdLock/>} type="password" />
                        <br/>
                        <br/>
                        <Button title="Entrar" variant='second'   type="submit" />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci a Senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>

                </Wrapper>
            </Column>


        </Container>


    </>


)};

export {Login}