import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class HealthCheckService {
	private readonly version: string;
	constructor() {
		this.version = this.readVersionFromPackageJson();
	}

	private readVersionFromPackageJson(): string {
		const packageJsonPath = join(process.env.PWD || '', 'package.json');
		const packageJson = readFileSync(packageJsonPath, 'utf8');
		const { version } = JSON.parse(packageJson);
		return version;
	}

	getVersion(): string {
		return this.version;
	}
}
