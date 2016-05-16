import {HtmlParser, HtmlParseTreeResult} from '@angular/compiler/src/html_parser'

export class NgmlParser extends HtmlParser {

  parse(sourceContent:string, sourceUrl:string, parseExpansionForms?: boolean):HtmlParseTreeResult {

    sourceContent = `<span>ngml parsing</span>\n` + sourceContent;

    console.log(sourceContent);

    let ast = super.parse(sourceContent, sourceUrl);

    console.log(ast);

    return ast;
  }

}
