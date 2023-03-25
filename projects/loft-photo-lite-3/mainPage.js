import model from './model';

export default {
  async getNextPhoto() {
    const { friend, id, url } = await model.getNextPhoto();
    this.setFriendAndPhoto(friend, id, url);
  },

  setFriendAndPhoto(friend, id, url) {
    const photoComp = document.querySelector('.component-photo');
    const headerphotoComp = document.querySelector('.component-header-photo');
    const headerNameComp = document.querySelector('.component-header-name');

    headerphotoComp.style.backgroundimage = `url('${friend.photo_50}')`;
    headerNameComp.innerHTML = `${friend.first_name ?? ''} ${friend.last_name ?? ''}`;
    photoComp.style.backgroundimage = `url(${url})`;
  },

  handleEvents() {
    let startFrom; 

    document.querySelector('.component-photo').addEventListener('touchstart', (e) => {
      e.preventDefault();
      startFrom = { y: e.changedTouches[0].pageY};
    });

    document.querySelector('.component-photo').addEventListener('touchstart', async (e) => {
      e.preventDefault();
      const direction = e.changedTouches[0].pageY - startFrom.y;

      if (direction < 0) {
        await this.getNextPhoto();
      }
    });
  },
};
