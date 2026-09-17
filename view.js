// const elButtonDelete = document.querySelector('#elButtonDelete')
// const elInputCategory = document.querySelector('#elInputCategory')
const elButtonAddItem = document.querySelector('#elButtonAddItem')
const elInputItem = document.querySelector('#elInputItem')

elButtonAddItem.onclick = onClickButtonAddCategory

function onClickButtonDeleteCategory(e) {
  // const category = e.target.previousElementSibling.textContent
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

function renderCategoriesListAll(categories) {
  const elUl = document.querySelector('#categoryList')
  elUl.innerHTML = ''
  categories.forEach(category => {
    const elLi = generateLiCategory(category)
    elUl.appendChild(elLi)
  })
}
function onClickButtonAddItem(e) {
  const categoryLi = e.target.closest('li')
  const categoryId = categoryLi.dataset.id
  const input = categoryLi.querySelector('input')
  const itemName = input.value
  handleAddItem(+categoryId, itemName)
  input.value = ''
}

function generateLiCategory(category) {
  const elInputItem = document.createElement('input')
  const elButtonAddItem = document.createElement('button')
  const elDiv = document.createElement('div')
  elDiv.appendChild(elInputItem)
  elDiv.appendChild(elButtonAddItem)
  const elLi = document.createElement('li')

  const elSpan = document.createElement('span')
  const elButtonDelete = document.createElement('button')
  const elButtonEdit = document.createElement('button')
  const elUlItems = document.createElement('ul')

  elSpan.textContent = category.name
  elButtonDelete.textContent = 'delete'
  elButtonEdit.textContent = 'edit'
  elInputItem.type = 'text'
  elLi.dataset.id = category.id
  elButtonAddItem.textContent = 'Add Item'

  elButtonDelete.onclick = onClickButtonDeleteCategory
  elButtonEdit.onclick = onClickButtonEditCategory
  elButtonAddItem.onclick = onClickButtonAddItem

  category.items?.forEach(item => {
    const elLi = generatorLiItem(item)
    elUlItems.appendChild(elLi)
  })

  elLi.appendChild(elSpan)
  elLi.appendChild(elButtonEdit)
  elLi.appendChild(elButtonDelete)
  elLi.appendChild(elUlItems)
  elLi.appendChild(elInputItem)
  elLi.appendChild(elButtonAddItem)

  return elLi
}

function generatorLiItem(item) {
  const elLi = document.createElement('li')
  elLi.dataset.id = item.id
  const elSpan = document.createElement('span')
  const elButtonDelete = document.createElement('button')
  const elButtonEdit = document.createElement('button')

  elSpan.textContent = item.name
  elButtonDelete.textContent = 'delete'
  elButtonEdit.textContent = 'edit'
  elButtonDelete.onclick = onClickButtonDeleteItem
  elButtonEdit.onclick = onClickEditItem
  elLi.appendChild(elSpan)
  elLi.appendChild(elButtonEdit)
  elLi.appendChild(elButtonDelete)
  return elLi
}
// function renderItemsListAll(categories) {
//   categories.forEach(category => {
//     category.items.forEach(item => {
//       const elLi = generatorLiItem(item)
//       elUlItems.appendChild(elLi)
//     })
//   })
// }
