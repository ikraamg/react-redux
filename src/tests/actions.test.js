import configureStore from 'redux-mock-store';

import {
  changeFilter, getEntries, getCategories,
} from '../actions/actions';

const mockStore = configureStore();
const store = mockStore();

describe('actions testing', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('changeFilter', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          category: 'Animals',
          type: 'CHANGE_FILTER',
        },
      ];

      store.dispatch(changeFilter('Animals'));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('getEntries', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          data: [{
            API: 'Cat Facts', Description: 'Daily cat facts', Auth: '', HTTPS: true, Cors: 'no', Link: 'https://alexwohlbruck.github.io/cat-facts/', Category: 'Animals',
          },
          {
            API: 'Cats', Description: 'Pictures of cats from Tumblr', Auth: 'apiKey', HTTPS: true, Cors: 'unknown', Link: 'https://docs.thecatapi.com/', Category: 'Animals',
          },
          ],
          type: 'UPDATE_ENTRIES',
        },
      ];

      store.dispatch(getEntries([{
        API: 'Cat Facts', Description: 'Daily cat facts', Auth: '', HTTPS: true, Cors: 'no', Link: 'https://alexwohlbruck.github.io/cat-facts/', Category: 'Animals',
      },
      {
        API: 'Cats', Description: 'Pictures of cats from Tumblr', Auth: 'apiKey', HTTPS: true, Cors: 'unknown', Link: 'https://docs.thecatapi.com/', Category: 'Animals',
      },
      ]));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('getCategories', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          data: ['Animals', 'Vehicles'],
          type: 'UPDATE_CATEGORIES',
        },
      ];

      store.dispatch(getCategories(['Animals', 'Vehicles']));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
