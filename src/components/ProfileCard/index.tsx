import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import { Author } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

const icons = {
  Twitter: <FaTwitter />,
  Github: <GrGithub />,
  Dribbble: <FaDribbble />
}

const ProfileCard = ({
  photo,
  name,
  role,
  socialLinks,
  description
}: Author) => (
  <S.Card key={name}>
    <S.Image
      src={getImageUrl(photo.url)}
      loading="lazy"
      alt={photo.alternativeText}
    />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.socialMedia}>
          <a href={item.url} title={item.socialMedia}>
            {icons[item.socialMedia]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
