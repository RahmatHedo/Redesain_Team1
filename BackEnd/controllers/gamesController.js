const db = require('../database');
const { getAllGamesQuery, getGameByIdQuery, countGamesByRatingQuery } = require('../queries/games');

// Custom response yang mencakup format total_items untuk GET ALL
const responseWithTotalItems = (res, statusCode, message, totalItems, data) => {
    return res.status(statusCode).json({
        status: statusCode >= 200 && statusCode < 300 ? 'success' : 'fail',
        message: message,
        total_items: totalItems,
        data: data
    });
};

// Response standar
const response = (res, statusCode, message, data = null) => {
    const resData = {
        status: statusCode >= 200 && statusCode < 300 ? 'success' : 'fail',
        message: message,
    };
    if (data) {
        resData.data = data;
    }
    return res.status(statusCode).json(resData);
};


const getAllGames = async (req, res) => {
  try {
    const { rows } = await db.query(getAllGamesQuery);
    return responseWithTotalItems(res, 200, "Daftar gim berhasil diambil", rows.length, rows);
  } catch (err) {
    console.error(err);
    return response(res, 500, "Terjadi kesalahan pada server saat mengambil daftar gim");
  }
};

const getGameById = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query(getGameByIdQuery, [id]);
    
    if (rows.length === 0) {
      return response(res, 404, `Data gim dengan ID ${id} tidak ditemukan`);
    }

    return response(res, 200, "Detail gim berhasil ditemukan", rows[0]);
  } catch (err) {
    console.error(err);
    return response(res, 500, "Terjadi kesalahan pada server saat mengambil detail gim");
  }
};

const getGamesSummaryByRating = async (req, res) => {
  try {
    const { rows } = await db.query(countGamesByRatingQuery);
    
    // PostgreSQL count mengembalikan string (bigint), kita ubah menjadi integer agar sesuai format JSON
    const formattedRows = rows.map(row => ({
      rating_age: row.rating_age,
      total_games: parseInt(row.total_games, 10)
    }));

    return response(res, 200, "Rekapitulasi jumlah gim berdasarkan rating berhasil diambil", formattedRows);
  } catch (err) {
    console.error(err);
    return response(res, 500, "Terjadi kesalahan pada server saat mengambil rekapitulasi rating");
  }
};

module.exports = {
  getAllGames,
  getGameById,
  getGamesSummaryByRating
};
