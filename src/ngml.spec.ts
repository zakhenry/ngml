import {expect, NgmlParser} from "./testBootstrap.spec";
import {HtmlParser, HtmlParseTreeResult} from '@angular/compiler/src/html_parser'

describe('.ngml parser', () => {

  it('should be an newable class', () => {

    expect(new NgmlParser).to.be.an.instanceOf(NgmlParser);
  });

  it('should have callable member parse', () => {
    const instance = new NgmlParser();
    expect(instance.parse('<test>', 'test.ngml')).to.be.be.an.instanceOf(HtmlParseTreeResult);
  });

});
