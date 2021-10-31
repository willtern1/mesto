(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._headers=e.headers}var n,r;return n=t,r=[{key:"_responseCheck",value:function(e){return e.ok?e.json():Promise.reject(alert("ААААААААААААШИБКА: ".concat(e.status)))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._responseCheck(t)}))}},{key:"getCardsInfo",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._responseCheck(t)}))}},{key:"pathUserData",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._responseCheck(e)}))}},{key:"postCardData",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._responseCheck(e)}))}},{key:"deteleCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e._id),{method:"DELETE",headers:this._headers}).then((function(e){return t._responseCheck(e)}))}},{key:"putLikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._responseCheck(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._responseCheck(e)}))}},{key:"patchAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._responseCheck(e)}))}}],r&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inputList=this._formElement.querySelectorAll(this._inputSelector),this._inputListArray=Array.from(this._inputList)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_disableButtonSubmit",value:function(e){e.classList.add(this._inactiveButtonClass),e.setAttribute("disabled",!0)}},{key:"_enableButtonSubmit",value:function(e){e.classList.remove(this._inactiveButtonClass),e.removeAttribute("disabled")}},{key:"_hasInvalidInput",value:function(){return this._inputListArray.some((function(e){return!e.validity.valid}))}},{key:"_hasEmptyValue",value:function(){return this._inputListArray.some((function(e){return 0===e.value.length}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)||this._hasEmptyValue(this._inputList)?this._disableButtonSubmit(this._buttonElement):this._enableButtonSubmit(this._buttonElement)}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t),t.addEventListener("input",(function(){e._checkInputValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n,r,o){var i=o.handleCardClick,u=o.handleLikeClick,a=o.handleDeleteIconClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t._id,this._owner=t.owner,this._userId=r,this._elementTemplate=n,this._handleCardClick=i,this._handleLikeClick=u,this._handleDeleteIconClick=a}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._elementTemplate).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){this._element=this._getTemplate();var e=this._element.querySelector(".element__image");return this._setEventListeners(),this._trashButton(),this._like(),e.src=this._link,e.alt=this._name,this._element.querySelector(".element__text").textContent=this._name,this._likeButton=this._element.querySelector(".element__button"),this._likesCounter=this._element.querySelector(".element__button-likes-counter"),this._likesCounter.textContent=this._likes.length,this._element}},{key:"_setEventListeners",value:function(){this._element.querySelector(".element__button").addEventListener("click",this._handleLikeClick),this._element.querySelector(".element__trash-button").addEventListener("click",this._handleDeleteIconClick),this._element.querySelector(".element__image").addEventListener("click",this._handleCardClick),this.likesCounterUpdate(),this._likeCheked()}},{key:"_trashButton",value:function(){this._userId!==this._owner._id&&(this._element.querySelector(".element__trash-button").style.display="none")}},{key:"_like",value:function(){var e=this;this._likes.some((function(t){return t._id===e._userId}))?this.likeOn():this.likeOff()}},{key:"likeOn",value:function(){this._element.querySelector(".element__button").classList.add("element__button_active"),this._isLiked=!0}},{key:"likeOff",value:function(){this._element.querySelector(".element__button").classList.remove("element__button_active"),this._isLiked=!1}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"getIdCard",value:function(){return this._id}},{key:"likesCounterUpdate",value:function(e){this._likesCounter=e,this._element.querySelector(".element__button-likes-counter").textContent=this._likesCounter}},{key:"_likeCheked",value:function(){this._likes._id===this._userId&&this._likeButton.classList.add("element__button_active")}}])&&o(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"addItemPrepend",value:function(e){this._container.prepend(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(e){var t=this;this.clear(),e.forEach((function(e){t._renderer(e)}))}}])&&u(t.prototype,n),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popupElement=t}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close-icon"))&&e.close()}))}}])&&c(t.prototype,n),e}(),l=document.querySelector(".profile__edit-button"),f=document.querySelector(".popup_type_edit-profile"),p=document.querySelector(".popup__form_type_edit-profile"),h=p.querySelector(".popup__input_element_name"),_=p.querySelector(".popup__input_element_job"),d=document.querySelector(".profile__name"),y=document.querySelector(".profile__job"),m=document.querySelector(".profile__image"),v=document.querySelector(".elements"),b=(document.querySelector(".popup__input_element_title"),document.querySelector(".popup__input_element_link"),document.querySelector(".popup__form_type_add-place")),k=document.querySelector(".profile__add-card-button"),C=document.querySelector(".popup_type_add-place"),E=document.querySelector(".popup_type_image"),S=document.querySelector(".popup__picture-image"),g=document.querySelector(".popup__title-image"),w=document.querySelector(".popup_type_delete-card"),L=document.querySelector(".profile__avatar-container"),O=document.querySelector(".popup_type_add-avatar"),j=document.querySelector(".popup__form_type_add-avatar"),q=(document.querySelector(".popup__input_avatar_link"),document.querySelector(".popup__button_type_add-avatar")),I=document.querySelector(".popup__button_type_add-place"),P=document.querySelector(".popup__button_type_edit-profile"),T=[],B=document.querySelector(".body__music-icon"),R={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_invalid",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t,n){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},V(e,t,n||e)}function U(e,t){return U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},U(e,t)}function A(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(o){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._link=S,t._title=g,t}return t=u,(n=[{key:"open",value:function(e,t){this._link.src=e,this._link.alt=t,this._title.textContent=t,V(F(u.prototype),"open",this).call(this)}}])&&D(t.prototype,n),u}(s);function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t,n){return G="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=K(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},G(e,t,n||e)}function M(e,t){return M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},M(e,t)}function z(e,t){if(t&&("object"===H(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function K(e){return K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},K(e)}var Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=K(r);if(o){var n=K(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function u(e,t){var n,r=t.callbackFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._callbackFormSubmit=r,n._popupForm=n._popupElement.querySelector(".popup__form"),n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;G(K(u.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._callbackFormSubmit(e._getInputValue())}))}},{key:"_getInputValue",value:function(){var e=this;return this._inputList=this._popupElement.querySelectorAll(".popup__input"),this._popupFormValues={},this._inputList.forEach((function(t){e._popupFormValues[t.name]=t.value})),this._popupFormValues}},{key:"close",value:function(){G(K(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&J(t.prototype,n),u}(s);function W(e){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(e)}function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Y(e,t,n){return Y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ee(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},Y(e,t,n||e)}function Z(e,t){return Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Z(e,t)}function $(e,t){if(t&&("object"===W(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function ee(e){return ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ee(e)}var te=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ee(r);if(o){var n=ee(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return $(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupForm=t._popupElement.querySelector(".popup__form"),t}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;Y(ee(u.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._data()}))}},{key:"submitDeleteCard",value:function(e){this._data=e}}])&&X(t.prototype,n),u}(s);function ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var re=function(){function e(t){var n=t.name,r=t.job,o=t.avatar,i=t.id;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._job=r,this._avatar=o,this._id=i}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e){e.name&&(this._name.textContent=e.name),e.about&&(this._job.textContent=e.about),e.avatar&&(this._avatar.src=e.avatar),e._id&&(this._id.textContent=e._id)}}],n&&ne(t.prototype,n),e}(),oe=new t({url:"https://mesto.nomoreparties.co/v1/cohort-29",headers:{authorization:"10765781-c34f-49ea-91c2-5a34ebcb851f","content-type":"application/json"}});oe.getUserInfo().then((function(e){se.setUserInfo(e)}));var ie=new a({renderer:function(e){ie.addItem(ae(e))}},v);oe.getCardsInfo().then((function(e){ie.renderItems(e)})).catch((function(e){alert("Ошибка загрузки карточек : ".concat(e.status))}));var ue=new te(w);function ae(e){var t=new i(e,"#template-element",T.textContent,{handleCardClick:function(){ce.open(e.link,e.name)},handleLikeClick:function(){t._isLiked?oe.deleteLike(t.getIdCard()).then((function(e){t.likeOff(),t.likesCounterUpdate(e.likes.length)})).catch((function(e){alert("Ошибченко : ".concat(e.status))})):oe.putLikeCard(t.getIdCard()).then((function(e){t.likeOn(),t.likesCounterUpdate(e.likes.length),console.log(e.likes.length)})).catch((function(e){alert("ОшибОчка: ".concat(e.status))}))},handleDeleteIconClick:function(){ue.submitDeleteCard((function(){oe.deteleCard(t).then((function(){t.deleteCard(),ue.close()})).catch((function(e){alert("Ошибася : ".concat(e.status))}))})),ue.open()}});return t.generateCard()}var ce=new N(E),se=new re({name:d,job:y,avatar:m,id:T});function le(e){!0===e?(P.textContent="Сохранение...",I.textContent="Создание...",q.textContent="Сохранение..."):(P.textContent="Сохранить",I.textContent="Создать",q.textContent="Сохранить")}var fe=new Q(f,{callbackFormSubmit:function(e){le(!0),oe.pathUserData(e).then((function(e){se.setUserInfo(e),fe.close()})).catch((function(e){fe.open(),alert("Ошибка при отправке данных на сервер ".concat(e.status))})).finally((function(){le(!1)}))}}),pe=new Q(C,{callbackFormSubmit:function(e){le(!0),oe.postCardData(e).then((function(e){ie.addItemPrepend(ae(e)),pe.close()})).catch((function(e){alert("А не добавить карточку, ошибка :".concat(e.status))})).finally((function(){le(!1)}))}}),he=new Q(O,{callbackFormSubmit:function(e){console.log(e),le(!0),oe.patchAvatar(e).then((function(e){se.setUserInfo(e),he.close()})).catch((function(e){alert("Не удалось обновить аватар , ошибка : ".concat(e.status))})).finally((function(){le(!1)}))}});ue.setEventListeners(),he.setEventListeners(),fe.setEventListeners(),pe.setEventListeners(),ce.setEventListeners(),L.addEventListener("click",(function(){_e.resetValidation(),he.open()})),l.addEventListener("click",(function(){var e=se.getUserInfo();h.value=e.name,_.value=e.job,de.resetValidation(),fe.open()})),k.addEventListener("click",(function(){ye.resetValidation(),pe.open()}));var _e=new r(R,j);_e.enableValidation();var de=new r(R,p);de.enableValidation();var ye=new r(R,b);ye.enableValidation();var me=document.querySelector("#audio");console.log(me),B.addEventListener("click",(function(){B.classList.contains("body__music-icon")?(B.classList.add("body__music-icon_on"),me.volume=.2,me.play()):B.classList.contains("body__music-icon_on")&&(B.classList.remove("body__music-icon_on"),me.pause())}))})();