import React from "react";
import { Button } from "../button";
import Logo from "../../../src/assets/logo-dio.png"
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper

} from "./styles"
import { IHeader } from "./types";

const Header = ({ autenticado }: IHeader) => {
    return (
        <Wrapper>
            <Container>
                <Row>

                    <img src={Logo} alt="logo da Dio" />

                    {autenticado ? (

                        <>
                            <BuscarInputContainer>
                            <Input placeholder="Buscar..." />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>

                    ) : null}



                </Row>
                <Row>

                    {autenticado ? (
                        <UserPicture src='https://miro.medium.com/max/720/1*Hc29OtYwzC5N8CcBRs8VRw.webp' />
                        
                    ) : (
                        <>
                            <MenuRight href="$">Home</MenuRight>
                            <Button title="Entrar" />
                            <Button title="Cadastrar" />

                        </>
                    )}



                </Row>
            </Container>
        </Wrapper >
    );
};












export { Header }