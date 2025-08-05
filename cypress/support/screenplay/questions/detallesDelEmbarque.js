export const detallesDelEmbarque = () => ({
  answeredBy: () => {
    cy.wait(2000);
      
    //verifica que la búsqueda sea correcta y corresponda al embarque solicitado
    cy.contains('p', 'Embarque: Prueba 1')
      .should('be.visible');
      
    //verifica que el número de embarque se muestre correctamente
      cy.contains('p', 'Prueba 1-01')
      .should('be.visible');

    //manejo del error si no se encuentra el numero de embarque
     cy.wait(3000);

    cy.get('body').then(($body) => {
      if ($body.text().includes('No se encontraron resultados')) {
        throw new Error('El número de embarque ingresado no fue encontrado.');
      }
    });
    
  }
});
