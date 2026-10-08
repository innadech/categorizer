// function saveCategory(category) {
//   const srtringifiedCategory = JSON.stringify(category)
//   localStorage.setItem('category', srtringifiedCategory)
// }

// function restoreCategory() {
//   const categoryJson = localStorage.getItem('category')
//   const category = JSON.parse(categoryJson)
//   if (category) return category
//   return { id: 0, name: '', items: [] }
// }

function saveCategories(categories) {
  const stringifiedCategories = JSON.stringify(categories)
  localStorage.setItem('categories', stringifiedCategories)
}

function restoreCategories() {
  const categoriesJson = localStorage.getItem('categories')
  const categories = JSON.parse(categoriesJson)
  if (categories) return categories
  return []
}
