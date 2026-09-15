let categories = [
  // {
  //   id: 100,
  //   name: 'Smartphones',
  //   items: [
  //     { id: 1, name: 'iPhone 15' },
  //     { id: 2, name: 'Samsung Galaxy S25' },
  //     { id: 3, name: 'Google Pixel 8' },
  //   ],
  // },
  // {
  //   id: 222,
  //   name: 'Laptops',
  //   items: [],
  // },
  // {
  //   id: 333,
  //   name: 'Flowers',
  //   items: [],
  // },
]

function getCategories() {
  return categories
}

function getCategoryById(id) {
  return categories.find(category => category.id === id)
}

function createCategory(categoryName) {
  return {
    id: Math.random(),
    name: categoryName,
    items: [],
  }
}

function addCategory(categoryName) {
  const category = createCategory(categoryName)
  categories.push(category)
}

function updateCategory(id, updatedCategory) {
  const category = categories.find(category => category.id === id)
  if (category) {
    category.name = updatedCategory.name
  }
  // return category
}

function deleteCategory(id) {
  categories = categories.filter(category => category.id !== id)
}

function addItemToCategory(categoryId, item) {
  const category = categories.find(category => category.id === categoryId)
  if (category) {
    item.id = Math.random()
    category.items.push(item)
  }
}

function deleteItemFromCategory(categoryId, itemId) {
  const category = categories.find(category => category.id === categoryId)
  if (category) {
    category.items = category.items.filter(item => item.id !== itemId)
  }
}

function updateItemInCategory(categoryId, itemId, updatedItem) {
  const category = categories.find(category => category.id === categoryId)
  if (category) {
    const item = category.items.find(item => item.id === itemId)
    if (item) {
      item.name = updatedItem.name
    }
  }
}

// console.log(addCategory('Tablets'))
// console.log(getCategories())
// console.log(updateCategory(100, { name: 'Mobile Phones' }))
// console.log(getCategories())
// console.log(deleteCategory(222))
// console.log(getCategories())
// console.log(addItemToCategory(100, { name: 'iPhone 18' }))
// console.log(getCategories())
