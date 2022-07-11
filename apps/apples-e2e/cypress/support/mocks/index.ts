export const randomApple = () => {
  cy.fixture('apples-data.mock.json')
    .then((r) => {
      cy.intercept('GET', '/apples-api/random', r.addOneApple.list)
    })
    .as('addOneApple')
}

export const addApple = (color: 'red' | 'green') => {
  cy.fixture('apples-data.mock.json')
    .then((r) => {
      cy.intercept(
        'POST',
        '/apples-api*',
        r[color === 'red' ? 'addRedApple' : 'addGreenApple'].list
      )
    })
    .as('addApple')
}

export const removeApples = (color: 'red' | 'green') => {
  cy.fixture('apples-data.mock.json')
    .then((r) => {
      cy.intercept(
        'DELETE',
        '/apples-api/' + color,
        r[color === 'red' ? 'removeRedApples' : 'removeGreenApples'].list
      )
    })
    .as('removeApples')
}
