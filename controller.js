function renderCategories() {
  let categories = getCategories()
  renderCategoriesListAll(categories) // Передаем весь массив в ваш view
}

function handleAddCategory(category) {
  addCategory(category)
  renderCategories()
}

function handleDeleteCategory(category) {
  deleteCategory(category)
  renderCategories()
}

function handleCategoriesEdit(oldCategory, newCategory) {
  updateCategory(oldCategory, newCategory)
  renderCategories()
}

function handleAddItem(categoryId, item) {
  addItemToCategory(categoryId, item)
  renderCategories()
}
function handleDeleteItem(categoryId, itemId) {
  deleteItemFromCategory(categoryId, itemId)
  renderCategories()
}
function handleUpdateItem(categoryId, itemId, updatedItem) {
  updateItemInCategory(categoryId, itemId, updatedItem)
  renderCategories()
}
