// nas linhas de baixo que é *POST* vai cadastrar  o usuario
function creatUser(req, res) {
  try {
    res.send({ message: "Usuario cadastrado com sucesso" });
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

module.exports = creatUser;
