import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { actor } from "../../support/screenplay/actor";
import { iniciarSesion } from "../../support/screenplay/tasks/iniciarSesion";
import { filtrarEmbarque } from "../../support/screenplay/tasks/filtrarEmbarque";
import { detallesDelEmbarque } from "../../support/screenplay/questions/detallesDelEmbarque";
import testData from '../../fixtures/testData.json';

Given("que el actor abre la página de autenticación", () => {
  cy.visit("https://www.selaski.com/public/reports/shared?token=9b8140da2164226f7d1ab0626547985903b");
});

When("ingresa el PIN válido", () => {
  actor.attemptsTo(iniciarSesion(testData.pin));
});

When("filtra por el número de embarque", () => {
  actor.attemptsTo(filtrarEmbarque(testData.embarque));
});

Then("debería ver los detalles correctos del embarque", () => {
  actor.should(detallesDelEmbarque());
});
