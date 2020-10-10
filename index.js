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

app.get('/koders', (_req, res) => {
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
    res.json({
      success: true,
      message: 'Lista de Koders',
      data: {
        koders
      }
    })
  }
})

app.get('/koders/:id', (req, res) => {
  console.log(req.params.id)
  const id = req.params.id
  const koderfound = koders.find((koder) => {
    const isCorrectKoder = koder.id === parseInt(id)
    console.log(isCorrectKoder)
    return isCorrectKoder
  })

  res.json({
    success: true,
    data: {
      koder: koderfound
    }
  })
})

app.patch('/koders/:id', (req, res) => {
  const id = req.params.id
  const koderfound = koders.find((koder) => {
    const isCorrectKoder = koder.id === parseInt(id)
    return isCorrectKoder
  })

  koders.map((koder) => {
    if (koderfound.id === koder.id) {
      const name = req.body.name
      koder.name = name
    }
  })

  res.json({
    success: true,
    message: 'Koder Actualizado',
    data: {
      koder: koderfound
    }
  })
})

app.delete('/koders/:id', (req, res) => {
  const id = req.params.id
  const koderfound = koders.find((koder) => {
    const isCorrectKoder = koder.id === parseInt(id)
    return isCorrectKoder
  })
  const arrayToDelete = koderfound.id-1
  koders.splice(arrayToDelete, 1)

koders.map((koder) => {
  koder.id = koders.indexOf(koder) + 1
})

  res.json({
    success: true,
    message: 'Koder Eliminado',
    data: {
      koders: koders
    }
  })
})

app.listen(8080, () => {
  console.log('Server is listening in port 8080')
})

/*
Práctica
-Ocupar el json de la petición para agregar un nuevo koder al array koders
-comprobar con get el koder agregado

Práctica Terminar el CRUD

Get
POst
Patch
Delete

En la ruta Koders

PATCH /koders/:id
DELETE /koders/:id
*/
