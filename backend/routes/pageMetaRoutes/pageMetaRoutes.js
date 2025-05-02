const express = require('express');
const router = express.Router();
const pageMetaController = require('../../controllers/pageMetaControllers/pageMetaControllers');
const { isAuthenticatedAdmin, isAuthenticatedSuperAdmin } = require('../../middleware/isAutheticated');

// Create new page meta
router.post('/createPageMeta',isAuthenticatedAdmin, pageMetaController.createPageMeta);

// Get all page metas
router.get('/getAllPagemeta', pageMetaController.getAllPageMetas);

// Get page meta by ID
router.get('/:id', pageMetaController.getPageMetaById);

// Update page meta by ID
router.put('/:id', pageMetaController.updatePageMeta);

// Delete page meta by ID
router.delete('/:id', pageMetaController.deletePageMeta);

module.exports = router;
