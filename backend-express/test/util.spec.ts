import { expect } from 'chai';
import {} from 'mocha'; // for type definitions
import validate from '../src/util/validate';

describe('util/...', () => {
  it('util/validate', () => {
    const schema = {
      type: 'object',
      properties: {
        numeric: {
          type: 'number',
        },
      },
    };
    const data = {
      numeric: 'aaaa',
    };
    let valid = validate(schema, data);
    expect(valid.errorsText).to.equal('data.numeric should be number');

    const dataB = {
      numeric: 123,
    };
    valid = validate(schema, dataB);
    expect(valid.errorsText).to.equal(undefined);

    const options = {
      useDefault: true,
      coerceTypes: true,
    };

    const schemaB = {
      type: 'object',
      properties: {
        numeric: {
          type: 'number',
          minimum: -1,
          default: 0,
        },
        text: {
          type: 'string',
          default: 'aaa',
        },
      },
    };
    const dataC = {
      text: 'abc',
      numeric: '123',
    };
    valid = validate(schemaB, dataC, options);
    expect(valid.numeric).to.equal(123) // data.numeric is coerced
    expect(valid.errorsText).to.equal(undefined)
  });
});
