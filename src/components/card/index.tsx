import React from 'react'
 import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi'
 import { ICard } from './types'

import {

    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture

} from './styles'

const Card = ({name,timePost, project, like, dislike, photo, projectImage, projectDetails}: ICard) => {
  return (
    <CardContainer>
        <ImageBackground src={projectImage} />
        <Content>
            <UserInfo>
                <UserPicture src={photo} />
                <div>
                    <h4>{name}</h4>
                    <p>Há {timePost} minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>{project}</h4>
                <p>{projectDetails}  <strong>Saiba Mais...</strong> </p>
            </PostInfo>
            <HasInfo>
                <h4>#cursos #bootcamp #developer</h4>
                <p>
                    <FiThumbsUp />{like} <FiThumbsDown /> {dislike}
                </p>
            </HasInfo>
        </Content>    
    </CardContainer>
  )
}

export{Card}

