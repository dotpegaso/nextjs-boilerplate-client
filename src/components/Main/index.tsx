import React from 'react'
import * as S from './styles'

const Main = ({
  title = 'React avançado',
  description = 'TypeScript, React, NextJS & Styled Components',
}) => (
  <S.Container>
    <S.Logo
      src="/img/logo.svg"
      alt="imagem de um átomo e react avançado escrito ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="imagem de um desenvolvedor de frente para uma tela com código"
    />
  </S.Container>
)

export default Main
