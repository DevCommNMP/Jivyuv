const PageMeta = require('../../modal/pageMetaSchema/pageMetaSchema');
  // adjust path if needed
const slugify = require('slugify');


exports.createPageMeta = async (req, res) => {
    try {
      // Generate slug from page field
      const pageSlug = slugify(req?.body?.page, { lower: true, strict: true });
  
      // Check if a meta with the same pageSlug already exists
      const existingMeta = await PageMeta.findOne({ pageSlug: pageSlug });
      if (existingMeta) {
        return res.status(400).json({ message: `Page meta for "${pageSlug}" already exists.` });
      }
  
      // Set the generated slug
      req.body.pageSlug = pageSlug;
  
      // Create and save new PageMeta
      const pageMeta = new PageMeta(req.body);
      await pageMeta.save();
  
      res.status(201).json({
        message: "Page Meta created successfully.",
        data: pageMeta
      });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  

// Get all page metas
exports.getAllPageMetas = async (req, res) => {
  try {
    const metas = await PageMeta.find();
    res.json(metas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific page meta by ID
exports.getPageMetaById = async (req, res) => {
  try {
    const meta = await PageMeta.findById(req.params.id);
    if (!meta) return res.status(404).json({ message: "Page meta not found" });
    res.json(meta);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update page meta by ID
exports.updatePageMeta = async (req, res) => {
  try {
    const meta = await PageMeta.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!meta) return res.status(404).json({ message: "Page meta not found" });
    res.json(meta);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete page meta by ID
exports.deletePageMeta = async (req, res) => {
  try {
    const meta = await PageMeta.findByIdAndDelete(req.params.id);
    if (!meta) return res.status(404).json({ message: "Page meta not found" });
    res.json({ message: "Page meta deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
