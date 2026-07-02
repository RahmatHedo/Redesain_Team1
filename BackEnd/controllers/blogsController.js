const db = require('../database');
const { getAllBlogsQuery, getBlogByIdQuery } = require('../queries/blogs');

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

const getAllBlogs = async (req, res) => {
  try {
    const { rows } = await db.query(getAllBlogsQuery);
    return res.status(200).json({
      status: 'success',
      message: 'Daftar artikel berhasil diambil',
      data: rows
    });
  } catch (err) {
    console.error(err);
    return response(res, 500, "Terjadi kesalahan pada server saat mengambil daftar artikel");
  }
};

const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query(getBlogByIdQuery, [id]);
    
    if (rows.length === 0) {
      return response(res, 404, `Data artikel dengan ID ${id} tidak ditemukan`);
    }

    return response(res, 200, "Detail artikel berhasil ditemukan", rows[0]);
  } catch (err) {
    console.error(err);
    return response(res, 500, "Terjadi kesalahan pada server saat mengambil detail artikel");
  }
};

module.exports = {
  getAllBlogs,
  getBlogById
};
