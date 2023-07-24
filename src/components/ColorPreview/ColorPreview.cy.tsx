import React from "react";
import { ColorPreview } from "./ColorPreview";

const mockColor = {
  id: "1",
  name: "test",
  value: "#ff0000",
};

describe("<ColorPreview />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ColorPreview color={mockColor} />);
  });
  it("has a color field", () => {
    cy.mount(<ColorPreview color={mockColor} />);
    cy.get('[data-cy="color-field"]').should(
      "have.css",
      "background-color",
      "rgb(255, 0, 0)",
    );
  });
  it("has a color name", () => {
    cy.mount(<ColorPreview color={mockColor} />);
    cy.get('[data-cy="color-name"]').contains(mockColor.name);
  });
});
