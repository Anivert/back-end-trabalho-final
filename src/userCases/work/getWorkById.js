//// nas linhas de baixo que é *GETE* vai pegar  o trabalho peo id
function getWorkById(Idreq, res) {
  try {
    res.send({ message: " Id: 1234" });
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

module.exports = getWorkById;
