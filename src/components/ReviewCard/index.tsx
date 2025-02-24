import React, { useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { Review } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

const ReviewCard: React.FC<Review> = ({ name, photo, description }) => {
  useEffect(() => {
    const texts = document.querySelectorAll('p.description')

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList[
          entry.target.scrollHeight > entry.contentRect.height + 25
            ? 'add'
            : 'remove'
        ]('truncated')
      }
    })

    texts.forEach((text) => observer.observe(text))
  })

  return (
    <S.Card>
      <S.User>
        <S.Image src={getImageUrl(photo.url)} loading="lazy" alt={name} />
        <S.Name>{name}</S.Name>
      </S.User>
      <S.Text>
        <input type="checkbox" id={`review-${name}`} />
        <p className="description">{description}</p>
        <label className="label-more" htmlFor={`review-${name}`}>
          Ver tudo
        </label>
      </S.Text>
    </S.Card>
  )
}

export default ReviewCard
