# compare-directories

A simple function for to assert two directories.

I just needed it for some project, and it made sense to extract it into a separate package. But it wasn't tested in any other project than mine, due to time constraints. This is why lib might not necessairly suit other use cases. If you fill you're up for the task, feel free to drop pull request. Any PRs are welcome.

## Installation

```sh
$ npm install --save-dev compare-directories
```

## Usage

```js
const compareDirectories = require( 'compare-directories' );

it( 'passes for identical dirs', () => {
	const input = path.join( __dirname, '_fixtures', 'same', 'input' ),
		output = path.join( __dirname, '_fixtures', 'same', 'output' );

	return compareDirectories( output, input, {
		diff: true,
		skipEol: true
	} );
} );
```

## Options

`compareDirectories` function takes few options:

* `skipEol` - Boolean - Whether different End-of-Line markers should be ignored. Defaults to `true`.
* `diff` - Boolean - Whether diff should be displayed if assertion fails. Defaults to `false`.

## License

MIT © Marek Lewandowski
