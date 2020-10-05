describe("Drink About", function(){
    describe("Age Check", function(){
        it("should return drink whiskey", function(){
        expect(whatCanIDrink(40)).toBe("Drink Whiskey");
        })
        it("should return drink toddy", function(){
        expect(whatCanIDrink(13)).toBe("Drink Toddy");
        })
        it("should return drink coke", function(){
        expect(whatCanIDrink(14)).toBe("Drink Coke");
        })
        it("should return drink beer", function(){
        expect(whatCanIDrink(18)).toBe("Drink Beer");
        })
        it("should return age is incorrect", function(){
        expect(whatCanIDrink(-1)).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        })
        it("should return with an error if we don't supply a number", function(){
            expect(whatCanIDrink("h")).toBe("Error");
        })
    })
})