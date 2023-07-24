import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { Overview } from "./Overview";
import { GetAllColorsDocument } from "./Overview.generated";
import { HelmetProvider } from "react-helmet-async";
import { GlobalStyles } from "../../style/themes";

const mocks: any[] = [
  {
    request: {
      query: GetAllColorsDocument,
      variables: {
        offset: 0,
      },
    },
    result: {
      data: {
        colors: [
          {
            id: "1",
            name: "test",
            value: "#ff0000",
            __typename: "Color",
          },
        ],
      },
    },
  },
];

const component = (
  <MockedProvider mocks={mocks}>
    <HelmetProvider>
      <GlobalStyles theme={"light"} />
      <Overview />
    </HelmetProvider>
  </MockedProvider>
);

describe("<Overview />", () => {
  it("renders", () => {
    cy.mount(component);
  });
  it("has button to add color", () => {
    cy.mount(component);
    cy.get("button").contains("Add Color");
  });
  it("has button to load more colors", () => {
    cy.mount(component);
    cy.get("button").contains("Load More");
  });
  it("shows a color preview", () => {
    cy.mount(component);
    cy.get('[data-cy="color-preview"]').should("exist");
  });
  it("shows the mocked color in the color preview", () => {
    cy.mount(component);
    cy.get('[data-cy="color-field"]').should(
      "have.css",
      "background-color",
      "rgb(255, 0, 0)",
    );
  });
});
