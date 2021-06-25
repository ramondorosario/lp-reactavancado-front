import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import { SectionTechProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

const SectionTech = ({ title, techIcons }: SectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(({ name, icon }) => (
          <S.Icon key={name}>
            <S.Icons src={getImageUrl(icon.url)} alt={name} loading="lazy" />
            <S.IconsName>{name}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
