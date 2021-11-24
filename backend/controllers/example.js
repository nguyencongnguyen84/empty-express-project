


exports.getExample = (req, res, next) => {
  
  res.status(200).json({ id: req.params.id });
  
}
