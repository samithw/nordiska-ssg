import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { PageShell } from './PageShell'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
// import logoUrl from './logo.svg'
import type { PageContextServer } from './types'

export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname']

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'Nordiska Solutions - We bridge two continents to bring you world-class service'
  const desc = (documentProps && documentProps.description) || 'Nordiska Solutions is a finnish-malaysian company which has developed a cluster business concept with some leading environmental companies in europe and asia specialised in water, wastewater and solid waste management technologies and solutions'
  const documentHtml = escapeInject`<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>${title}</title>

      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="${desc}" />

      <meta property="og:title" content="${title}" />
      <meta property="og:description" content="${desc}" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.nordiskasolutions.com${pageContext.urlPathname}" />
      <meta property="og:image" content="https://www.nordiskasolutions.com/images/nordiska__solutions__preview.jpg" />
      <meta property="og:image:type" content="image/jpeg">

      <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
      <link rel="icon" href="/images/favicon.ico" type="image/x-icon">

      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Zen+Dots&family=Zen+Loop&family=Zen+Maru+Gothic:wght@300;400&display=swap" rel="stylesheet">
      </head>
      <body class="bg-black tracking-wide min-w-[320px]">
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  }
}
