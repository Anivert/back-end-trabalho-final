// nas linhas de baixo que é *POST* vai cadastrar  o post
function creatPost(req, res) {
  try {
    res.send({ message: "Post cadastrado com sucesso" });
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de dado" });
  }
}

module.exports = creatPost;
