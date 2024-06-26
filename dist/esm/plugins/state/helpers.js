export var RX_STATE_SCHEMA_TITLE = 'RxStateCollection';
export var RX_STATE_ID_LENGTH = 14;
export var RX_STATE_COLLECTION_SCHEMA = {
  title: RX_STATE_SCHEMA_TITLE,
  primaryKey: 'id',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      /**
       * We store numbers in string format like '0001'
       * with a left-pad.
       * TODO instead we should transform the number to a string
       * with the same sort-position to improve performance.
       */
      maxLength: RX_STATE_ID_LENGTH,
      minLength: RX_STATE_ID_LENGTH,
      pattern: '[0-9]+'
    },
    sId: {
      type: 'string',
      maxLength: 10,
      minLength: 10
    },
    ops: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        properties: {
          k: {
            type: 'string'
          },
          v: {
            /**
             * Do not define a type for the value
             * because anything is allowed.
             */
          }
        },
        required: ['k', 'v']
      }
    }
  },
  required: ['id', 'sId', 'ops']
};
export function nextRxStateId(lastId) {
  if (!lastId) {
    return ''.padStart(RX_STATE_ID_LENGTH, '0');
  }
  var parsed = parseInt(lastId, 10);
  var next = parsed + 1;
  var nextString = next.toString();
  return nextString.padStart(RX_STATE_ID_LENGTH, '0');
}
//# sourceMappingURL=helpers.js.map