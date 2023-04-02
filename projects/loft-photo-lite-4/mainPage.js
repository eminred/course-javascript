import model from './model';
import profilePage from './profilePage';
import pages from './pages';

export default {
  async getNextPhoto() {
    const { friend, id, url } = await model.getNextPhoto();
    this.setFriendAndPhoto(friend, id, url);
  },

  setFriendAndPhoto(friend, id, url) {
    const photoComp = document.querySelector('.component-photo');
    const headerphotoComp = document.querySelector('.component-header-photo');
    const headerNameComp = document.querySelector('.component-header-name');
    const footerPhotoComp = document.querySelector ('.component-footer-photo');

    this.friend = friend;

    headerphotoComp.style.backgroundimage = `url('${friend.photo_50}')`;
    headerNameComp.innerHTML = `${friend.first_name ?? ''} ${friend.last_name ?? ''}`;
    photoComp.style.backgroundimage = `url(${url})`;
    footerPhotoComp.style.backgroundimage = `url('${model.me.photo_50}')`;
  },

  handleEvents() {
    let startFrom; 

    document.querySelector('.component-photo').addEventListener('touchstart', (e) => {
      e.preventDefault();
      startFrom = { y: e.changedTouches[0].pageY};
    });

    document.querySelector('.component-photo').addEventListener('touched', async (e) => {
      const direction = e.changedTouches[0].pageY - startFrom.y;

      if (direction < 0) {
        await this.getNextPhoto();
      }
    });

    document
    .querySelector('.component-header-profile-link')
    .addEventListener('click', async () => {
      await profilePage.setUser(this.friend);
      pages.openPage('profile');
    });

    document 
    .querySelector('.component-footer-container-profile-link')
    .addEventListener('click', async () => {
      await profilePage.setUser(model.me);
      pages.openPage('profile');
    });
  },
};