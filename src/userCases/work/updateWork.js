// nas linhas de baixo que é *UPDATE* vai atualizar  o trabalho
function updateWork(req, res) {
  try {
    res.send({ mensag: "trabalho atuliado com sucesso" });
  } catch (error) {
    res.status(400);
    res.send({ mensage: "erro no bano de dado" });
  }
}

module.exports = updateWork;
