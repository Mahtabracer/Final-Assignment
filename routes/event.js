const authMiddleware = require('../middleware/auth');
router.post('/create', authMiddleware, async (req, res) => {
  // req.user.id contains the authenticated user ID
});
