class Drugs {
  constructor(name, ug, country, soldAs) {
    this.name = name;
    this.ug = ug;
    this.country = country;
    this.soldAs = soldAs;
  }
  getDrug() {
    console.log(`The drug is ${this.name}, the dose is ${this.ug} and has been smuggled from ${this.country}. It was sold as ${this.soldAs}.`);

    if (this.name !== this.soldAs) {
      console.warn(`⚠️ Warning: The drug (${this.name}) is being sold as something else (${this.soldAs}). Be careful!`);
    }
  }
}


const mdma = new Drugs('MDMA', '234.30 ug', 'Netherlands', 'MDMA');
mdma.getDrug();

const lsd = new Drugs('LSD', '100.00 ug', 'Switzerland', 'LSD');
lsd.getDrug();

const cocaine = new Drugs('Cocaine', '200.00 ug', 'Colombia', 'Cocaine');
cocaine.getDrug();

const meth = new Drugs('Meth', '300.00 ug', 'Mexico', 'MDMA Crystal');
meth.getDrug();

const fentanyl = new Drugs('Fentanyl', '50.00 ug', 'China', 'Oxy');
fentanyl.getDrug();
