//essa function pegou todos usuarios
function getAllUser(req, res) {
  try {
    res.send([{ name: "Anivert" }, { Lastname: "Sylvestre" }]);
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

module.exports = getAllUser;
