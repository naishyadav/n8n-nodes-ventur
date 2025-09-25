import { Ventur } from '../src/nodes/Ventur/Ventur.node';

describe('Ventur Node', () => {
	it('should initialize correctly', () => {
		const node = new Ventur();
		expect(node.description.name).toBe('ventur');
		expect(node.description.displayName).toBe('Ventur');
	});

	it('should have properties defined', () => {
		const node = new Ventur();
		expect(node.description.properties).toBeDefined();
		expect(Array.isArray(node.description.properties)).toBe(true);
	});

	it('should have credentials configured', () => {
		const node = new Ventur();
		expect(node.description.credentials).toEqual([
			{
				name: 'venturApi',
				required: true,
			},
		]);
	});
});