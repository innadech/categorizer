function onClickButtonDeleteCategory(e) {
  const category = e.target.parentElement.dataset.id
  handleDeleteCategory(+category)
}

function onClickButtonAddCategory(e) {
  let a = elInputItem.value
  console.log(a)
  handleAddCategory(a)
  elInputItem.value = ''
}

function onClickButtonEditCategory(e) {
  const oldCategory = e.target.previousElementSibling.textContent
  console.log(oldCategory)
  const newCategory = prompt('Edit category:', oldCategory)
  if (newCategory === null) return
  const categoryId = e.target.parentElement.dataset.id
  handleCategoriesEdit(+categoryId, { name: newCategory })
}

function onClickButtonDeleteItem(e) {
  const itemLi = e.target.closest('li')
  const itemId = itemLi.dataset.id
  const categoryLi = itemLi.closest('ul').closest('li')
  const categoryId = categoryLi.dataset.id
  handleDeleteItem(+categoryId, +itemId)
}

function onClickEditItem(e) {
  const itemLi = e.target.closest('li')
  const itemId = itemLi.dataset.id
  const categoryLi = itemLi.closest('ul').closest('li')
  const categoryId = categoryLi.dataset.id
  const oldItemName = itemLi.querySelector('span').textContent
  const newItemName = prompt('Edit item:', oldItemName)
  if (newItemName) {
    handleUpdateItem(+categoryId, +itemId, newItemName)
  }
}

function onClickButtonAddItem(e) {
  const categoryLi = e.target.closest('li')
  const categoryId = categoryLi.dataset.id
  const input = categoryLi.querySelector('input')
  const itemName = input.value
  handleAddItem(+categoryId, itemName)
  input.value = ''
}
