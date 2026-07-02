const getAllBlogsQuery = `
  SELECT 
    id, 
    title, 
    banner_image,
    category,
    content, 
    tags, 
    published_at,
    created_at,
    updated_at
  FROM blogs
  ORDER BY published_at DESC
`;

const getBlogByIdQuery = `
  SELECT 
    id, 
    title, 
    banner_image,
    category,
    content, 
    tags, 
    published_at,
    created_at,
    updated_at
  FROM blogs
  WHERE id = $1
`;

module.exports = {
  getAllBlogsQuery,
  getBlogByIdQuery,
};
