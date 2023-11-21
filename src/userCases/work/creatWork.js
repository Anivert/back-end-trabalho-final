// nas linhas de baixo que é *POST* vai cadastrar  u trabalho
function creatWork(req, res) {
  try {
    res.send({ message: "Trabalho cadastrado com sucesso" });
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

module.exports = creatWork;
