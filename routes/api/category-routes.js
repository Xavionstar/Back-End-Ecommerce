const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categories = await Category.findAll({
    include: Product
  });
  res.send(categories)
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const catById = await Category.findOne({
    include: Product,
    where: {
      id: req.params.id
    }
  })
  res.send(catById)
});

router.post('/', async (req, res) => {
  // create a new category
  const createCat = await Category.create({ category_name: req.body.category_name })
  res.send(createCat)
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const updateCat = await Category.update({ category_name: req.body.category_name },
    {
      where: { id: req.params.id }
    })

  res.send(updateCat)
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
   await Category.destroy({
    where: {
      id: req.params.id
    }
  })

  res.sendStatus(200)
});

module.exports = router;
