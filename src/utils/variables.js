export const editButton = document.querySelector('.profile__edit-button');
export const profilePopup = document.querySelector('.popup_type_edit-profile');
export const profileFormElement = document.querySelector('.popup__form_type_edit-profile');
export const profileNameInput = profileFormElement.querySelector('.popup__input_element_name');
export const profileJobInput = profileFormElement.querySelector('.popup__input_element_job');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const cardsSection = document.querySelector('.elements');
export const popupCardTitleInput = document.querySelector('.popup__input_element_title');
export const popupCardLinkInput = document.querySelector('.popup__input_element_link');
export const cardForm = document.querySelector('.popup__form_type_add-place');
export const addCardButton = document.querySelector('.profile__add-card-button');
export const cardPopup = document.querySelector('.popup_type_add-place');
export const imagePopup = document.querySelector('.popup_type_image');
export const popupImagePicture = document.querySelector('.popup__picture-image');
export const popupImageTitle = document.querySelector('.popup__title-image');
export const validitySelectorList =({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
export const initialCards = [
  {
    name: 'Враг',
    link: 'https://4.downloader.disk.yandex.ru/preview/a89d639eadfb6a400619a82ae7de1a74ea3560bcae89e1a85e2b252354f7f972/inf/XlFBtJ6_HIgwyeIlFkc5tIyv4QufqO0whubHiAy_RE_w01Tbeodpui9FxiK2vXxml72Tc9SnSb72jxgPret_sA%3D%3D?uid=909595364&filename=enemy.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=909595364&tknv=v2&size=1905x947'
  },
  {
    name: 'Пленницы',
    link: 'https://1.downloader.disk.yandex.ru/preview/d7c9e240a8fd002d0f0b1560e2f34ecfea82000301f42afa092d53fe189f69da/inf/kCKrL7dCvwG54O0pKqKnzqXmExLP4qSWjWFlcSPY9xNOoGIdYei0a4aEn2th1yMNzZJWxC04BSkgGjUwdL1Ppg%3D%3D?uid=909595364&filename=Prisoners.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=909595364&tknv=v2&size=1905x947'
  },
  {
    name: 'Убийца',
    link: 'https://4.downloader.disk.yandex.ru/preview/783467c7113f67208bea70ceda0f6aacd9a2d1789a1c3791863b05618cecf824/inf/J3IMSyWtBGaUgxw7AgHkRqXmExLP4qSWjWFlcSPY9xN0zv3coJ1fx6iwMeeN1tyUtKqfFRyFNPFg5LS4G3vbPA%3D%3D?uid=909595364&filename=Sicario.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=909595364&tknv=v2&size=1905x947'
  },
  {
    name: 'Прибытие',
    link: 'https://3.downloader.disk.yandex.ru/preview/1927b6862c2a5e2bfe2785239c8594ff8f271071990c76ec8d359f391293ddbf/inf/eZ-BuCqqUI0pZZNun1xf-KXmExLP4qSWjWFlcSPY9xN-ofHDKJcISzYgDxVkjpOaxgohIFpxw4d6FhGJWundDw%3D%3D?uid=909595364&filename=Arrival%2C.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=909595364&tknv=v2&size=1905x947'
  },
  {
    name: 'Бегущий по лезвию 2049',
    link: 'https://1.downloader.disk.yandex.ru/preview/34c64cd146aba630702e53d343456a05a4e6a55ba07e516fe46ed735f8097c34/inf/8ZkUPQ_upvcJyPhO_qKhi_zFsnZ1rk_tre5xmh7Ru2Wq6-0-ctPVCa9taQf05xEXBhMm3Z3DEAx-cry_CQXZ1g%3D%3D?uid=909595364&filename=Bladerunner-blade-runner-2049.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=909595364&tknv=v2&size=1905x947'
  },
  {
    name: 'Дюна',
    link: 'https://2.downloader.disk.yandex.ru/preview/2fc9e4c838beca3ede7ae0ccd1aaf3bc72f6da56ebc04f5f4bf4ebca79533e34/inf/Q0Uv-r9WiRPI9u-3c6GaAYyv4QufqO0whubHiAy_RE-Usff2B4MtYgStOpnLfkpZ6ETVh_KohWl6XNcZvBWRqw%3D%3D?uid=909595364&filename=Dune.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=909595364&tknv=v2&size=1905x947'
  },
];
