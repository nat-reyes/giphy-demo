import { checkData, validateApiInformation } from "../support/commands";

describe("Search Page", () => {
    before(function () {
        cy.visit("http://localhost:3000");
        validateApiInformation("giphySearch");
    });
    it("Should open search page", () => {
        cy.visit(`http://localhost:3000`);
    });

    it("Should correctly call trending API", () => {
        cy.request({
            method: "GET",
            url: "https://api.giphy.com/v1/gifs/trending?api_key=WnTEYVz8yJSXIH1ZF4mLgRF33Ey4oC1g&limit=25&offset=0&rating=g",
            qs: "results=1",
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("data");
            expect(response.body).to.have.property("pagination");
            expect(response.body).to.have.property("meta");
        });
    });
    it("Should load data correctly", () => {
        checkData("giphySearch.json", "GET", "https://api.giphy.com/v1/gifs/trending");
    });
    it("Should search giphy", () => {
        cy.get('[data-test-id="search-giphy"]').type("cat");
        cy.intercept(
            {
                url: "https://api.giphy.com/v1/gifs/search*",
                query: { search: "Cat" },
            },
            (req) => {
                req.continue((res) => {
                    validateApiInformation("giphySearch");
                    expect(res.body.results[0]).to.have.property("title");
                    expect(res.body.results[0]).to.have.property("user.username");
                });
            }
        );
    });
    it("Should correctly go to next page", () => {
        cy.visit(`http://localhost:3000`);
        cy.get('[data-test-id="search-giphy"]').type("cat");
        cy.get('[data-test-id="go-to-next-page"]').click();
    });
    it("Should correctly go to previous page", () => {
        cy.visit(`http://localhost:3000`);
        cy.get('[data-test-id="search-giphy"]').type("cat");
        cy.get('[data-test-id="go-to-previous-page"]').click();
    });
});
