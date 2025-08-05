export const iniciarSesion = (pin) => ({
  performAs: () => {
    const digits = pin.split('');
    
    cy.get('#digit1', { timeout: 50000 }).should('be.visible').type(digits[0]);
    cy.get('#digit2').type(digits[1]);
    cy.get('#digit3').type(digits[2]);
    cy.get('#digit4').type(digits[3]);

    
    cy.contains("Ingresar").click();

    
    cy.wait(3000);

    // Valida si aparece el mensaje de error por PIN incorrecto
    cy.get('body').then(($body) => {
      if ($body.find('p.text-red-500.text-sm').length > 0) {
        const mensajeError = $body.find('p.text-red-500.text-sm').text().trim();

    
        cy.screenshot('pin-incorrecto');

        // Lanza error para que falle la prueba
        throw new Error(`PIN incorrecto: ${mensajeError}`);
      }
    });
  }
});
