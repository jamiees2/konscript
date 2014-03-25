## konscript spec (1.0.0)

### notes

* konscript uses single quotes for strings. Double quotes are not supported.
* konscript uses 4 space characters for indentation. Tabs are not supported.

### files

konscript files are `.kjs`. Should konscript be ported to other languages, the `js` portion may be changed to reflect the new language. (konnby => `.krb`)

### language

* `komment [comment]` - `// [comment]`
* `konni [var] er [value]` - `var [var] = [value]`
* `[var] er [value]` - `[var] = [value]`
* `kdef [name] med [variables]` - `function [name] ([variables])`
* `enda` - `}`
* `enda&` - `})`
* `kall [function] med [variables]` - `[function]([variables])`
* `kall [function] med [variables..] falli [arguments]` - `[function]([variables..], function ([arguments]) {})`
* `ef [params]` - `if ([params])`
* `en ef [params]` - `else if ([params])`
* `en` - `else`
* `kannski` - `!!+Math.round(Math.random())`
* `ekki [params]` - `if (! [params])`
* `medan [params]` - `while ([params])`
* `fyrir [params]` - `for ([params])`
* `kon [module]` - `var [module] = require([module])`
* `kon [module] k [name]` - `var [name] = require([module])`
* `punktur` - `.` (example: `konnsole punktur kon med 'konni' => console.log('konni')`)
* `konnict` - `"use strict"`

### operators

Used in `medan`, `fyrir` and `ef`.

* `erekki` - `!==`
* `er` - `===`
* `og` - `&&`
* `eda` - `||`
* `komma` - `; `
* `sem` - `=`
* `plus` - `+=`
* `minus` - `-=`
* `mikid` - `*=`
* `minna` - `/=`
* `staerraen` - `>`
* `minnaen` - `<`
* `staerraenedajafnt` - `>=`
* `minnaenedajafnt` - `<=`

### standard objects

* `konnsole.kon` - `console.log`
* `konniment` - `document`
* `winkonni` - `window`
