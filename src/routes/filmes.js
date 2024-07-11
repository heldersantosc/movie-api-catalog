const express = require("express");
const router = express.Router();
const filmesController = require("../controllers/filmesController");

/**
 * @swagger
 * /filmes:
 *   get:
 *     summary: Retorna uma lista de filmes populares do TMDB.
 *     responses:
 *       200:
 *         description: Lista de filmes populares.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/", filmesController.listarFilmes);

/**
 * @swagger
 * /filmes:
 *   post:
 *     summary: Salva um novo filme.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Filme salvo com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Erro ao salvar o filme.
 */
router.post("/", filmesController.salvarFilme);

/**
 * @swagger
 * /filmes/{id}:
 *   delete:
 *     summary: Deleta um filme pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do filme a ser deletado.
 *     responses:
 *       204:
 *         description: Filme deletado com sucesso.
 *       500:
 *         description: Erro ao deletar o filme.
 */
router.delete("/:id", filmesController.deletarFilme);

/**
 * @swagger
 * /filmes/favoritos:
 *   get:
 *     summary: Retorna uma lista de filmes favoritos.
 *     responses:
 *       200:
 *         description: Lista de filmes favoritos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Erro ao listar filmes favoritos.
 */
router.get("/favoritos", filmesController.listarFilmesFavoritos);

/**
 * @swagger
 * /filmes/{id}:
 *   put:
 *     summary: Substitui completamente um filme pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do filme a ser substituído.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Filme substituído com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Erro ao substituir o filme.
 */
router.put("/:id", filmesController.substituirFilme);

/**
 * @swagger
 * /filmes/{id}:
 *   patch:
 *     summary: Atualiza parcialmente um filme pelo ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do filme a ser atualizado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comments:
 *                 type: string
 *             example:
 *               comments: Novo comentário sobre o filme.
 *     responses:
 *       200:
 *         description: Filme atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Erro ao atualizar o filme.
 */
router.patch("/:id", filmesController.atualizarFilme);

module.exports = router;
