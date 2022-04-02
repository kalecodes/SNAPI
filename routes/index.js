const router = require('express').Router();

// import all API routes from /api/index.js
const apiRoutes = require('./api')

// add prefix 'api' to all api routes imported from 'api' directory
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).json({ message: '404 Error'})
});

module.exports = router;