import React from 'react'

import i18next from 'i18next'
import { withTranslation } from 'react-i18next'

import Container from 'react-bulma-components/lib/components/container'
import Content from 'react-bulma-components/lib/components/content'
import Dropdown from 'react-bulma-components/lib/components/dropdown'
import Footer from 'react-bulma-components/lib/components/footer'
import Heading from 'react-bulma-components/lib/components/heading'
import Navbar from 'react-bulma-components/lib/components/navbar'
import Section from 'react-bulma-components/lib/components/section'

const Layout = (props) => {
  const changeLanguage = (lang) => {
    i18next.changeLanguage(lang)
  }
  return (
    <div>
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item>
            <img src="img/icon.png" height="28" />
            <span>Quick Drive</span>
          </Navbar.Item>
        </Navbar.Brand>
        <Navbar.Menu active="true">
          <Navbar.Container>
            <Navbar.Item href="./?page=home">{ i18next.t('home.title') }</Navbar.Item>
            <Navbar.Item href="./?page=privacy">{ i18next.t('privacy.title') }</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>

      <Section>

        <Container>
          <Heading>{ props.title }</Heading>

          { props.children }
        </Container>

      </Section>

      <Footer>
        <Container>
          <Content style={{ textAlign: 'center' }}>
            <p>
              <strong>Quick Drive</strong> by <a href="https://tearoom6.github.io/">tearoom6</a>. All rights reserved.
            </p>
          </Content>
          <Dropdown value={ i18next.language } onChange={ changeLanguage }>
            <Dropdown.Item value="en">English</Dropdown.Item>
            <Dropdown.Item value="ja">日本語</Dropdown.Item>
          </Dropdown>
        </Container>
      </Footer>
    </div>
  )
}

export default withTranslation()(Layout)
