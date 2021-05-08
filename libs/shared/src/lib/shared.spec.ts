import { shared } from './interfaces/settings.interface';

describe('shared', () => {
  it('should work', () => {
    expect(shared()).toEqual('shared');
  });
});
