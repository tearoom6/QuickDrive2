import React from 'react'
import { withTranslation } from 'react-i18next'

import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'

import Layout from './Layout'

const Privacy = ({ t }) => (
  <Layout title={ t('privacy.title') }>

    <Container>
      <Heading>
        { t('privacy.caption-01') }
      </Heading>
      <div style={{ 'whiteSpace': 'pre-wrap' }}>
        { t('privacy.content-01') }
      </div>
    </Container>

    <Container>
      <Heading>
        { t('privacy.caption-02') }
      </Heading>
      <div style={{ 'whiteSpace': 'pre-wrap' }}>
        { t('privacy.content-02') }
      </div>
    </Container>

    <Container>
      <Heading>
        { t('privacy.caption-03') }
      </Heading>
      <div style={{ 'whiteSpace': 'pre-wrap' }}>
        { t('privacy.content-03') }
      </div>
    </Container>

    <Container>
      <Heading>
        { t('privacy.caption-04') }
      </Heading>
      <div style={{ 'whiteSpace': 'pre-wrap' }}>
        { t('privacy.content-04') }
      </div>
    </Container>

    <Container>
      <Heading>
        { t('privacy.caption-05') }
      </Heading>
      <div style={{ 'whiteSpace': 'pre-wrap' }}>
        { t('privacy.content-05') }
      </div>
    </Container>

    <Container>
      <Heading>
        { t('privacy.caption-06') }
      </Heading>
      <div style={{ 'whiteSpace': 'pre-wrap' }}>
        { t('privacy.content-06') }
      </div>
    </Container>

    <Container>
      <Heading>
        { t('privacy.caption-07') }
      </Heading>
      <div style={{ 'whiteSpace': 'pre-wrap' }}>
        { t('privacy.content-07') }
      </div>
    </Container>

  </Layout>
)

export default withTranslation()(Privacy)
