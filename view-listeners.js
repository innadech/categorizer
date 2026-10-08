function onClickButtonDeleteCategory(e) {
  const categoryId = e.target.parentElement.dataset.id
  handleDeleteCategory(+categoryId)
}

function onClickButtonAddCategory(e) {
  let categoryName = elInputAddCategory.value
  console.log(categoryName)
  handleAddCategory(categoryName)
  elInputAddCategory.value = ''
}

function onClickButtonDeleteItem(e) {
  const itemLi = e.target.closest('li')
  const itemId = itemLi.dataset.id
  const categoryLi = itemLi.closest('ol').closest('li')
  const categoryId = categoryLi.dataset.id
  handleDeleteItem(+categoryId, +itemId)
}

function onClickButtonEditCategory(e) {
  const oldCategory = e.target.previousElementSibling.textContent
  console.log(oldCategory)
  const newCategory = prompt('Edit category:', oldCategory)
  if (newCategory === null) return
  const categoryId = e.target.parentElement.dataset.id
  handleCategoriesEdit(+categoryId, { name: newCategory })
}

// function onClickButtonDeleteItem(e) {
//   const itemLi = e.target.closest('li')
//   const itemId = itemLi.dataset.id
//   const categoryLi = itemLi.closest('ul').closest('li')
//   const categoryId = categoryLi.dataset.id
//   handleDeleteItem(+categoryId, +itemId)
// }

// function onClickEditItem(e) {
//   const itemLi = e.target.closest('li')
//   const itemId = itemLi.dataset.id
//   const categoryLi = itemLi.closest('ul').closest('li')
//   const categoryId = categoryLi.dataset.id
//   const oldItemName = itemLi.querySelector('span').textContent
//   const newItemName = prompt('Edit item:', oldItemName)
//   if (newItemName) {
//     handleUpdateItem(+categoryId, +itemId, newItemName)
//   }
// }

function onClickEditItem(e) {
  const itemLi = e.target.closest('li')
  const itemId = itemLi.dataset.id
  const categoryLi = itemLi.closest('ol').closest('li')
  const categoryId = categoryLi.dataset.id
  const elH3 = itemLi.querySelector('h3')
  const oldItemName = elH3 ? elH3.textContent : ''
  const newItemName = prompt('Edit item:', oldItemName)
  if (newItemName !== null) {
    handleUpdateItem(+categoryId, +itemId, { name: newItemName })
  }
}

function onClickButtonAddItem(e) {
  const categoryLi = e.target.closest('li[data-id]')
  console.log(categoryLi)
  const categoryId = categoryLi.dataset.id
  const input = categoryLi.querySelector('input')
  const itemName = input.value
  console.log(+categoryId)
  console.log(itemName)
  handleAddItem(+categoryId, itemName)
  input.value = ''
}
