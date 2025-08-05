export const filtrarEmbarque = (numeroEmbarque) => ({
  performAs: () => {
    //Hacer clic en el botón de filtros
    cy.wait(3000);
    cy.contains('div', 'Filtros', { timeout: 40000 })
      .should('be.visible')
      .click();

    // hacer click en el campo "Seleccionar"
    cy.contains('span', 'Seleccionar', { timeout: 40000 })
      .should('be.visible')
      .scrollIntoView()
      .should('not.be.disabled')
      .click({ force: true });

    //selecciona la opción "Embarque"
    cy.wait(2000);
    cy.contains('p', 'Embarque', { timeout: 40000 })
  .should('be.visible')
  .scrollIntoView()
  .parent('span')
  .click({ force: true });

    //ingresa el número del embarque 
    cy.wait(2000);
    cy.get('input[placeholder="Escribe aquí tu búsqueda"]', { timeout: 40000 })
      .should('be.visible')
      .click()
      .type(numeroEmbarque).type('{enter}');

      
    cy.wait(3000);

    //verifica si se muestra el mensaje "Sin datos para mostrar" y lanza el error
    cy.get('body').then(($body) => {
      const mensaje = $body.find('h3.text-center.text-lg.font-medium.mt-6').text().trim();
      if (mensaje.includes('Sin datos para mostrar')) {
        cy.screenshot('embarque-no-encontrado');
        throw new Error('El número de embarque ingresado no fue encontrado.');
      }
    });




    
  }
});