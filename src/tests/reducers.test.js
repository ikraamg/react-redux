import filterReducer from '../reducers/filter';
import itemReducer from '../reducers/items';
import entryReducer from '../reducers/entry';

describe('changeFilter', () => {
  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: 'dummy_action' };
      const initialState = 'All';

      expect(filterReducer(undefined, action)).toEqual(initialState);
    });

    describe('CHANGE_FILTER', () => {
      test('returns the correct state', () => {
        const action = { type: 'CHANGE_FILTER', category: 'Animals' };
        const expectedState = 'Animals';

        expect(filterReducer(undefined, action)).toEqual(expectedState);
      });
    });
  });
});

describe('itemReducer', () => {
  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: 'dummy_action' };
      const initialState = [];

      expect(itemReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('UPDATE_CATEGORIES', () => {
    test('returns the correct state', () => {
      const action = { type: 'UPDATE_CATEGORIES', data: ['Animals', 'Vehicles'] };
      const expectedState = [['Animals', 'Vehicles']];

      expect(itemReducer(undefined, action)).toEqual(expectedState);
    });
  });
});

describe('entryReducer', () => {
  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: 'dummy_action' };
      const initialState = {};

      expect(entryReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('UPDATE_ENTRIES', () => {
    test('returns the correct state', () => {
      const action = {
        type: 'UPDATE_ENTRIES',
        data: [{
          API: 'Cat Facts', Description: 'Daily cat facts', Auth: '', HTTPS: true, Cors: 'no', Link: 'https://alexwohlbruck.github.io/cat-facts/', Category: 'Animals',
        },
        {
          API: 'Cats', Description: 'Pictures of cats from Tumblr', Auth: 'apiKey', HTTPS: true, Cors: 'unknown', Link: 'https://docs.thecatapi.com/', Category: 'Animals',
        },
        ],
      };
      const expectedState = [
        [{
          API: 'Cat Facts', Description: 'Daily cat facts', Auth: '', HTTPS: true, Cors: 'no', Link: 'https://alexwohlbruck.github.io/cat-facts/', Category: 'Animals',
        },
        {
          API: 'Cats', Description: 'Pictures of cats from Tumblr', Auth: 'apiKey', HTTPS: true, Cors: 'unknown', Link: 'https://docs.thecatapi.com/', Category: 'Animals',
        },
        ],
      ];

      expect(entryReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
