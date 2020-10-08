const express = require('express')

const app = express()

app.use(express.json())

const koders = [
  {
    id: 1,
    name: 'Mauro'
  },
  {
    id: 2,
    name: 'Axel'
  },
  {
    id: 3,
    name: 'Lucho'
  }
]

app.get('/koders', (req, res) => {
  res.json({
    success: true,
    data: {
      koders: koders
    }
  })
})

app.post('/koders', (req, res) => {
  if (req.body.name) {
    const id = koders.length + 1
    const name = req.body.name
    koders.push({ id: id, name: name })
    console.log(koders)
    res.json({
      success: true,
      message: 'Lista de Koders',
      data: {
        koders
      }
    })
  }
})

app.listen(8080, () => {
  console.log('Server is listening in port 8080')
})

/*
Práctica
-Ocupar el json de la petición para agregar un nuevo koder al array koders
-comprobar con get el koder agregado
*/
