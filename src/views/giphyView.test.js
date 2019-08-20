import { shallow } from 'enzyme';
import { GiphyView } from './giphyView';
import React from 'react';

describe('giphyView', () => {
  describe('no props', () => {
    const wrapper = shallow(<GiphyView />);
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  describe('props passed ', () => {
    const mockData = {
      data: [
        {
          images: {
            original: {
              url: 'original_url_1',
            },
            special: {
              url: 'special_url_1',
            },
          },
        },
        {
          images: {
            original: {
              url: 'original_url_2',
            },
            special: {
              url: 'special_url_2',
            },
          },
        },
        {
          images: {
            original: {
              url: 'original_url_3',
            },
            special: {
              url: 'special_url_3',
            },
          },
        },
      ],
    };

    const wrapper = shallow(<GiphyView giphyData={mockData} />);
    it('should render correctly', () => {
      const image = wrapper.find('.image');
      const { src, alt } = image.props();
      expect(src).toEqual(mockData.data[0].images.original.url);
      expect(alt).toEqual('weather-gif');
    });

    it('should handle click', () => {
      const image = wrapper.find('.image');
      image.simulate('click');
      const imageUrls = [
        mockData.data[0].images.original.url,
        mockData.data[1].images.original.url,
        mockData.data[2].images.original.url,
      ];
      expect(imageUrls).toContain(image.props().src);
    });
  });
});
