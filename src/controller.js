export default (/* { config, metrics, mongodb, refdata } */) => ({
  read(req, res) {
    res.status(200);
    return res.json({ todos: [] });
  },

  // input: {"value": "Buy shopping"}
  // output: {id: 1, "value": "Buy shopping", status: 200, error }

  create(req, res) {
    res.status(200);
    console.log(req.body);
    return res.json({ test: 'data' });
  },
});
