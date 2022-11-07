import { krPhoneNumber } from './kr-phone-number';

describe('krPhoneNumber', () => {
	it('01012341234', () => {
		expect(krPhoneNumber('01012341234')).toMatchInlineSnapshot(`"01012341234"`);
	});

	it('010.1234.1234', () => {
		expect(krPhoneNumber('010.1234.1234')).toMatchInlineSnapshot(`"01012341234"`);
	});

	it('010-1234-1234', () => {
		expect(krPhoneNumber('010-1234-1234')).toMatchInlineSnapshot(`"01012341234"`);
	});

	it('withDash', () => {
		expect(
krPhoneNumber('010.1234.1234', { withDash: true })).
toMatchInlineSnapshot(`"010-1234-1234"`);
	});
});
