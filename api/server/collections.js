const express = require('express');
const sModels = require('./../models/sequelize');
const mModels = require('./../models/mongoose');
const Study = sModels.Study;
const StudyOverflow = mModels.StudyOverflow;
const Collection = mModels.Collection;
const User = mModels.User;
const Category = mModels.Category;
let router = express.Router();

//get collection by id
router.get('/id/:id', function(req, res, next) {
  Collection.findById(req.params.id)
    .then(result => {
      console.log('result => ', result);
      res.json(result);
    })
    .catch(e => res.status(500).send(e.stack));
});

//get a number of collections by ids as query
router.get('/ids', async (req, res, next) => {
  let results = [];
  let query = req.query.collections;
  let queryParams = {
    where: {
      id: {
        [Op.or]: [],
      },
    },
  };
  if (query[0] == '_') {
    query = query.substring(1);
  }
  let idArray = query.split('_');
  idArray.forEach(id => {
    queryParams.where.id[Op.or].push(id);
  });
  let rawStudies;
  try {
    rawStudies = await Collection.find(queryParams);
  } catch (e) {
    res.status(500).send(e.stack);
  }
  if (rawStudies.length) {
    rawStudies.map(collection => {
      results.push(collection.studies);
    });
  }

  res.send(JSON.stringify(results));
});
router.post('/new', async (req, res, next) => {
  let body = req.body;
  console.log(body.category[0]);
  // currentCollection.studies.forEach(
  //   (study, index) => {
  //     console.log(currentCollection.studies[index])
  //     console.log(currentCollection.studies[index].id)
  //     currentCollection.studies[index] = currentCollection.studies[index].id
  //   }
  // );
  let currentUser;
  let currentCategory;
  try {
    for (let i = 0; i < body.category.length; i++) {
      currentCategory = await Category.findOne({
        name: new RegExp(`^${body.category[i]}$`, 'i'),
      });
      if (!currentCategory) {
        currentCategory = new Category({
          name: body.category[i],
        });
        await currentCategory.save();
        currentCategory = await Category.findOne({name: currentCategory.name});
      }
      body.category[i] = currentCategory._id;
    }
    let currentCollection = new Collection(body);
    await currentCollection.save();
    currentCollection = await Collection.findOne({
      $and: [{name: body.name}, {ownerId: body.ownerId}],
    });
    let currentUser = await User.findById(body.ownerId);
    currentUser.analyses.push(currentCollection._id);
    currentCollection.hist.push({
      histId: currentCollection._id,
      time: new Date(),
    });
    await Collection.findByIdAndUpdate(
      currentCollection._id,
      currentCollection,
    );
    await User.findByIdAndUpdate(currentUser._id, currentUser);
    res.send(JSON.stringify(currentCollection));
  } catch (e) {
    console.error(e);
    res.status(500).send(e.stack);
  }
});
module.exports = router;
