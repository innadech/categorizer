function renderCategoriesListAll(categories) {
  const ul = document.querySelector('#categoryList')
  ul.innerHTML = ''
  categories.forEach(category => {
    const elLi = generateLiCategory(category)
    ul.appendChild(elLi)
  })
}
