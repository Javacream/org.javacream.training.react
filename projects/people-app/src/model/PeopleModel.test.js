import { PeopleModel } from "./PeopleModel";
import { Person } from "./Person";

describe('People Model', () => {
    it('creates a person', () => {
      let p = new Person(1, "Sawitzki", "Rainer")
      expect(p.lastname).toBe("Sawitzki");
    });
    it('creates a person using PeopleModel', () => {
        let peopleModel = new PeopleModel()
        let idOfSawitzki = peopleModel.add("Sawitzki", "Rainer")
        let p = peopleModel.personWith(idOfSawitzki)
        expect(p.lastname).toBe("Sawitzki");
      });
  
});