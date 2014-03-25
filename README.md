This is an implementation of the now best language ever! (konscript)

And yes, I am very aware I went about a very, er, *non-conventional*, way of parsing a language, and is probably riddled with bugs and edge-cases. However, this is dogescript, so anything goes!

```
    konni konscript er 'very konni'

	kdef konn med foo bar bat
	    kall console.kon med foo
	    kdef nested
	        kall konnsole.kon med ['konni', 'kon']
	    enda
	    kall nested
	enda bar
```


### Installation

`npm install -g konscript`

### Usage

#### Command Line

`konscript` without a file launches a REPL.

`konscript location/to/konscript.kjs` pipes the result to stdout. Use a command like `konscript konscript.kjs > compiled.js` to save to a file.

Options:

* `--beautify` - Runs the code through a beautifier.

#### Javascript

`konscript(file, beauty, trueDoge)`
* `file` - A string of Dogescript.
* `beauty` - A boolean, set to true if you want the output to be ran through a beautifier.
* `trueDoge` - A boolean, set to true if you want to enable true-doge mode.

### Language

Check out `LANGUAGE.md` for some documentation. Otherwise, look at the example files in this repo.

