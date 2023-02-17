const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const allTag = await Category.findall({
    include: Product,
  })
  res.send(allTag)
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tagById = await Category.findOne({
    include: Product,
    where: {
      id: req.params.id
    }
  })
  res.send(tagById)
});

router.post('/', async (req, res) => {
  // create a new tag
  const createTag = await Category.create({ category_name: req.body.category_name })
  res.send(createTag)
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const updatedTags = await Category.update({ category_name: req.body.category_name },
    {
      where: { id: req.params.id }
    })

  res.send(updatedTags)
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
   await Category.destroy({
    where: {
      id: req.params.id
    }
  })

  res.sendStatus(200)
});

module.exports = router;
