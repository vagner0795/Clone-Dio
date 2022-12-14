import React from 'react'
import {
    Container,
    NameText,
    Progress,
    UsePicture
} from './styles'
import { IUserInfo } from './types'

const  UserInfo = ({name, image, percentual}: IUserInfo) => {
  return (
    <Container>
        <UsePicture src={image} />
        <div>
            <NameText>{name}</NameText>
            <Progress percentual={percentual} />
        </div>


    </Container>
  )
}

export{ UserInfo }
    
