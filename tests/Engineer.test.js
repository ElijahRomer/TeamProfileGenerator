const Engineer = require(`../lib/Engineer`);

describe("Engineer", () => {
  describe("Properties", () => {
    let test1 = new Engineer(`John Doe`, 111, `Test@gmail.com`, `JohnDoeCoding`)

    test("Should create an object with the first parameter set to the name property", () => {
      expect(test1.name).toBe(`John Doe`)
    })

    test("Should create an object with the second parameter set to the ID property", () => {
      expect(test1.id).toBe(111)
    })

    test("Should create an object with the third parameter set to the email property", () => {
      expect(test1.email).toEqual(`Test@gmail.com`)
    })

    test("Should create an object with the fourth parameter set to the gitHub property", () => {
      expect(test1.github).toEqual(`JohnDoeCoding`)
    })
  })
  
  describe(`Methods`, () => {
    let test2 = new Engineer(`Billy Bob`, 222, `Test2@gmail.com`, `BillyBobCoding`)

    test("calling getName() should return name property", () => {
      expect(test2.getName()).toBe(`Billy Bob`)
    })

    test("calling getId() should return id property", () => {
      expect(test2.getId()).toBe(222)
    })

    test("calling getEmail() should return email property", () => {
      expect(test2.getEmail()).toBe(`Test2@gmail.com`)
    })

    test("calling getGithub() should return github property", () => {
      expect(test2.getGithub()).toBe(`BillyBobCoding`)
    })

    test("calling getRole should return Engineer.", () => {
      expect(test2.getRole()).toBe(`Engineer`)
    })
  })
})