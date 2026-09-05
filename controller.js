function renderCategories() {
  let categories = getCategories()
  renderCategoriesListAll(categories) // Передаем весь массив в ваш view
}

// function handleAddCategory(category) {
//   addCategory(category)
//   renderCategories()
// }

function handleDeleteCategory(category) {
  deleteCategory(category)
  renderCategories()
}

function handleCategoriesEdit(oldCategory, newCategory) {
  editCategory(oldCategory, newCategory)
  renderCategories()
}
