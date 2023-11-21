function getAllWork(req, res) {
  try {
    res.send({ mensag: "trabalho criado com sucesso" });
  } catch (error) {
    res.status(400);
    res.send({ mensage: "erro no bano de dado" });
  }
}

module.exports = getAllWork;
