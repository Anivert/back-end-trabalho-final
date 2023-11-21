//essa function pegou todas postas pelo name
function getPostaByName(req, res) {
  try {
    res.send([{ name: "homework #1" }, { name: "homework #2" }]);
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

module.exports = getPostaByName;
