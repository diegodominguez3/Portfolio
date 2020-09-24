import React from 'react'

export default ({ title = 'about', text = '', resumeFile}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
      <h4 style={{marginBottom: '10px'}}>Check my resume:</h4>
      <a href={resumeFile} target='_blank'>Resume</a>
    </div>
  )
}
