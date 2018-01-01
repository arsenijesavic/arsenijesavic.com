import React from "react"

const Html = ({
  headComponents,
  body,
  postBodyComponents
}) =>
  <html lang="en">
    <head>
      <meta name="referrer" content="origin" />
      <meta charSet="utf-8" />
      <meta name="description" content="web is my canvas" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Arsenije Savić</title>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Space+Mono" rel="stylesheet" />
      <link rel="stylesheet" type="text/css" href="styles.css"/>
      {headComponents}
    </head>
    <body>
      <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}
    </body>
  </html>


export default Html