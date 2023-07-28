// Основные скрипты интерфейса
const doForms = async (data) => {
  const response = await fetch("/lib/run.php", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    credentials: "same-origin"
  });
  if (response.ok) {
    const jVal = await response.json();
    return Promise.resolve(jVal);
  } else
    return Promise.reject("Серверная ошибка отправки данных.");

}

function addSpace(num) {
  let n = num.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
};

let mediaWidth = document.documentElement.clientWidth;

const newMessage = (message, status) => {
  let item = document.createElement('span');
  item.innerHTML = message;
  if (status) {
    item.classList.add("success");
  } else {
    item.classList.add("error");
  }
  return item;
};

//Фиксация шапки
document.querySelector('.header--fix').classList.remove("header--fix");

let h = document.querySelector(".header__wrapper");

function onScroll() {
  window.addEventListener("scroll", callbackFunc);

  function callbackFunc() {
    let y = window.pageYOffset;
    if (y > 150) {
      h.classList.add("header--fix");
    } else {
      h.classList.remove("header--fix");
    }
  }
}

window.onload = () => {
  onScroll();
};





// Мобильная версия навигационного меню
document.querySelector(".nav--nojs").classList.remove("nav--nojs");

let burger = document.querySelector(".nav__burger");
let menuMobile = document.querySelector(".nav__menu");

burger.addEventListener('click', (e) => {
  e.preventDefault();
  menuMobile.classList.toggle("nav__menu--open");
  burger.classList.toggle("nav__burger--open");
});


// Модальные окна
if (document.querySelector("#calculator") !== null) {
  let modalCalc = document.querySelector("#calculator");
  let modalCalcButton = document.querySelector("[data-modal=calculator]");
  let modalCalcClose = modalCalc.querySelector(".modal__close");

  if (modalCalcButton) {
    modalCalcButton.addEventListener('click', (e) => {
      e.preventDefault();

      if (!modalCalc.classList.contains("modal--open")) {
        modalCalc.classList.add("modal--open");
      }
    });
  }


  modalCalcClose.addEventListener('click', (e) => {
    e.preventDefault();

    if (modalCalc.classList.contains("modal--open")) {
      modalCalc.classList.remove("modal--open");
    }
  });

}

// Мобильная версия калькулятора
if ((document.querySelector(".header__calc") !== null)) {
  let calcBtn = document.querySelector(".header__calc"),
    calcBody = document.querySelector(".hero__calc");

  if (calcBtn) {

    if (calcBody) { // Проверяем есть ли на странице секция Hero то вызываем калькулятор
      calcBtn.addEventListener('click', (e) => {
        e.preventDefault();
        calcBody.classList.toggle('hero__calc--open');
        calcBtn.classList.toggle('header__calc--opened');
        if (calcBody.classList.contains('hero__calc-ext')) calcBody.classList.toggle('hero__calc--separate');
      });
    } else { // Если ли на странице нет секции Hero то вызываем модалку
      calcBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!modalCalc.classList.contains("modal--open")) {
          modalCalc.classList.add("modal--open");
        }
      });
    }

  }

  let calcBtnPrice = document.querySelector(".price__link-calk")
  if (calcBtnPrice) {
    calcBtnPrice.addEventListener('click', (e) => {
      e.preventDefault();
      if (!modalCalc.classList.contains("modal--open")) {
        modalCalc.classList.add("modal--open");
      }
    });
  }
}

if (document.querySelector("#cost") !== null) {
  let modalCost = document.querySelector("#cost");
  let modalCostButtons = document.querySelectorAll("[data-modal=cost]");
  let modalCostClose = modalCost.querySelector(".modal__close");

  if (modalCost && modalCostButtons && modalCostClose) {
    modalCostButtons.forEach((modalCostButton) => {
      modalCostButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (!modalCost.classList.contains("modal--open")) {
          modalCost.classList.add("modal--open");
        }
      });
    });

    modalCostClose.addEventListener('click', (e) => {
      e.preventDefault();

      if (modalCost.classList.contains("modal--open")) {
        modalCost.classList.remove("modal--open");
      }
    });
  }

}

if (document.querySelector("#contract") !== null) {
  let modalContract = document.querySelector("#contract");
  let modalContractButton = document.querySelectorAll("[data-modal=kontrakt]");
  let modalContractClose = modalContract.querySelector(".modal__close");

  if (modalContract && modalContractButton && modalContractClose) {
    modalContractButton.forEach(
      (item) => {
        item.addEventListener('click', (e) => {
          e.preventDefault();

          if (!modalContract.classList.contains("modal--open")) {
            modalContract.classList.add("modal--open");
          }
        });
      });

    modalContractClose.addEventListener('click', (e) => {
      e.preventDefault();

      if (modalContract.classList.contains("modal--open")) {
        modalContract.classList.remove("modal--open");
      }
    });
  }

}

if (document.querySelector("#callback") !== null) {
  let modalCallback = document.querySelector("#callback");
  let modalCallbackButton = document.querySelectorAll("[data-modal=callback]");
  let modalCallbackClose = modalCallback.querySelector(".modal__close");

  if (modalCallback && modalCallbackButton && modalCallbackClose) {
    modalCallbackButton.forEach(
      (item) => {
        item.addEventListener('click', (e) => {
          e.preventDefault();

          if (!modalCallback.classList.contains("modal--open")) {
            modalCallback.classList.add("modal--open");
          }
        });
      });

    modalCallbackClose.addEventListener('click', (e) => {
      e.preventDefault();

      if (modalCallback.classList.contains("modal--open")) {
        modalCallback.classList.remove("modal--open");
      }
    });
  }
}

if (document.querySelector("#discount") !== null) {
  let modalDiscount = document.querySelector("#discount");
  let modalDiscountButton = document.querySelectorAll("[data-modal=discount]");
  let modalDiscountClose = modalDiscount.querySelector(".modal__close");

  if (modalDiscount && modalDiscountButton && modalDiscountClose) {
    modalDiscountButton.forEach(
      (item) => {
        item.addEventListener('click', (e) => {
          e.preventDefault();

          if (!modalDiscount.classList.contains("modal--open")) {
            modalDiscount.classList.add("modal--open");
          }
        });
      });

    modalDiscountClose.addEventListener('click', (e) => {
      e.preventDefault();

      if (modalDiscount.classList.contains("modal--open")) {
        modalDiscount.classList.remove("modal--open");
      }
    });
  }
}


/*
//Примеры работ и дизайнов
let tabsTogglers = document.querySelectorAll("[data-examples]");
let tabs = document.querySelectorAll(".examples__tab");
let tabActive = document.querySelectorAll(".examples__link--active");
let btnMore = document.querySelector(".examples__more");
let tabMore = document.querySelectorAll(".examples__tab--active .examples__item--hidden");

function examplesToggle(toggler) {
	toggler.addEventListener('click', (event) => {
		event.preventDefault();

		if (!toggler.classList.contains('examples__link--active')) {
			document.querySelector('.examples__link--active').classList.remove('examples__link--active');
			document.querySelector('.examples__tab--active').classList.remove('examples__tab--active');
			setTab(toggler.getAttribute('data-examples'));
			toggler.classList.add('examples__link--active');
		}
	});
}

function setTab(id) {
	document.querySelector("#" + id).classList.add("examples__tab--active");
	tabMore = document.querySelectorAll(".examples__tab--active .examples__item--hidden");
}

if (tabsTogglers) {
	tabsTogglers.forEach((example) => {
		examplesToggle(example);
	});
}

if (btnMore) {
	btnMore.addEventListener('click', (e) => {
		e.preventDefault();
		tabMore.forEach((tab) => {
			tab.classList.remove("examples__item--hidden");
		});
	});
}
*/

//Управление прокруткой
// Раздел видео обзоры
let btnPrev = document.querySelector(".videoreviews .carousel__prev");
let btnNext = document.querySelector(".videoreviews .carousel__next");
let videoPosts = document.querySelectorAll(".videoreviews__demo-item");
let conutPosts = videoPosts.length;
let startIndx = 0;
let endIndx = document.querySelectorAll(".videoreviews .carousel__slide--desktop").length - 1;

if (btnPrev && btnNext && videoPosts) {

  btnNext.addEventListener('click', (event) => {
    event.preventDefault();
    if (mediaWidth > 1190) {
      if (endIndx < conutPosts - 1) {
        if (videoPosts[startIndx].classList.contains("carousel__slide--mobile") && videoPosts[startIndx].classList.contains("carousel__slide--desktop")) {
          videoPosts[startIndx].classList.remove("carousel__slide--mobile");
          videoPosts[startIndx].classList.remove("carousel__slide--desktop");
          startIndx++;
          videoPosts[startIndx].classList.add("carousel__slide--mobile");
          endIndx++;
          videoPosts[endIndx].classList.add("carousel__slide--desktop");
        }
      }
    } else {
      if (startIndx < conutPosts - 1) {
        if (videoPosts[startIndx].classList.contains("carousel__slide--mobile")) {
          videoPosts[startIndx].classList.remove("carousel__slide--mobile");
          startIndx++;
          videoPosts[startIndx].classList.add("carousel__slide--mobile");
        }
      }
    }

  });

  btnPrev.addEventListener('click', (event) => {
    event.preventDefault();
    if (mediaWidth > 1190) {
      if (startIndx > 0) {
        if (videoPosts[startIndx].classList.contains("carousel__slide--mobile") && videoPosts[startIndx].classList.contains("carousel__slide--desktop")) {
          videoPosts[startIndx].classList.remove("carousel__slide--mobile");
          videoPosts[endIndx].classList.remove("carousel__slide--desktop");
          endIndx--;
          startIndx--;
          videoPosts[startIndx].classList.add("carousel__slide--mobile");
          videoPosts[startIndx].classList.add("carousel__slide--desktop");
        }
      }
    } else {
      if (startIndx > 0) {
        if (videoPosts[startIndx].classList.contains("carousel__slide--mobile")) {
          videoPosts[startIndx].classList.remove("carousel__slide--mobile");
          startIndx--;
          videoPosts[startIndx].classList.add("carousel__slide--mobile");
        }
      }
    }

  });
}


// Раздел виды ремонта

let prev = document.querySelector(".repairs__demo .carousel__prev");
let next = document.querySelector(".repairs__demo .carousel__next");
let repairPosts = document.querySelectorAll(".repairs__type");
let conutRepairs = repairPosts.length;
let startRepairs = 0;
let endRepairs = document.querySelectorAll(".repairs__types .carousel__slide--desktop").length - 1;

if (prev && next && repairPosts) {

  next.addEventListener('click', (event) => {
    event.preventDefault();
    if (mediaWidth > 1190) {
      if (endRepairs < conutRepairs - 1) {
        if (repairPosts[startRepairs].classList.contains("carousel__slide--mobile") && repairPosts[startRepairs].classList.contains("carousel__slide--desktop")) {
          repairPosts[startRepairs].classList.remove("carousel__slide--mobile");
          repairPosts[startRepairs].classList.remove("carousel__slide--desktop");
          startRepairs++;
          repairPosts[startRepairs].classList.add("carousel__slide--mobile");
          endRepairs++;
          repairPosts[endRepairs].classList.add("carousel__slide--desktop");
        }
      }
    } else {
      if (startRepairs < conutRepairs - 1) {
        if (repairPosts[startRepairs].classList.contains("carousel__slide--mobile")) {
          repairPosts[startRepairs].classList.remove("carousel__slide--mobile");
          startRepairs++;
          repairPosts[startRepairs].classList.add("carousel__slide--mobile");
        }
      }
    }
  });

  prev.addEventListener('click', (event) => {
    event.preventDefault();
    if (mediaWidth > 1190) {
      if (startRepairs > 0) {
        if (repairPosts[startRepairs].classList.contains("carousel__slide--mobile") && repairPosts[startRepairs].classList.contains("carousel__slide--desktop")) {
          repairPosts[startRepairs].classList.remove("carousel__slide--mobile");
          repairPosts[endRepairs].classList.remove("carousel__slide--desktop");
          endRepairs--;
          startRepairs--;
          repairPosts[startRepairs].classList.add("carousel__slide--mobile");
          repairPosts[startRepairs].classList.add("carousel__slide--desktop");
        }
      }
    } else {
      if (startRepairs > 0) {
        if (repairPosts[startRepairs].classList.contains("carousel__slide--mobile")) {
          repairPosts[startRepairs].classList.remove("carousel__slide--mobile");
          startRepairs--;
          repairPosts[startRepairs].classList.add("carousel__slide--mobile");
        }
      }
    }
  });
}


// Раздел видео отзывы

let prevTestestimonial = document.querySelector(".testimonials__video .carousel__prev");
let nextTestestimonial = document.querySelector(".testimonials__video .carousel__next");
let testimonialPosts = document.querySelectorAll(".testimonials__video-item");
let conutTestestimonials = testimonialPosts.length;
let startTestestimonials = 0;
let endTestestimonials = document.querySelectorAll(".testimonials__video-items .carousel__slide--desktop").length - 1;

if (prevTestestimonial && nextTestestimonial && testimonialPosts) {
  nextTestestimonial.addEventListener('click', (event) => {
    event.preventDefault();
    if (mediaWidth > 1190) {
      if (endTestestimonials < conutTestestimonials - 1) {
        if (testimonialPosts[startTestestimonials].classList.contains("carousel__slide--mobile") && testimonialPosts[startTestestimonials].classList.contains("carousel__slide--desktop")) {
          testimonialPosts[startTestestimonials].classList.remove("carousel__slide--mobile");
          testimonialPosts[startTestestimonials].classList.remove("carousel__slide--desktop");
          startTestestimonials++;
          testimonialPosts[startTestestimonials].classList.add("carousel__slide--mobile");
          endTestestimonials++;
          testimonialPosts[endTestestimonials].classList.add("carousel__slide--desktop");
        }
      }
    } else {
      if (startTestestimonials < conutTestestimonials - 1) {
        if (testimonialPosts[startTestestimonials].classList.contains("carousel__slide--mobile")) {
          testimonialPosts[startTestestimonials].classList.remove("carousel__slide--mobile");
          startTestestimonials++;
          testimonialPosts[startTestestimonials].classList.add("carousel__slide--mobile");
        }
      }
    }
  });
  prevTestestimonial.addEventListener('click', (event) => {
    event.preventDefault();
    if (mediaWidth > 1190) {
      if (startTestestimonials > 0) {
        if (testimonialPosts[startTestestimonials].classList.contains("carousel__slide--mobile") && testimonialPosts[startTestestimonials].classList.contains("carousel__slide--desktop")) {
          testimonialPosts[startTestestimonials].classList.remove("carousel__slide--mobile");
          testimonialPosts[endTestestimonials].classList.remove("carousel__slide--desktop");
          endTestestimonials--;
          startTestestimonials--;
          testimonialPosts[startTestestimonials].classList.add("carousel__slide--mobile");
          testimonialPosts[startTestestimonials].classList.add("carousel__slide--desktop");
        }
      }
    } else {
      if (startTestestimonials > 0) {
        if (testimonialPosts[startTestestimonials].classList.contains("carousel__slide--mobile")) {
          testimonialPosts[startTestestimonials].classList.remove("carousel__slide--mobile");
          startTestestimonials--;
          testimonialPosts[startTestestimonials].classList.add("carousel__slide--mobile");
        }
      }
    }
  });
}

// Раздел команда картеля

let prevTeam = document.querySelector(".team__composition .carousel__prev");
let nextTeam = document.querySelector(".team__composition .carousel__next");
let teamPosts = document.querySelectorAll(".team__person");
let conutTeam = teamPosts.length;
let startTeam = 0;
let endTeam = document.querySelectorAll(".team__list .carousel__slide--desktop").length - 1;

if (prevTeam && nextTeam && teamPosts) {
  nextTeam.addEventListener('click', (event) => {
    event.preventDefault();
    if (mediaWidth > 1190) {
      if (endTeam < conutTeam - 1) {
        if (teamPosts[startTeam].classList.contains("carousel__slide--mobile") && teamPosts[startTeam].classList.contains("carousel__slide--desktop")) {
          teamPosts[startTeam].classList.remove("carousel__slide--mobile");
          teamPosts[startTeam].classList.remove("carousel__slide--desktop");
          startTeam++;
          teamPosts[startTeam].classList.add("carousel__slide--mobile");
          endTeam++;
          teamPosts[endTeam].classList.add("carousel__slide--desktop");
        }
      }
    } else {
      if (startTeam < conutTeam - 1) {
        if (teamPosts[startTeam].classList.contains("carousel__slide--mobile")) {
          teamPosts[startTeam].classList.remove("carousel__slide--mobile");
          startTeam++;
          teamPosts[startTeam].classList.add("carousel__slide--mobile");
        }
      }
    }
  });
  prevTeam.addEventListener('click', (event) => {
    event.preventDefault();
    if (mediaWidth > 1190) {
      if (startTeam > 0) {
        if (teamPosts[startTeam].classList.contains("carousel__slide--mobile") && teamPosts[startTeam].classList.contains("carousel__slide--desktop")) {
          teamPosts[startTeam].classList.remove("carousel__slide--mobile");
          teamPosts[endTeam].classList.remove("carousel__slide--desktop");
          endTeam--;
          startTeam--;
          teamPosts[startTeam].classList.add("carousel__slide--mobile");
          teamPosts[startTeam].classList.add("carousel__slide--desktop");
        }
      }
    } else {
      if (startTeam > 0) {
        if (teamPosts[startTeam].classList.contains("carousel__slide--mobile")) {
          teamPosts[startTeam].classList.remove("carousel__slide--mobile");
          startTeam--;
          teamPosts[startTeam].classList.add("carousel__slide--mobile");
        }
      }
    }
  });
}

//Маска телефона

let phoneInputs = document.querySelectorAll(".imaskphone");
let maskOptions = {
  mask: '+{7}(000)000-00-00',
  lazy: false
};

phoneInputs.forEach((phoneInput) => {
  IMask(phoneInput, maskOptions);
});

// Обработка формы team__leade-feedback

let form = document.querySelector(".team__leade-feedback");
//let apeealWrapper = document.querySelector(".team__leader-appeal-wrapper");
let appealMessage = document.querySelector(".team__leader-appeal");
let appealLead = document.querySelector("[name=dir]");
let appealToken = document.querySelector("[name=token]");
let message;
let state;

let btnSend = document.querySelector(".team__leader-appeal-submit");

if (btnSend && appealMessage && appealLead && form) {

  btnSend.addEventListener("click", (e) => {
    e.preventDefault();

    let data = "message=" + appealMessage.value + "&lead=" + appealLead.value + "&trace=" + b24Tracker.guest.getTrace();

    if (message) {
      message.remove();
    }

    grecaptcha.ready(() => {
      grecaptcha.execute('6Lc9prcmAAAAAP0LeLhmqduGqJXFEkipCuYGmQYn', {
        action: 'submit'
      }).then((token) => {
        data = data + "&token=" + token;
        appealToken.value = token;

        doForms(data).then(
          (resp) => {
            //apeealWrapper.remove();
            //message = form.appendChild(newMessage(resp.message, resp.result));
            if (resp.result) {
              state = "?state=" + resp.result;
              location = "/thank/" + state;
            }
          }
        ).catch(
          (error) => {
            //apeealWrapper.remove();
            //message = form.appendChild(newMessage(error, false));
            state = false;
            location = "/thank/?state=" + state;
          }
        );
      });
    });

  });

}

// Обработка форм с данными пользователя (имя / телефон)
let forms = document.querySelectorAll(".form-js");

forms.forEach((elements) => {
  let name;
  let phone;
  let lead;
  let btnSubmit;

  for (let item of elements) {
    if (item.getAttribute("type") == "submit") {
      btnSubmit = item;
    }
    if (item.getAttribute("name") == "phone") {
      phone = item;
    }
    if (item.getAttribute("name") == "name") {
      name = item;
    }
    if (item.getAttribute("name") == "lead") {
      lead = item;
    }
    if (item.getAttribute("name") == "token") {
      secret = item;
    }
  }

  if (btnSubmit) {
    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      let data = "name=" + name.value + "&phone=" + phone.value + "&lead=" + lead.value + "&trace=" + b24Tracker.guest.getTrace();;

      if (message) {
        message.remove();
      }

      grecaptcha.ready(() => {
        grecaptcha.execute('6Lc9prcmAAAAAP0LeLhmqduGqJXFEkipCuYGmQYn', {
          action: 'submit'
        }).then((token) => {
          data = data + "&token=" + token;
          secret.value = token;

          doForms(data).then(
            (resp) => {
              //message = elements.appendChild(newMessage(resp.message, resp.result));
              if (resp.result) {
                state = "?state=" + resp.result;
                location = "/thank/" + state;
              }
            }
          ).catch(
            (error) => {
              //message = elements.appendChild(newMessage(error, false));
              state = false;
              location = "/thank/?state=" + state;
            }
          );
        });
      });

    });
  }

});


//Swiper portfolio
let swiperPortf1 = document.querySelector('.swiper-1')
let swiperPortf2 = document.querySelector('.swiper-2')

if (swiperPortf1 && swiperPortf2) {
  var swiper = new Swiper(".swiper-2", {
    lazy: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".swiper-1", {
    lazy: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
}

//price table
let groups = document.querySelectorAll('.price__table-group');
if (groups) {
  groups.forEach(group => {
    let buttons = group.querySelectorAll('.wp-block-button');
    let tables = group.querySelectorAll('.wp-block-table');
    buttons.forEach((button, index) => {
      button.addEventListener('click', (event) => {
        if (!tables[index]) {
          return null;
        }
        buttons.forEach(button => {
          button.classList.remove('examples__link--active');
        });
        tables.forEach(table => {
          table.classList.remove('examples__tab--active');
        });
        buttons[index].classList.add('examples__link--active');
        tables[index].classList.add('examples__tab--active');
      });
    });
  });
}

// contacts-page--active contacts-page--active-btn
//contacts switch map
let contacts_maps = document.querySelectorAll('.maps__item')
let contacts_address = document.querySelectorAll('.maps__address-item')
let contacts_btn = document.querySelectorAll('.maps__control-button')
let contacts_office = document.querySelectorAll('.contacts-page-office')

if (contacts_maps && contacts_address && contacts_btn && contacts_office) {
  function contacts_toggler() {
    contacts_btn.forEach((btn, idx) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(123);
        contacts_btn.forEach(button => {
          button.classList.remove('contacts-page--active-btn');
        });
        contacts_maps.forEach(map => {
          map.classList.remove('contacts-page--active');
        });
        contacts_address.forEach(address => {
          address.classList.remove('contacts-page--active');
        });
        contacts_office.forEach(office => {
          office.classList.remove('contacts-page--active');
        });

        btn.classList.add('contacts-page--active-btn');
        contacts_maps[idx].classList.add('contacts-page--active');
        contacts_address[idx].classList.add('contacts-page--active');
        contacts_office[idx].classList.add('contacts-page--active');
      })
    })
  }
  contacts_toggler()
}

//individual toggler more list
let individual_content = document.querySelectorAll('.individual__content')
if (individual_content) {
  individual_content.forEach((i) => {
    let btns = i.querySelectorAll('.individual__btn-full')
    let list = i.querySelectorAll('.individual__list-disabled')
    btns.forEach((btn, idx) => {
      btn.addEventListener('click', (e) => {
        if(e.target.textContent === 'Развернуть') {
          e.target.textContent = 'Свернуть'
        } else {
          e.target.textContent = 'Развернуть'
        }
        list.forEach(item => {
          item.classList.toggle('individual--active')
        })
      })
    })
  })
}

//snabzhenie-otdelochnymi-materialami toggl list
let supplyList = document.querySelectorAll('.supply__list')

if(supplyList) {
  supplyList.forEach((listI) => {
    let list = listI.querySelectorAll('.supply__materials')
    let btns = listI.querySelectorAll('.supply__item-btn')
    btns.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        if(btns[idx].classList.contains('supply__item-btn-active')) {
          btns[idx].classList.remove('supply__item-btn-active')
          list[idx].classList.remove('supply__materials-active')
        } else {
          btns.forEach(btn => {
            btn.classList.remove('supply__item-btn-active')
          })
          list.forEach(list => {
            list.classList.remove('supply__materials-active')
          })
          btns[idx].classList.add('supply__item-btn-active')
          list[idx].classList.add('supply__materials-active')
        }
      })
    })
  })
}

//Плавная подгрузка данных
const loadMore = async (data) => {
  const response = await fetch("/wp-admin/admin-ajax.php", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    credentials: "same-origin"
  });
  if (response.ok) {
    const jVal = await response.json();
    return Promise.resolve(jVal);
  } else
    return Promise.reject("Не удалось отправить данные.");
}

function getData(element, page) {
  data = 'action=load_more_' + element.getAttribute('data-more') + '&paged=' + page;
  return data;
}

let currentPage = 1;
let btnMore = document.querySelector('[data-more]');
let moreList = (document.querySelector(".examples__tab") !== null) ? document.querySelector('.examples__tab') : '';

if (document.querySelector("[data-more]") !== null && btnMore && moreList !== '' ) {

  btnMore.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage++;
    //console.log(btnMore.getAttribute('data-more'));
    data = getData(btnMore,currentPage);
    //console.log(data);

    loadMore(data).then(
      (resp) => {
        moreList.innerHTML += resp.html;
        //console.log(resp.max);
        if(currentPage >= resp.max) {
          btnMore.remove();
        }
      }
    ).catch(
      (error) => {
        moreList.appendChild(newMessage(error, false));
      }
    );

  })

}

// Калькулятор (код не работает в Сафари)

var calculatorRange = document.querySelector(".hero__calc-area-range");

if (calculatorRange) {
  var calculatorNumber = document.querySelector(".hero__calc-area-input");
  var constructionType = document.querySelector("#construction-type");
  var repaireType = document.querySelector("#repair-type");
  var objectType = document.querySelectorAll("[name=hrepairtype]");
  var additionalType = document.querySelectorAll(".hero__calc-item--control");
  var priceFileld = document.querySelector(".hero__calc-total-js");
  var dateFromFileld = document.querySelector(".hero__calc-period-from");
  var dateToFileld = document.querySelector(".hero__calc-period-to");

  var typeCoeff = 0; //Коэффициент вид ремонта (косметический/евро/ и тд)
  var constructionCoeff = 0; //Коэффициент тип помещения (квартира/офис и тд)
  var objectCoeff = 0; // Коэффициент новотройка/вторичка
  var additionalCoeff = 0; // Коэффициент доп услуги
  var totalCoeff = 0; // Суммарный коэффициент
  var repairSpace = 0; // Площадь помещения
  var totalPrice = 0; // Стоимость
  var daysFrom = 0;
  var daysTo = 0;

  function calcUpdate() {
    typeCoeff = parseFloat(repaireType.value);
    constructionCoeff = parseFloat(constructionType.value);
    objectCoeff = parseFloat(document.querySelector("[name=hrepairtype]:checked").value);
    additionalCoeff = 1 + calculateAdditional();
    totalCoeff = typeCoeff * constructionCoeff * objectCoeff * additionalCoeff;
    repairSpace = parseInt(calculatorRange.value);
    totalPrice = (totalCoeff * repairSpace).toFixed(0);
    daysFrom = (totalPrice / 10000).toFixed(0);
    daysTo = (totalPrice / 7000).toFixed(0);
    totalPrice = (totalPrice * 0.09).toFixed(0);

    priceFileld.textContent = addSpace(totalPrice);
    dateFromFileld.textContent = daysFrom;
    dateToFileld.textContent = daysTo;
  }

  calcUpdate();

  calculatorRange.addEventListener('input', () => {
    calculatorNumber.value = calculatorRange.value;
    repairSpace = parseInt(calculatorNumber.value);
    calcUpdate();
  });

  calculatorNumber.addEventListener('input', () => {
    calculatorRange.value = calculatorNumber.value;
    repairSpace = parseInt(calculatorRange.value);
    calcUpdate();
  });

  repaireType.addEventListener('input', () => {
    typeCoeff = parseFloat(repaireType.value);
    calcUpdate();
  });

  constructionType.addEventListener('input', () => {
    constructionCoeff = parseFloat(constructionType.value);
    calcUpdate();
  });

  objectType.forEach(
    (item) => {
      item.addEventListener('input', (e) => {
        objectCoeff = parseFloat(item.value);
        calcUpdate();
      });
    });

  additionalType.forEach(
    (item) => {
      item.addEventListener('input', (e) => {
        additionalCoeff = calculateAdditional();
        calcUpdate();
      });
    });

  function calculateAdditional() {
    var coeff = 0;
    additionalType.forEach(
      (item) => {
        if (item.checked) {
          coeff += parseFloat(item.value);
        }
      });
    return coeff;
  }

}
