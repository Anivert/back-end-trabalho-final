// nas linhas de baixo que é *DELETE* vai deletar  o trabalho
function deleteWork(req, res) {
  try {
    res.send({ message: "Trabalha deleta com sucesso" });
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

module.exports = deleteWork;
