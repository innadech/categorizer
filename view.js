// const elButtonDelete = document.querySelector('#elButtonDelete')
// const elInputCategory = document.querySelector('#elInputCategory')
// const elButtonEdit = document.querySelector('#elButtonEdit')

function onClickelButtonDeleteCategory(e) {
  const category = e.target.previousElementSibling.textContent
  handleDeleteCategory(category)
}

// function onClickAddButtonAddCategory (e){
//   let a = elInputCategory.value
//   handleAddCategory(a) // Вызываем контроллер добавления
//   elInputCategory.value = ''
// }

function onClickEditProduct(e) {
  const oldCategory = e.target.textContent
  const newCategory = prompt('Edit category:', oldCategory)
  handleCategoriesEdit(oldCategory, newCategory)
}

function renderCategoriesListAll(categories) {
  const elUl = document.querySelector('#categoryList')
  elUl.innerHTML = ''
  categories.forEach(category => {
    const elLi = generateLiCategory(category)
    elUl.appendChild(elLi)
  })
}

function generateLiCategory(category) {
  const elLi = document.createElement('li')
  const elSpan = document.createElement('span')
  const elButtonDelete = document.createElement('button')
  const elButtonEdit = document.createElement('button')

  elSpan.textContent = category
  elButtonDelete.textContent = 'delete'
  elButtonEdit.textContent = 'edit'

  elButtonDelete.onclick = onClickelButtonDeleteCategory
  elButtonEdit.onclick = onClickEditProduct

  elLi.appendChild(elSpan)
  elLi.appendChild(elButtonEdit)
  elLi.appendChild(elButtonDelete)

  return elLi
}
