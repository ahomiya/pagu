
# Coding style

## CSS

Before continuing, you should have a general understanding for specificity, the SCSS syntax.

### Formatting

#### Properties and values

* Use hex color codes, e.g., `#fff` unless using `rgba(255,255,255,1)`.
* Use shorthand hex values where available, e.g., `#fff` instead of `#ffffff`.
* Lowercase all hex values, e.g., `#fff`.
* Don't prefix property values or color parameters with a leading zero, e.g., `.5` instead of `0.5` and `-.5px` instead of `-0.5px`.
* Avoid specifying units for zero values, e.g., `margin: 0;` instead of `margin: 0px;`.
* Use alphabetical order, e.g., `border-top: #555 solid 1px; color: #999; height: 20px; top: 5px; z-index: 2;`.
* When using vendor prefixed properties, indent each property such that the declaration's value lines up vertically for easy multi-line editing.
* Strive to limit use of shorthand declarations to instances where you must explicitly set all the available values.
* Comma-separated property values should include a space after each comma.
* Don't include spaces after commas within `rgb()`, `rgba()`, `hsl()`, `hsla()`, or `rect()` values.

#### Selectors

* Avoid using several attribute selectors, e.g., `[class^="..."]` on commonly occurring components.
* Quote attribute values in selectors, e.g., `input[type="text"]`.
* Keep selectors short and strive to limit the number of elements in each selector to three.
* Use classes over generic element tag for optimum rendering performance.
* Scope classes to the closest parent only when necessary (e.g., when not using prefixed classes).
* Prefix classes based on the closest parent or base class.
* Keep classes lowercase and use dashes (not underscores or camelCase).
* Keep classes as short and succinct as possible but avoid excessive and arbitrary shorthand notation. `.btn` is useful for button, but `.s` doesn't mean anything.
* Use meaningful names; use structural or purposeful names over presentational.

#### Rulesets and declarations

* Use soft tabs with two spaces.
* Include one space after `:` for each declaration, e.g., `height: 30px; right: 15px;`.
* Include one space before the opening brace of declaration blocks for legibility, e.g., `.callout { position: absolute; }`.
* Place closing braces of declaration blocks on a new line.
* When grouping selectors, keep individual selectors to a single line.
* Each declaration should appear on its own line for more accurate error reporting.
* Put line breaks between rulesets. (In instances where a rule set includes only one declaration, consider removing line breaks for readability and faster editing.)
* End all declarations with a semi-colon, e.g., `.callout { bottom: 3px; position: absolute; }`.
* Place media queries as close to their relevant rulesets whenever possible. Don't bundle them all in a separate stylesheet or at the end of the document.

#### Comments

Code is written and maintained by people. Ensure your code is descriptive, well commented, and approachable by others. Great code comments convey context or purpose. Do not simply reiterate a component or class name.

* Use `//` for comment blocks instead of `/* */`.
* Be sure to write in complete sentences for larger comments and succinct phrases for general notes.

### Organization
* Organize sections of code by component.
* Develop a consistent commenting hierarchy.
* Use consistent white space to your advantage when separating sections of code for scanning larger documents.
* When using multiple CSS files, break them down by component instead of page. Pages can be rearranged and components moved.


### Misc

* Avoid unnecessary nesting. Just because you can nest, doesn't mean you always should. Consider nesting only if you must scope styles to a parent and if there are multiple elements to be nested. If you cannot help it, step back and rethink your overall strategy (either the specificity needed, or the layout of the nesting).
