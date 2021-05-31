import { backendMongo } from './backend-mongo';

describe('backendMongo', () => {
  it('should work', () => {
    expect(backendMongo()).toEqual('backend-mongo');
  });
});
