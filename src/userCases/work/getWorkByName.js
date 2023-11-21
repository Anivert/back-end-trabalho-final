// nas linhas de baixo que é *GET* vai pegar  o trabalho pelo nome
function getWorkByName(req, res) {
  try {
    res.send({ name: "####" });
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

module.exports = getWorkByName;
