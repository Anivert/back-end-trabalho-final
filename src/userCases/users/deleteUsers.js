//na linha de baixo que é *DELETAR* vai deletar  o usuario
function deleteUser(req, res) {
  try {
    res.status(200);
    res.send({
      message: "Usuario deletado com sucesso",
      idDeletado: req.params.id,
    });
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

module.exports = deleteUser;
