import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import supertest from 'supertest';

import { HealthCheckModule } from '../health-check.module';
import { HealthCheckService } from '../health-check.service';

describe('HealthCheckController (e2e)', () => {
	let app: INestApplication;
	let request: supertest.SuperTest<supertest.Test>;

	const version = '0.0.0';
	const now = '2022-02-27T13:32:18.883Z';

	beforeEach(async () => {
		HealthCheckService.prototype['readVersionFromPackageJson'] = jest
			.fn()
			.mockReturnValue(version);

		Date.prototype.toISOString = jest.fn().mockReturnValue(now);

		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [HealthCheckModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
		request = supertest(app.getHttpServer());
	});

	it('/health-check (GET)', async () => {
		const { status, body } = await request.get('/health-check');

		expect(status).toBe(HttpStatus.OK);
		expect(body).toEqual({
			version,
			now,
		});
	});
});
