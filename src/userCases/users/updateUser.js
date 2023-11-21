// nas linhas de baixo que é *PUT* vai atualizaar tdo os usuario
function updateUser(req, res) {
  try {
    res.send({ message: "Atulizacão do usuario feito com sucesso !" });
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}
module.exports = updateUser;
