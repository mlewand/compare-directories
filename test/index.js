'use strict';

const chai = require( 'chai' ),
	expect = chai.expect,
	chaiAsPromised = require( 'chai-as-promised' ),
	compareDirectories = require( '../lib' ),
	path = require( 'path' );

chai.use( chaiAsPromised );

describe( 'compare-directories', function() {
	it( 'fails when directories differ', function() {
		const input = path.join( __dirname, '_fixtures', 'different', 'input' ),
			output = path.join( __dirname, '_fixtures', 'different', 'output' );

		return expect( compareDirectories( output, input, {
			diff: true
		} ) ).to.eventually.be.rejectedWith( 'is different from' );
	} );

	it( 'passes for identical dirs', () => {
		const input = path.join( __dirname, '_fixtures', 'same', 'input' ),
			output = path.join( __dirname, '_fixtures', 'same', 'output' );

		return compareDirectories( output, input, {
			diff: true
		} );
	} );

	it( 'supports can skips incompatible eols', () => {
		const input = path.join( __dirname, '_fixtures', 'eols', 'unixEol' ),
			output = path.join( __dirname, '_fixtures', 'eols', 'winEol' );

		return compareDirectories( output, input, {
			diff: true,
			skipEol: true
		} );
	} );

	it( 'fails with incompatible eols', () => {
		const input = path.join( __dirname, '_fixtures', 'eols', 'unixEol' ),
			output = path.join( __dirname, '_fixtures', 'eols', 'winEol' );

		expect( compareDirectories( output, input, {
			skipEol: false
		} ) ).to.eventually.be.rejected;
	} );
} );