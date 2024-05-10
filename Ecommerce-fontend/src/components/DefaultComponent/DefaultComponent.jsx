import React from 'react'
import HeaderComponent from '../HeaderCompoent/HeaderComponent'
import FooterComponent from '../FooterComponent/FooterComponent'

const DefaultComponent = ({ children }) => {
  return (
    <div>
      <HeaderComponent />
      <main>
        {children}
      </main>
      <FooterComponent />
    </div>
  )
}

export default DefaultComponent