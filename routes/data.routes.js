const { Router } = require('express')
const router = Router()

router.post('/getData', async (req, res) => {
  const { id } = req.body
  try {
    const data = await [
      { id: 1, value: 'React' },
      { id: 2, value: 'Angular' },
      { id: 3, value: 'Vue' },
    ]
    res.status(201).json(id !== null ? data.filter((x) => x.id === id) : data)
  } catch (error) {
    res.status(500).json({ message: 'Something wrong' })
  }
})

module.exports = router
