import React from 'react'
import { withTranslation } from 'react-i18next'

import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'

import Layout from './Layout'

const License = ({ t }) => (
  <Layout title={ t('home.title') }>

    <Container>
      <Heading>
        { t('home.about') }
      </Heading>
      <div style={{ 'whiteSpace': 'pre-wrap' }}>
        { t('home.description') }
      </div>
      <div style={{ 'whiteSpace': 'pre-wrap' }}>
        <a href="https://github.com/tearoom6/QuickDrive2">https://github.com/tearoom6/QuickDrive2</a>
      </div>
      <div style={{ 'whiteSpace': 'pre-wrap' }}>
        <img src="img/screenshot.png" width="600" />
      </div>
    </Container>

    <Container>
      <Heading>
        { t('home.functions') }
      </Heading>
      <div style={{ 'whiteSpace': 'pre-wrap' }}>
        <ul>
          <li>{ t('home.function-01') }</li>
          <li>{ t('home.function-02') }</li>
          <li>{ t('home.function-03') }</li>
          <li>{ t('home.function-04') }</li>
          <li>{ t('home.function-05') }</li>
        </ul>  
      </div>
    </Container>

  </Layout>
)

export default withTranslation()(License)
