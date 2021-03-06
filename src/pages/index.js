import { Box } from "rebass"
import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"

const GradientText = styled.span`
  background: linear-gradient(
    240deg,
    rgb(0, 217, 255),
    rgb(26, 224, 204),
    rgb(66, 213, 235),
    rgb(94, 149, 217)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`

const IndexPage = () => (
  <Layout>
    <Box fontSize="4.5rem" fontWeight={500}>
      Hello world,
      <br />
      <GradientText>I'm Tung.</GradientText>
    </Box>
    <Box m="40px 0" fontSize="1.75rem">
      const info = &#123;
      <Box ml={40} color="grey">
        do: 'Frontend developer',
        <br />
        using: ['Javascript', 'React', 'Node.js'],
        <br />
        interests: ['UI/UX', 'Drawing', 'Psychology', ...others],
        <br />
        from: 'Vietnam',
        <br />
        languages: ['Vietnamese', 'English'],
        <br />
      </Box>
      &#125;
    </Box>
  </Layout>
)

export default IndexPage
