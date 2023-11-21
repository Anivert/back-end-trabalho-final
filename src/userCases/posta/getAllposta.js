//essa function pegou todas postas
function getAllPostas(req, res) {
  try {
    res.send([{ posta1: "tarefa1" }, { posta2: "tarefa2" }]);
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

module.exports = getAllPostas;
