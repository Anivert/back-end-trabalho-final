function updatePost(req, res) {
  try {
    res.send({ message: "Post foi atulizado com sucesso" });
  } catch (error) {
    res.status(400);
    res.send({ message: " erro no banco de ddo" });
  }
}

module.exports = updatePost;
