// BOILERPLATE (Unit 14, Activity 24) / DONE

const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

module.exports = router;
