let categories = [
  {
    id: 100,
    name: 'Smartphones',
    items: [],
  },
  {
    id: 222,
    name: 'Laptops',
    items: [],
  },
  {
    id: 333,
    name: 'Flowers',
    items: [],
  },
]

function getCategories() {
  return categories
}

function getCategoryById(id) {
  return categories.find(category => category.id === id)
}

function addCategory(category) {
  const newCategory = {
    id: Math.random(), // Generate a random ID for the new category
    name: category.name,
  }
  categories.push(newCategory)
  return newCategory
}

function updateCategory(id, updatedCategory) {
  const category = categories.find(category => category.id === id)
  if (category) {
    category.name = updatedCategory.name
  }
  return category
}

function deleteCategory(id) {
  categories = categories.filter(category => category.id !== id)
}
console.log(addCategory({ name: 'Tablets' }))
console.log(getCategories())
console.log(updateCategory(100, { name: 'Mobile Phones' }))
console.log(getCategories())
console.log(deleteCategory(222))
console.log(getCategories())
