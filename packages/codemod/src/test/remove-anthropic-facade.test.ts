import { describe, it } from 'vitest';
import transformer from '../codemods/remove-anthropic-facade';
import { testTransform } from './test-utils';

describe('remove-anthropic-facade', () => {
  it('transforms correctly', () => {
    testTransform(transformer, 'remove-anthropic-facade');
  });
});