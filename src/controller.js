export default (/* { config, metrics, mongodb, refdata } */) => ({
  read(req, res) {
    res.status(200);
    return res.json({ test: 'data' });
  },

  create(req, res) {
    res.status(200);
    return res.json({ test: 'data' });
  },
});
