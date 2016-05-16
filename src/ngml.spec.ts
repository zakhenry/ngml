import {expect, NgmlParser} from "./testBootstrap.spec";

describe('.ngml parser', () => {

  it('should be an newable class', () => {

    expect(new NgmlParser).to.be.an.instanceOf(NgmlParser);
  });

  it('should have callable member parse', () => {
    const instance = new NgmlParser();
    expect(instance.parse).to.be.an.instanceOf(Function);
    expect(instance.parse()).to.be.true;
  });

});
