describe("Filter function", () => {
	// test stuff
  test("it should filter by a search term (link)", () => {
  	// actual test
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(testFormHandler(input, "link")).toEqual(output);

  });
});

function testFormHandler(inputArr, searchTerm) {
	const regex = new RegExp(searchTerm, "i");
  	return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(regex);
  });
}