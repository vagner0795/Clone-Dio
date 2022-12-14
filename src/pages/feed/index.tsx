import { Header } from '../../components/header';
import { Card } from '../../components/card'
import { UserInfo } from '../../components/userInfo'


import {
     Container,
     Column,
     Title,
     TitleHighlight
 } from './styles'

const Feed = () => {

return (

    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>FEED</Title>
                
             <Card  name="Midoriya Izuku"
                    timePost={15} 
                    project="Projeto Novo! Criei uma Landing Page usando HTML e CSS" 
                    like={50} 
                    dislike={0}
                    photo="https://miro.medium.com/max/720/1*Hc29OtYwzC5N8CcBRs8VRw.webp"
                    projectImage="https://assets.startbootstrap.com/img/screenshots/themes/creative.medium.webp"
                    projectDetails="Projeto feito de HTML e CSS no Bootcamp Dio Orange Tech"
                />

            <Card   name="Todoroki Shouto"
                    timePost={6} 
                    project="Projeto ecommerce. usando REACT e consumo de API" 
                    like={100} 
                    dislike={0}
                    photo="https://i.pinimg.com/564x/6d/3d/fe/6d3dfe62f76ed3d9f935bf8d950291b3.jpg"
                    projectImage="https://www.templateshub.net/uploads/1537207366electrothumb.jpg"
                    projectDetails="Projeto foi desenvolvido em um bootcamp da Dio em parceria com redes de ecommerce"
                />
            <Card   name="Bakugou Katsuki"
                    timePost={8} 
                    project="Tela de Usuario" 
                    like={1500} 
                    dislike={0}
                    photo="https://img.quizur.com/f/img63718c81578657.54652626.jpg?lastEdited=1668385932"
                    projectImage="https://www.sliderrevolution.com/wp-content/uploads/2021/04/featured11.jpg"
                    projectDetails="Fiz com HTML, CSS. Quem não curtir vai levar porrada!!!"
                />

<Card   name="Mineta Minoru"
                    timePost={40} 
                    project="Tela de validação de idade" 
                    like={0} 
                    dislike={200}
                    photo="http://pm1.narvii.com/7659/4fab7bb97abd9d2c4f6abd159cfa008aab7138e0r1-736-735v2_uhq.jpg"
                    projectImage="https://elfsight.com/wp-content/uploads/2019/10/age-verification-18-only-hero.png"
                    projectDetails="Projeto em HTML e CSS, formulário de validação de idade para entrar em sites proibidos😏😏😏"
                />


            </Column>
            <Column flex={1}>
                
            <TitleHighlight>RANKING TOP 5 DA SEMANA</TitleHighlight>
            <UserInfo percentual={95} name="Uraraka Ochako" image="https://i.pinimg.com/originals/8d/3c/07/8d3c073580629008faea33ff607bd20f.jpg" />
            <UserInfo percentual={70} name="Midoriya Izuku" image="https://miro.medium.com/max/720/1*Hc29OtYwzC5N8CcBRs8VRw.webp" />
            <UserInfo percentual={68} name="Todoroki Shouto" image="https://i.pinimg.com/564x/6d/3d/fe/6d3dfe62f76ed3d9f935bf8d950291b3.jpg" />
            <UserInfo percentual={60} name="Bakugou Katsuki" image="https://img.quizur.com/f/img63718c81578657.54652626.jpg?lastEdited=1668385932" />
            <UserInfo percentual={40} name="Mineta Minoru" image="http://pm1.narvii.com/7659/4fab7bb97abd9d2c4f6abd159cfa008aab7138e0r1-736-735v2_uhq.jpg" />

            </Column>
        </Container>
    </>

)};

export {Feed}

            




