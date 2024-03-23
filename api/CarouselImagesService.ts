import Storyblok from "./StoryblokBaseService";

export default class CarouselImagesService{ 
  async getAllImages() {
    const response = await Storyblok.get('cdn/stories', {
      version: 'published',
    });
    const answer = response.data.stories;
    const images = answer.filter((image: any) => image.full_slug.includes('root'));
    console.log('images', images)
    return images 
  }
}