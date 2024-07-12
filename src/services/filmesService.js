const axios = require("axios");
const { Filme } = require("../models/filmeModel");

const tmdbApiKey = process.env.TMDB_API_KEY;
const tmdbApiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbApiKey}&language=pt-BR`;

async function listarFilmesPopulares() {
  const response = await axios.get(tmdbApiUrl);
  return response.data.results;
}

async function salvarFilme(filmeData) {
  return await Filme.create(filmeData);
}

async function deletarFilme(id) {
  await Filme.destroy({ where: { id } });
}

async function listarFilmesFavoritos() {
  return await Filme.findAll();
}

async function substituirFilme(id, novoFilme) {
  const [_, [filmeAtualizado]] = await Filme.update(novoFilme, {
    where: { id },
    returning: true,
  });
  return filmeAtualizado;
}

async function atualizarFilme(id, updateData) {
  const [_, [filmeAtualizado]] = await Filme.update(updateData, {
    where: { id },
    returning: true,
  });
  return filmeAtualizado;
}

module.exports = {
  listarFilmesPopulares,
  salvarFilme,
  deletarFilme,
  listarFilmesFavoritos,
  atualizarFilme,
  substituirFilme,
};
