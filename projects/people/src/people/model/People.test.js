import { Person } from "../../../../first/src/components/People";

describe('Simple', () => {
    it('creates a person', () => {
      let p = new Person(1, "Sawitzki", "Rainer")
      expect(p.lastname).toBe("Sawitzki");
      console.log(p.info())

    });
  });
  