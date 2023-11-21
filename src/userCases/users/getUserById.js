//essa function pegou todos usuarios peo id
function getUserById(req, res) {
  try {
    res.send({
      id: req.params.id,
      name: "Anivert",
      Lastname: "Sylvestre",
      Email: "samy@samy.com",
      Andereco: "Curitiba-parana",
      Cel: "5541######",
    });
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

module.exports = getUserById;
