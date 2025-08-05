Feature: Autenticación y búsqueda de embarque

  Scenario: Usuario accede y filtra un embarque exitosamente
    Given que el actor abre la página de autenticación
    When ingresa el PIN válido
    And filtra por el número de embarque 
    Then debería ver los detalles correctos del embarque
