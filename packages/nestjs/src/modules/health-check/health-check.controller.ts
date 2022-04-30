import { Controller, Get } from '@nestjs/common';

import { HealthCheckService } from './health-check.service';

@Controller('health-check')
export class HealthCheckController {
	constructor(private readonly healthCheckService: HealthCheckService) {}

	@Get()
	healthCheck(): { version: string; now: string } {
		return {
			version: this.healthCheckService.getVersion(),
			now: new Date().toISOString(),
		};
	}
}
