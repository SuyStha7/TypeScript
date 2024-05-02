// * Types Vs Interface

// 1:
// Use custom types when you need unions, intersection or mapped types
// Use interface when defining object's shapes or classes that adhere to contract.

// 2:
// Interfaces can extend other interfaces to inherit their numbers.
// Custom types can use unions and intersection for more complex type composition.

// 3:
//  same interface name treated as one

// Type
type client = {
  name: string;
  tech: string;
};

type admin = {
  department: string;
};

type depart = client & admin;
type depart1 = client | admin;

// Interface
interface client1 {
  name: string;
  tech: string;
}

interface admin1 {
  department: string;
}

interface depart2 extends client1, admin1 {}

class department implements depart2 {
  constructor(
    public name: string,
    public tech: string,
    public department: string
  ) {}
}
