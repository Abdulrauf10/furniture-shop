const { product } = require('../models')

module.exports={
  getAllProducts: async (req, res) => {
    try {
      const getAllData = await product.findAll()

      res.status(200).json(getAllData)
    } catch (error) {
      res.status(500).json(error)
    }
  },

  getProductById: async (req, res) => {
    try {
      const { id } = req.params
      const getDataById = await pool.query('SELECT * FROM product WHERE id = $1', [ id ])

      res.status(201).json(getDataById.rows[0])
    } catch (error) {
      res.status(500).json(error)
    }
  }
}