import StoryblokClient from 'storyblok-js-client';

const baseURL = 'https://api.storyblok.com/v2'

const Storyblok = new StoryblokClient({
  accessToken: 'FNjolXe0RQeP3EWIGPqocAtt',
  cache: {
    clear: 'auto',
    type: 'memory'
  },
  endpoint: baseURL
});

export default Storyblok;