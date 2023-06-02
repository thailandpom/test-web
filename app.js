const express = require('express')
const next = require('next')
const app = next({ dev: !!!process.env.NODE_ENV })
const handle = app.getRequestHandler()
const port = process.env.PORT ||  4000 ;
const mode = process.env.NODE_ENV || 'development'

app.prepare().then(() => {
  const server = express()
  
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port} (${mode})`)
  })
})
///