import * as React from 'react'

import Footer from './footer'
import Header from './header'

const Layout: React.FC = ({ children }) => (
  <div className="flex flex-col justify-between min-h-screen">
    <Header />
    <main className="flex-grow" children={children} />
    <Footer />
  </div>
)

export default Layout
