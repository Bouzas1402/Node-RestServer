const { response } = require("express");

const usuariosGet = (req, res = response) => {
  const { q = "54tY", hola = "hola", xq = 34 } = req.query;
  res.json({
    msg: "get API - controler",
    q,
    hola,
    xq,
  });
};

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: "post API - controler",
    nombre,
    edad,
  });
};

const usuariosPut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "put API - controler",
    id,
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "patch API - controler",
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "datele API - controler",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
