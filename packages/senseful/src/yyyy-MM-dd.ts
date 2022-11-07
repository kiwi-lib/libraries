/**
 * Extract yyyyMMdd sensibly from the date string
 *
 * @param date date string that includes yyyyMMdd
 * @param options.separator separator of output e.g) '-' or '.' etc..
 * @returns yyyyMMdd, if options.separator exists, separated by options.separator.
 */
export function yyyyMMdd(
	date: string,
	options?: { separator?: string },
): string {
	const yyyyMMdd = date.replace(/[^0-9]/g, '');

	if (options?.separator) {
		return [
			yyyyMMdd.slice(0, 4),
			yyyyMMdd.slice(4, 6),
			yyyyMMdd.slice(6, 8),
		].join(options.separator);
	}

	return yyyyMMdd;
}
