// Ambil semua game beserta content descriptors (id & name)
const getAllGamesQuery = `
  SELECT 
    g.id, 
    g.title, 
    g.icon, 
    g.release_year, 
    g.rating_age, 
    g.genres,
    COALESCE(
      (
        SELECT json_agg(json_build_object('id', cd.id, 'name', cd.name))
        FROM game_descriptors gd
        JOIN content_descriptors cd ON gd.descriptor_id = cd.id
        WHERE gd.game_id = g.id
      ), 
      '[]'::json
    ) as content_descriptors
  FROM games g
  ORDER BY g.id ASC
`;

// Ambil detail game berdasarkan ID (memanggil thumbnail, screenshots, dan content_descriptors dengan deskripsinya)
const getGameByIdQuery = `
  SELECT 
    g.id, 
    g.title, 
    g.icon, 
    g.thumbnail, 
    g.release_year, 
    g.rating_age, 
    g.genres, 
    g.platforms, 
    g.publisher, 
    g.developer, 
    g.description, 
    g.screenshots, 
    g.created_at, 
    g.updated_at,
    COALESCE(
      (
        SELECT json_agg(json_build_object(
          'id', cd.id, 
          'name', cd.name, 
          'description', cd.description
        ))
        FROM game_descriptors gd
        JOIN content_descriptors cd ON gd.descriptor_id = cd.id
        WHERE gd.game_id = g.id
      ), 
      '[]'::json
    ) as content_descriptors
  FROM games g
  WHERE g.id = $1
`;

// Hitung total game berdasarkan rating (rekap rating)
const countGamesByRatingQuery = `
  SELECT rating_age, COUNT(*) as total_games
  FROM games
  GROUP BY rating_age
  ORDER BY rating_age ASC
`;

module.exports = {
  getAllGamesQuery,
  getGameByIdQuery,
  countGamesByRatingQuery,
};
