describe('calculator tests', () => {
  //POSITIVE TESTS
  
  it('check 7 + 9 = 16', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5500/index.html')

    // 2. ACT - write the code that controls user input
    //.get use a css selector to find an element
    cy.get('.calculator__buttons > :nth-child(5)').click();
    cy.get(':nth-child(16)').click();
    cy.get(':nth-child(7)').click();
    cy.get('#equal').click();

    // 3. ASSERT - check if the result is what we expect
    // 16 appears on display when equal is clicked
    cy.get('.calculator__screen').should("contain", 16)
  });
  
  it('check 200 - 49.5 = 150.5', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5500/index.html')

    // 2. ACT - write the code that controls user input
    cy.get(':nth-child(14)').click();
    cy.get('#zero').click();
    cy.get('#zero').click();
    cy.get(':nth-child(12)').click();
    cy.get(':nth-child(9)').click();
    cy.get(':nth-child(7)').click();
    cy.get('#point').click();
    cy.get(':nth-child(10)').click();
    cy.get('#equal').click();

    // 3. ASSERT - check if the result is what we expect
    // 150.5 appears on display when equal is clicked
    cy.get('.calculator__screen').should("contain", 150.5)
  });

  it('check 7 * 9 = 63', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5500/index.html')

    // 2. ACT - write the code that controls user input
    cy.get('.calculator__buttons > :nth-child(5)').click();
    cy.get(':nth-child(8)').click();
    cy.get(':nth-child(7)').click();
    cy.get('#equal').click();

    // 3. ASSERT - check if the result is what we expect
    // 63 appears on display when equal is clicked
    cy.get('.calculator__screen').should("contain", 63)
  });

  it('check 9 / 2 = 4.5', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5500/index.html')

    // 2. ACT - write the code that controls user input
    cy.get(':nth-child(7)').click();
    cy.get('.calculator__buttons > :nth-child(4)').click();
    cy.get(':nth-child(14)').click();
    cy.get('#equal').click();

    // 3. ASSERT - check if the result is what we expect
    // 4.5 appears on display when equal is clicked
    cy.get('.calculator__screen').should("contain", 4.5)
  });
 
  it('check AC clears 9 - 2', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5500/index.html')

    // 2. ACT - write the code that controls user input
    cy.get(':nth-child(7)').click();
    cy.get(':nth-child(12)').click();
    cy.get(':nth-child(14)').click();
    cy.get('#clear').click();

    // 3. ASSERT - check if the result is what we expect
    // empty string on display when equal is clicked
    cy.get('.calculator__screen').should("contain", "")
  });

  it('check % converts 90 to 0.9', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5500/index.html')

    // 2. ACT - write the code that controls user input
    cy.get(':nth-child(7)').click();
    cy.get('#zero').click();
    cy.get('#percent').click();

    // 3. ASSERT - check if the result is what we expect
    // 0.9 on display when percent is clicked
    cy.get('.calculator__screen').should("contain", 0.9)
  });

  //NEGATIVE TEST
  it('/ should not appear if no number displayed first', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5500/index.html')

    // 2. ACT - write the code that controls user input
    cy.get('.calculator__buttons > :nth-child(4)').click();

    // 3. ASSERT - check if the result is what we expect
    // empty appears on display when / is clicked
    cy.get('.calculator__screen').should("contain", "")
  });

  it('no trailing . after first one is pressed', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5500/index.html')

    // 2. ACT - write the code that controls user input
    cy.get('#point').click();
    cy.get('#point').click();
    cy.get(':nth-child(7)').click();


    // 3. ASSERT - check if the result is what we expect
    // . appears on display when .. is clicked
    cy.get('.calculator__screen').should("contain", 0)
  });



  
})