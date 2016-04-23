# .ngml - Angular Markup Language

A more concise alternative to HTML, compatible with plain HTML and angular templates

## Example
Here is an example in .html from the angular docs:
```
    <!--html example-->
    <h4>Tabs Demo</h4>
    <ui-tabs>
      <template ui-pane title='Overview' active="true">
        You have {{details.length}} details.
      </template>
      <template *ngFor="#detail of details" ui-pane [title]="detail.title">
        {{detail.text}} <br><br>
        <button class="btn" (click)="removeDetail(detail)">Remove</button>
      </template>
      <template ui-pane title='Summary'>
        Next last ID is {{id}}.
      </template>
    </ui-tabs>
    <hr>
    <button class="btn" (click)="addDetail()">Add Detail</button>
```
And here is the same example in .ngml
```
    //ngml example
    h4(Tabs Demo);
    ui-tabs{
        template[ui-pane, title:Overview, active:true](You have {{details.length}} details.);
        template[ui-pane, *ngFor:#detail of details, @title:detail.title]({{detail.text}}){
            br;br;
            button.btn[&click:removeDetail(detail)](Remove);
        }
        template[ui-pane, title:Summary](Next last ID is {{id}}.);
    }
    hr;
    button.btn[@click:addDetail()](Add Detail);
```
## Benefits
* ngml is more compact (~80% smaller) which makes it easier to type and refactor
* the simplicity makes it easier to read the important parts without the clutter of
 closing tags and quotation marks
* Syntax style is c-like, largely based on less/sass which makes it easier to learn.
* Abstraction of html allows for customisation of output eg `[title]="detail.title"` vs `bind-title="detail.title"`
* cleaner multiline attributes. In angular you often end up with lots of attributes on the same line, and trying to make
 that readable can be a nightmare. 
Taking a (rather verbose) example from Ionic 2's code (https://github.com/driftyco/ionic/blob/2.0/ionic/components/searchbar/searchbar.ts), which is more readable to you?
Single Line HTML


```
    <input [value]="value" (input)="inputChanged($event)" (blur)="inputBlurred()" (focus)="inputFocused()" class="searchbar-input" type="search" [attr.placeholder]="placeholder" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
```


Formatted HTML

```
    <input 
        [value]="value" 
        (input)="inputChanged($event)" 
        (blur)="inputBlurred()" 
        (focus)="inputFocused()" 
        class="searchbar-input" 
        type="search" 
        [attr.placeholder]="placeholder" 
        autocomplete="off" 
        autocorrect="off" 
        autocapitalize="off" 
        spellcheck="false">
```

ngml:

```
    input.searchbar-input[
        @value:value,
        &input:inputChanged($event),
        &blur:inputBlurred(),
        &focus:inputFocused(), 
        class:searchbar-input,
        type:search,
        @attr.placeholder:placeholder,
        autocomplete:off,
        autocorrect:off,
        autocapitalize:off,
        spellcheck:false,
    ];
```


## Todo
* Compiler
* Gulp plugin
* Webpack loader plugin
* Sourcemapping
* Online demo
* Intellij syntax plugin
* Sublime syntax plugin
