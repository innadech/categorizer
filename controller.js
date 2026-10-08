function handleAddCategory(categoryName) {
  if (addCategory(categoryName)) {
    // renderInputCategoryClean()
  }
  const categories = getCategories()
  renderCategoriesListAll(categories)
  saveCategories(categories)
}

function handleDeleteCategory(categoryId) {
  deleteCategory(categoryId)
  const categories = getCategories()
  renderCategoriesListAll(categories)
  saveCategories(categories)
}

function handleCategoriesEdit(categoryId, newCategoryName) {
  updateCategory(categoryId, newCategoryName)
  const categories = getCategories()
  renderCategoriesListAll(categories)
  saveCategories(categories)
}

function handleAddItem(categoryId, item) {
  addItemToCategory(categoryId, item)
  const categories = getCategories()
  renderCategoriesListAll(categories)
  saveCategories(categories)
}

function handleDeleteItem(categoryId, itemId) {
  deleteItemFromCategory(categoryId, itemId)
  const categories = getCategories()
  renderCategoriesListAll(categories)
  saveCategories(categories)
}

function handleUpdateItem(categoryId, itemId, updatedItem) {
  updateItemInCategory(categoryId, itemId, updatedItem)
  const categories = getCategories()
  renderCategoriesListAll(categories)
  saveCategories(categories)
}

function handleLoadPage() {
  const savedCategories = restoreCategories()
  setCategories(savedCategories)
  const categories = getCategories()
  renderCategoriesListAll(categories)
}

handleLoadPage()
