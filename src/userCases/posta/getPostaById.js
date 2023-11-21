//essa function pegou todas postas pelo id
function getPostaById(req, res) {
  try {
    res.send({
      id: req.params.id,
      name: "homework #1",
    });
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

module.exports = getPostaById;
