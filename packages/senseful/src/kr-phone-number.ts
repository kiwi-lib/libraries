/**
 * Extract kr phone number sensibly from the phone number string
 *
 * @param phoneNumber phone number string
 * @param options.withDash if true, output will be separated by '-'.
 * @returns 01000000000, if options.withDash is true, separated by '-' e.g) 010-0000-0000
 */
export function krPhoneNumber(
	phoneNumber: string,
	options?: { withDash?: boolean },
): string {
	const onlyNumbers = phoneNumber.replace(/[^0-9]/g, '');

	if (options?.withDash) {
		return [
			onlyNumbers.slice(0, 3),
			onlyNumbers.slice(3, 7),
			onlyNumbers.slice(7, 11),
		].join('-');
	}

	return onlyNumbers;
}
