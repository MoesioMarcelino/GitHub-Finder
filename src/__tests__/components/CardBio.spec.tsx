import React from 'react';
import { render, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';

import openStreetMapAPI from '../../services/api/openStreetMap';

import CardBio from '../../components/CardBio';

const apiOpenStreetMapMock = new MockAdapter(openStreetMapAPI);

describe('CardBio Component', () => {
  it('should be able to get coordinater in Open Street Map API', async () => {
    const getAPI = jest.spyOn(openStreetMapAPI, 'get');

    const coordinates = [
      {
        lat: 10.2,
        lon: 20.3,
      },
    ];

    apiOpenStreetMapMock
      .onGet('', {
        params: {
          q: 'Brazil',
        },
      })
      .reply(200, coordinates);

    await openStreetMapAPI.get('', {
      params: { q: 'Brazil' },
    });

    await waitFor(() => {
      expect(getAPI).toHaveBeenCalled();
    });
  });

  it('should be able to show user informations after search by nickname', async () => {
    const { getByText, getByTestId } = render(
      <CardBio
        name="Moesio Marcelino"
        image="test"
        bio="test"
        amount_repositories={10}
        amount_followers={10}
        amount_following={10}
        amount_stars={10}
        location="test"
        html_url="test"
        login="test"
      />,
    );

    const userNameValue = getByTestId('username').textContent;

    expect(userNameValue).toBe('Moesio Marcelino');
  });
});
