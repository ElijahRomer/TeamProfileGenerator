const Intern = require(`../lib/Intern`)

describe("Intern", () => {
  describe("Properties", () => {
    let test1 = new Intern(`John Doe`, 111, `Test@gmail.com`, `Northwestern University`)

    test("Should create an object with the first parameter set to the name property", () => {
      expect(test1.name).toBe(`John Doe`)
    })

    test("Should create an object with the second parameter set to the ID property", () => {
      expect(test1.id).toBe(111)
    })

    test("Should create an object with the third parameter set to the email property", () => {
      expect(test1.email).toEqual(`Test@gmail.com`)
    })

    test("Should create an object with the fourth parameter set to the school property", () => {
      expect(test1.school).toEqual(`Northwestern University`)
    })
  })
  
  describe(`Methods`, () => {
    let test2 = new Intern(`Billy Bob`, 222, `Test2@gmail.com`, `University of Chicago`)

    test("calling getName should return name property", () => {
      expect(test2.getName()).toBe(`Billy Bob`)
    })

    test("calling getId should return id property", () => {
      expect(test2.getId()).toBe(222)
    })

    test("calling getEmail should return email property", () => {
      expect(test2.getEmail()).toBe(`Test2@gmail.com`)
    })

    test("calling getSchool should return school property", () => {
      expect(test2.getSchool()).toBe(`University of Chicago`)
    })

    test("calling getRole should return Intern.", () => {
      expect(test2.getRole()).toBe(`Intern`)
    })
  })
})