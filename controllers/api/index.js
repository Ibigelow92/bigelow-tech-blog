// Boilerplate from mini-project
const router = require('express').Router();
const userRoutes = require('./userRoutes');

// This represents the routes for the blogs the user has posted
const blogpostRoutes = require('./blogpostRoutes');

router.use('/users', userRoutes);
router.use('/blogposts', blogpostRoutes);

module.exports = router;
