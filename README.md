# .ngml - Angular Markup Language

[![Join the chat at https://gitter.im/xiphiaz/ngml](https://badges.gitter.im/xiphiaz/ngml.svg)](https://gitter.im/xiphiaz/ngml?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/xiphiaz/ngml.svg?branch=master)](https://travis-ci.org/xiphiaz/ngml) 
[![Coverage Status](https://coveralls.io/repos/xiphiaz/ngml/badge.svg?branch=master)](https://coveralls.io/r/xiphiaz/ngml?branch=master)
[![Dependency Status](https://gemnasium.com/xiphiaz/ngml.svg)](https://gemnasium.com/xiphiaz/ngml)
[![npm version](https://badge.fury.io/js/ngml.svg)](http://badge.fury.io/js/ngml)

A more concise alternative to HTML, compatible with plain HTML and angular templates

## Quick Reference

### .ngml
```
    /**
     * Docblock
     */
    tag#id.class[
        attr, //comment
        attr:value,
        @bind:binding,
        &on:callback(),
        =twoway:twowaybinding,
        *template:expression
    ] {
        child-tag(Content {{interpolated}});
        /*! 
            block comment
            output to html
        */
    }
```

### .html
```
<tag 
    id="id" 
    class="class" 
    attr 
    attr="value" 
    [bind]="binding" 
    (on)="callback()" 
    [(twoway)]="twowaybinding" 
    *template="expression">
        <child-tag>Content {{interpolated}}</child-tag>
        <!-- 
            block comment
            output to html
        -->
</tag>
```

## Real world comparison
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
### Compact
ngml ~20% smaller which makes it easier to type and refactor
### Simple
.ngml is easier to read the important parts without the clutter of closing tags and quotation marks
### Familiar Syntax 
Syntax style is c-like, largely based on less/sass which makes it immediately familiar to seasoned developers, and easier to learn for newcomers
### Abstraction of html
This allows for customisation of output eg `[title]="detail.title"` vs `bind-title="detail.title"`
### Comments on attributes
In html, comments within a tag are disallowed. With .ngml line comments are easy and intuitive as they follow familar css patterns
###cleaner multiline attributes. 
In angular you often end up with lots of attributes on the same line, and trying to make
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

Angular form demo
```
    form#login-form[&ngSubmit:onSubmit(), @ngFormModel=form]{
        input[=ngModel:user.username, placeholder:Username];
        input[=ngModel:user.password, placeholder:Password, type:password];
        button[type:submit, @disabled:!form.valid](Save);
    }
    button#login[&login()](Login);
```

## Todo
* Compiler
* Gulp plugin
* Webpack loader plugin
* Sourcemapping
* Online demo
* Intellij syntax plugin
* Sublime syntax plugin
