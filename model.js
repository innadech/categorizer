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
]

function setCategories(newCategories) {
  categories = newCategories || []
}

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
  const trimmedString = categoryName.trim()
  if (!isValidString(trimmedString)) return
  const formattedCategoryName = toCapitalCase(trimmedString)
  const isExists = categories.some(c => c.name === formattedCategoryName)
  if (isExists) return
  const category = createCategory(formattedCategoryName)
  categories.push(category)
}

function updateCategory(categoryId, newCategoryName) {
  const category = categories.find(category => category.id === categoryId)
  const newName =
    typeof newCategoryName === 'string' ? newCategoryName : newCategoryName.name
  if (!newName) return
  const trimmedName = newName.trim()
  if (trimmedName.length < 3 || trimmedName === '') return
  const isDuplicate = categories.some(
    cat =>
      category.id !== categoryId &&
      category.name.trim().toLowerCase() === trimmedName.toLowerCase(),
  )

  if (isDuplicate) return
  if (category) {
    category.name = trimmedName
  }
  // return category
}

// function updateCategory(id, updatedCategory) {
//   const category = categories.find(category => category.id === id)
//   const newName =
//     typeof updatedCategory === 'string' ? updatedCategory : updatedCategory.name
//   if (!newName) return
//   const trimmedName = newName.trim()

//   if (trimmedName.length < 3 || trimmedName === '') return

//   // Проверяем, нет ли уже ДРУГОЙ категории с таким же именем
//   const isDuplicate = categories.some(
//     cat =>
//       cat.id !== id &&
//       cat.name.trim().toLowerCase() === trimmedName.toLowerCase(),
//   )

//   if (isDuplicate) return
//   if (category) {
//     category.name = trimmedName
//   }
//   // return category
// }

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
  const trimmedItemName = String(itemName || '')
    .trim()
    .toLowerCase()
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

// function addItemToCategory(categoryId, itemName) {
//   const trimmedItemName = itemName.trim().toLowerCase()
//   if (trimmedItemName.length < 3) return
//   if (trimmedItemName === '') return

//   const category = categories.find(category => category.id === categoryId)
//   if (!category) return
//   const isDuplicate = category.items.some(
//     item => item.name.toLowerCase() === trimmedItemName.toLowerCase(),
//   )

//   if (isDuplicate) return
//   const item = createItem(trimmedItemName)
//   category.items.push(item)
// }

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

// updateNameByItemIdInCategoryId(categoryId, itemId, updatedItemName)
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

function toCapitalCase(s) {
  const lower = s.toLowerCase()
  const char = lower[0].toUpperCase()
  return char + lower.slice(1)
}

function isValidString(s) {
  if (s.length < 3) return false
  if (s === '') return false
  return true
}

// console.log(getCategories())
// console.log('')
// addCategory('Tablets')
// console.log(getCategories())
// console.log('')
// addCategory('Tablets')
// console.log(getCategories())
// console.log('')
// addCategory('Smartphones')
// console.log(getCategories())
// console.log('')
// updateCategory(getCategories()[0].id, { name: 'Smartphones' })
// console.log(getCategories())
// console.log('')
// deleteCategory(getCategories()[0].id)
// console.log(getCategories())
// console.log('')
// console.log(addItemToCategory(100, { name: 'iPhone 18' }))
// console.log(getCategories())

//

// console.log(getCategories())
// console.log(getCategories())
// console.log(getCategories())
// console.log(addItemToCategory(100, { name: 'iPhone 18' }))
// console.log(getCategories())
