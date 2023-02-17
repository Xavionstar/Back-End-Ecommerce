const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const allTag = await Tag.findAll({
    include: Product,
  })
  res.send(allTag)
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tagById = await Tag.findOne({
    include: Product,
    where: {
      id: req.params.id
    }
  })
  res.send(tagById)
});

router.post('/', async (req, res) => {
  // create a new tag
  const createTag = await Tag.create({ tagIds: req.body.tagIds })
  res.send(createTag)
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const updatedTags = await Tag.update({ tagIds: req.body.tagIds },
    {
      where: { id: req.params.id }
    })

  res.send(updatedTags)
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
   await Tag.destroy({
    where: {
      id: req.params.id
    }
  })

  res.sendStatus(200)
});

module.exports = router;
