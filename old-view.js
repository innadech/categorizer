// const elButtonDelete = document.querySelector('#elButtonDelete')
// const elInputAddCategory = document.querySelector('#elInputAddCategory')

// const category = e.target.previousElementSibling.textContent

// function renderCategoriesListAll(categories) {
//   const elUl = document.querySelector('#categoryList')
//   elUl.innerHTML = ''
//   categories.forEach(category => {
//     const elLi = generateLiCategory(category)
//     elUl.appendChild(elLi)
//   })
// }

// function generateLiCategory(category) {
//   const elInputItem = document.createElement('input')
//   const elButtonAddItem = document.createElement('button')
//   const elDiv = document.createElement('div')
//   elDiv.appendChild(elInputItem)
//   elDiv.appendChild(elButtonAddItem)
//   const elLi = document.createElement('li')

//   const elSpan = document.createElement('span')
//   const elButtonDelete = document.createElement('button')
//   const elButtonEdit = document.createElement('button')
//   const elUlItems = document.createElement('ul')

//   elSpan.textContent = category.name
//   elButtonDelete.textContent = 'delete'
//   elButtonEdit.textContent = 'edit'
//   elInputItem.type = 'text'
//   elLi.dataset.id = category.id
//   elButtonAddItem.textContent = 'Add Item'

//   elButtonDelete.onclick = onClickButtonDeleteCategory
//   elButtonEdit.onclick = onClickButtonEditCategory
//   elButtonAddItem.onclick = onClickButtonAddItem

//   category.items?.forEach(item => {
//     const elLi = generatorLiItem(item)
//     elUlItems.appendChild(elLi)
//   })

//   elLi.appendChild(elSpan)
//   elLi.appendChild(elButtonEdit)
//   elLi.appendChild(elButtonDelete)
//   elLi.appendChild(elUlItems)
//   elLi.appendChild(elInputItem)
//   elLi.appendChild(elButtonAddItem)

//   return elLi
// }

// function generatorLiItem(item) {
//   const elLi = document.createElement('li')
//   elLi.dataset.id = item.id
//   const elSpan = document.createElement('span')
//   const elButtonDelete = document.createElement('button')
//   const elButtonEdit = document.createElement('button')

//   elSpan.textContent = item.name
//   elButtonDelete.textContent = 'delete'
//   elButtonEdit.textContent = 'edit'
//   elButtonDelete.onclick = onClickButtonDeleteItem
//   elButtonEdit.onclick = onClickEditItem
//   elLi.appendChild(elSpan)
//   elLi.appendChild(elButtonEdit)
//   elLi.appendChild(elButtonDelete)
//   return elLi
// }
