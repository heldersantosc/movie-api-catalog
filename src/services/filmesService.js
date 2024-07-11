const axios = require("axios");
const Filme = require("../models/filme");

const tmdbApiKey = process.env.TMDB_API_KEY;
const tmdbApiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbApiKey}&language=pt-BR`;

async function listarFilmesPopulares() {
  const response = await axios.get(tmdbApiUrl);
  return response.data.results;
}

async function salvarFilme(filmeData) {
  const novoFilme = new Filme(filmeData);
  return await novoFilme.save();
}

async function deletarFilme(id) {
  await Filme.findOneAndDelete({ id: id });
}

async function listarFilmesFavoritos() {
  return await Filme.find({});
}

async function substituirFilme(id, novoFilme) {
  return await Filme.findOneAndReplace({ id: id }, novoFilme, {
    includeResultMetadata: true,
    returnDocument: "before",
    new: true,
  });
}

async function atualizarFilme(id, updateData) {
  return await Filme.findOneAndUpdate({ id: id }, updateData, {
    includeResultMetadata: true,
    new: true,
  });
}

module.exports = {
  listarFilmesPopulares,
  salvarFilme,
  deletarFilme,
  listarFilmesFavoritos,
  atualizarFilme,
  substituirFilme,
};
