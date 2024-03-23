import Storyblok from "./StoryblokBaseService";

export default class TeamInfoService {
  async getAllTeamInfo() {
    const response = await Storyblok.get('cdn/stories', {
      version: 'published',
      starts_with: 'team/'
    });
    const answer = response.data.stories
    console.log('answer', response)
    return answer 
  }
}