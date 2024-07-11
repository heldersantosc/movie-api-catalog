const filmesService = require("../services/filmesService");

async function listarFilmes(req, res) {
  try {
    const filmes = await filmesService.listarFilmesPopulares();
    res.json(filmes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function salvarFilme(req, res) {
  try {
    const filmeSalvo = await filmesService.salvarFilme(req.body);
    res.status(201).json(filmeSalvo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deletarFilme(req, res) {
  try {
    const { id } = req.params;
    await filmesService.deletarFilme(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function listarFilmesFavoritos(req, res) {
  try {
    const result = await filmesService.listarFilmesFavoritos();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function substituirFilme(req, res) {
  try {
    const { id } = req.params;
    const novoFilme = req.body;
    const result = await filmesService.substituirFilme(id, novoFilme);
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function atualizarFilme(req, res) {
  try {
    const { id } = req.params;
    const { comments } = req.body;
    const result = await filmesService.atualizarFilme(id, { comments });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  listarFilmes,
  salvarFilme,
  deletarFilme,
  listarFilmesFavoritos,
  atualizarFilme,
  substituirFilme,
};
