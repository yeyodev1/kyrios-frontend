import Storyblok from "./StoryblokBaseService";

export default class BoletinesService{ 
  async getBoletine (id: string) {
    const response = await Storyblok.get(`cdn/stories/${id}`, {
      version: 'published',
    })
    return response.data.story
  }
  async getAllBoletines() {
    const response = await Storyblok.get('cdn/stories', {
      version: 'published',
      starts_with: 'boletines/'
    });
    return response.data.stories 
  }
}