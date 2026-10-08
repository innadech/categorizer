function renderCategories() {
  let categories = getCategories()
  renderCategoriesListAll(categories)
}

function handleAddCategory(categoryName) {
  addCategory(categoryName)
  renderCategories()
  console.log(getCategories())
  saveCategories(getCategories())
}

function handleDeleteCategory(categoryId) {
  deleteCategory(categoryId)
  renderCategories()
  saveCategories(getCategories())
}

function handleCategoriesEdit(categoryId, newCategoryName) {
  updateCategory(categoryId, newCategoryName)
  renderCategories()
  saveCategories(getCategories())
}

function handleAddItem(categoryId, item) {
  addItemToCategory(categoryId, item)
  renderCategories()
  saveCategories(getCategories())
}

function handleDeleteItem(categoryId, itemId) {
  deleteItemFromCategory(categoryId, itemId)
  renderCategories()
  saveCategories(getCategories())
}

function handleUpdateItem(categoryId, itemId, updatedItem) {
  updateItemInCategory(categoryId, itemId, updatedItem)
  renderCategories()
  saveCategories(getCategories())
}

function handleLoadPage() {
  const savedCategories = restoreCategories()
  setCategories(savedCategories)
  let categories = getCategories()
  renderCategoriesListAll(categories)
}

handleLoadPage()
