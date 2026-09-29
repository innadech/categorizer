function generateLiAddItem(item) {
  const elLi = document.createElement('li')
  const elH3 = document.createElement('h3')
  const elButtonEdit = document.createElement('button')
  const elButtonDelete = document.createElement('button')

  elH3.textContent = item.name
  elButtonEdit.textContent = 'Edit'
  elButtonDelete.textContent = 'Delete'

  elButtonEdit.onclick = onClickEditItem
  elButtonDelete.onclick = onClickButtonDeleteItem

  elLi.appendChild(elH3)
  elLi.appendChild(elButtonEdit)
  elLi.appendChild(elButtonDelete)
  return elLi
}

function generateLiCategory(category) {
  const elLi = document.createElement('li')
  const elH2 = document.createElement('h2')
  const elButtonEdit = document.createElement('button')
  const elButtonDelete = document.createElement('button')
  const elOl = document.createElement('ol')
  const elLiAdd = document.createElement('li')
  const elInput = document.createElement('input')
  const elButtonAdd = document.createElement('button')

  elLi.dataset.id = category.id

  elButtonAdd.textContent = 'Add'
  elButtonDelete.textContent = 'Delete'

  elInput.type = 'text'
  elH2.textContent = category.name

  category.items?.forEach(item => {
    const elLi = generatorLiItem(item) // generatorLiItem НЕТ ТАКОЙ ФУНКЦИИ
    elOl.appendChild(elLi)
  })

  elLi.appendChild(elH2)
  elLi.appendChild(elOl)
  elLi.appendChild(elButtonEdit)
  elLi.appendChild(elButtonDelete)
  elOl.appendChild(elLiAdd)
  elLiAdd.appendChild(elInput)
  elLiAdd.appendChild(elButtonAdd)

  elButtonAdd.onclick = onClickButtonAddItem
  elButtonDelete.onclick = onClickButtonDeleteCategory
  elButtonEdit.onclick = onClickButtonEditCategory

  return elLi
}
