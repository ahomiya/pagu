
# パグ's Front-end Code Guide

Standards for developing flexible, durable, and maintainable HTML, CSS (SCSS), and JavaScript.

## CSS

Before continuing, you should have a general understanding for specificity, the [SCSS](http://www.sass-lang.com) syntax.

### Formatting

#### Selectors

* Keep selectors (tag, class) short and strive to limit the number of elements in each selector to three.

##### Classes

* Use classes over generic element tag for optimum rendering performance.
* Scope classes to the closest parent only when necessary, e.g., when not using prefixed classes.
* Prefix classes based on the closest parent or base class, e.g., `.btn-cta {...}`, `.btn-small {...}`.
* Keep classes lowercase and use dashes (not underscores or camelCase), e.g., `.alert-success {...}`.
* Keep classes as short and succinct as possible but avoid excessive and arbitrary shorthand notation. `.btn` is useful for button, but `.s` doesn't mean anything.
* Use meaningful names; use structural or purposeful names (semantic) over presentational, e.g., `.navbar-menu {...}`.

```
// Not good
.sidebar {
  .search-box {
    background-color: #888;
    height: 25px;
    .search-form {
      float: right;
      text-align: center;
      .search-submit {
        display: inline-block;
        line-height: 1;
      }
    }
  }
}

// Better
.sidebar {
  .search-box {
    background-color: #888;
    height: 25px;
  }
  .search-form {
    float: right;
    text-align: center;
  }
  .search-submit {
    display: inline-block;
    line-height: 1;
  }
}
```

##### Attributes

* Quote attribute values in selectors, e.g., `input[type="text"]`.
* Avoid using several attribute selectors, e.g., `[class^="..."]` on commonly occurring components.

```
// Not good
[class^="col-"] {
  float: left;
  position: relative;
}

// Better
.col-1,
.col-2,
.col-3 {
  float: left;
  position: relative;
}
```


#### Rulesets and declarations

* Use soft tabs with two spaces.
* Include one space after `:` for each declaration, e.g., `right: 15px;`.
* Include one space before the opening brace of declaration blocks for legibility, e.g., `.callout { position: absolute; }`.
* Place closing braces of declaration blocks on a new line.
* When grouping selectors, keep individual selectors to a single line.
* Each declaration should appear on its own line for more accurate error reporting.
* Put line breaks between rulesets. (In instances where a rule set includes only one declaration, consider removing line breaks for readability and faster editing.)
* End all declarations with a semi-colon, e.g., `.callout { bottom: 3px; position: absolute; }`.
* Place media queries as close to their relevant rulesets whenever possible. Don't bundle them all in a separate stylesheet or at the end of the document.

```
.callout,
.article,
.news {
  background-color: #fff;
  position: relative;
  width: 100%;
  z-index: 1;
  
  @media only screen and (min-width: 768px) {
    font-size: 14px;
    width: 80%;
  }
}

.sidebar {
  color: #333;
  display: block;
}

.clearfix { @include clearfix; }
```


#### Properties, values, and units

##### Properties

* Use alphabetical order, e.g., `border-top: #555 solid 1px; color: #999; height: 20px; top: 5px; z-index: 2;`.
* When using vendor prefixed properties, indent each property such that the declaration's value lines up vertically for easy multi-line editing.
* Strive to limit use of shorthand declarations to instances where you must explicitly set all the available values.
* Comma-separated property values should include a space after each comma.

##### Values

* Use hex color codes, e.g., `#fff` unless using `rgba(255,255,255,1)`.
* Use shorthand hex values where available, e.g., `#fff` instead of `#ffffff`.
* Lowercase all hex values, e.g., `#fff`.
* Don't prefix property values or color parameters with a leading zero, e.g., `.5` instead of `0.5` and `-.5px` instead of `-0.5px`.
* Don't include spaces after commas within `rgb()`, `rgba()`, `hsl()`, `hsla()`, or `rect()` values.

##### Units

* Avoid specifying units for zero values, e.g., `margin: 0;` instead of `margin: 0px;`.

```
.accordion {
  border-top: rgba(0,255,255,.5) solid 1px;
  color: #fff;
  padding-top: 0;
  text-shadow: 1px 1px #ff00aa, -2px -2px rgba(255,255,255,1);
  -webkit-transition: width 2s;
          transition: width 2s;
}
```

#### Comments

Code is written and maintained by people. Ensure your code is descriptive, well commented, and approachable by others. Great code comments convey context or purpose. Do not simply reiterate a component or class name.

* Use `// Comment` for comment blocks instead of `/* Comment */`.
* Be sure to write in complete sentences for larger comments and succinct phrases for general notes.

```
// Accordion
// Displays collapsible content panels for presenting information in
// a limited amount of space.

.accordion {...}
```


### Organization
* Organize sections of code by component.
* Develop a consistent commenting hierarchy.
* Use consistent white space to your advantage when separating sections of code for scanning larger documents.
* When using multiple CSS files, break them down by component instead of page. Pages can be rearranged and components moved.

### Micellaneous

* Avoid unnecessary nesting. Just because you can nest, doesn't mean you always should. Consider nesting only if you must scope styles to a parent and if there are multiple elements to be nested. If you cannot help it, step back and rethink your overall strategy (either the specificity needed, or the layout of the nesting).

### Contributors
* [Prakarangs](https://github.com/prakarangs)

### References
* [GitHub style Guide](https://github.com/styleguide)
* [Code Guide by @mdo](http://codeguide.co)