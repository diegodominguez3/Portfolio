import React from 'react'
import styled from 'styled-components'

export default ({ title = 'about', text = '', resumeFile}) => {

  const ResumeLink = styled.a`
  color: inherit;
  :hover {
    opacity: 0.7;
    text-decoration: underline; 
  }
`
  return (
    <div>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
      <ResumeLink href={resumeFile} target='_blank'><h5>Click to check my resume</h5></ResumeLink>
    </div>
  )
}
