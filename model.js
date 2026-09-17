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
  const trimmedCategoryName = categoryName.trim()
  if (trimmedCategoryName.length < 3) return
  if (trimmedCategoryName === '') return
  const isExists = categories.some(
    cat => cat.name.trim().toLowerCase() === trimmedCategoryName.toLowerCase(),
  )
  if (isExists) return
  const category = createCategory(trimmedCategoryName)
  categories.push(category)
}

function updateCategory(id, updatedCategory) {
  const category = categories.find(category => category.id === id)
  const newName =
    typeof updatedCategory === 'string' ? updatedCategory : updatedCategory.name
  if (!newName) return
  const trimmedName = newName.trim()

  if (trimmedName.length < 3 || trimmedName === '') return

  // Проверяем, нет ли уже ДРУГОЙ категории с таким же именем
  const isDuplicate = categories.some(
    cat =>
      cat.id !== id &&
      cat.name.trim().toLowerCase() === trimmedName.toLowerCase(),
  )

  if (isDuplicate) return
  if (category) {
    category.name = trimmedName
  }
  // return category
}

function deleteCategory(id) {
  categories = categories.filter(category => category.id !== id)
}

function createItem(itemName) {
  return {
    id: Math.random(),
    name: itemName,
  }
}

function addItemToCategory(categoryId, itemName) {
  const trimmedItemName = itemName.trim()
  if (trimmedItemName.length < 3) return
  if (trimmedItemName === '') return
  const category = categories.find(category => category.id === categoryId)
  if (!category) return
  const isDuplicate = category.items.some(
    item => item.name.toLowerCase() === trimmedItemName.toLowerCase(),
  )

  if (isDuplicate) return
  const item = createItem(trimmedItemName)
  category.items.push(item)
}

// function addItemToCategory(categoryId, item) {
//   const category = categories.find(category => category.id === categoryId)
//   if (category) {
//     item.id = Math.random()
//     category.items.push(item)
//   }
// }

function deleteItemFromCategory(categoryId, itemId) {
  const category = categories.find(category => category.id === categoryId)
  if (category) {
    category.items = category.items.filter(item => item.id !== itemId)
  }
}

function updateItemInCategory(categoryId, itemId, updatedItem) {
  const category = categories.find(category => category.id === categoryId)
  // 3. Проверяем, существует ли уже категория с таким именем (сравниваем именно имена, а не объекты)
  const newName =
    typeof updatedItem === 'string' ? updatedItem : updatedItem.name
  if (!newName) return
  const isDuplicate = category.items.some(
    i => i.id !== itemId && i.name.toLowerCase() === newName.toLowerCase(),
  )

  if (isDuplicate) return
  if (category) {
    const item = category.items.find(item => item.id === itemId)
    if (item) {
      item.name = newName
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
