<?php

if ($_GET['v']) {
	$state = stripslashes(strip_tags(trim($_GET['v'])));
} else {
	$state = false;
}
?>

<!DOCTYPE html>
<html class="page" lang="ru">

<head>
	<meta charset="utf-8">
	<meta name="yandex-verification" content="57f2fe396863abf1">
	<meta name="google-site-verification" content="fnoUZOUEBTEZvW54o735m7dLCSjwX1FtgKhCVYy8d60">
	<meta name="copyright" content="https://kartel-masterov.ru">
	<meta name="description" content="Ваша заявка принята! " />
	<meta property="og:type" content="website">
	<meta property="og:title" content="Ремонт квартир под ключ в Москве">
	<meta property="og:description" content="Ремонт под ключ квартир в Москве с материалами стоимость и цены на сайте">
	<meta property="og:url" content="https://kartel-masterov.ru/">
	<meta property="og:image" content="https://kartel-masterov.ru/img/logo.svg">
	<meta property="og:site_name" content="Картель Мастеров">
	<meta property="og:locale" content="ru_RU">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="stylesheet" href="css/style.css">
	<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
	<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
	<link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5">
	<link rel="canonical" href="https://kartel-masterov.ru/video.php" />
	<title>Спасибо за вашу заявку</title>

	<!-- Микроразметка JSON-LD. -->
	<script type="application/ld+json">
		{
			"@context": "http://schema.org",
			"@type": "LocalBusiness",
			"name": "ООО «Картель Мастеров»",
			"image": "https://kartel-masterov.ru/img/logo.svg",
			"telephone": "8 (495) 150-36-51",
			"email": "info@kartel-masterov.ru",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "Гостиничный проезд, дом 6 корпус 2",
				"addressLocality": "Москва"
			}
		}
	</script>
</head>

<body class="page__body page--column">
	<div class="header__wrapper header--fix">
		<header class="page__header header page--center" id="header">
			<a class="header__logo logo" href="/">
				<img class="logo__image" src="img/logo.svg" width="150" height="67" alt="Логотип Картель Мастеров.">
			</a>

			<a class="header__calc button button--primary header__calc--hide" href="/">
				<span class="visually-hidden">Расчет стоимости ремонта</span>
			</a>

			<ul class="schedule list">
				<li class="schedule__time list__item schedule__time--clock">
					<p class="header__text">пн-пт с&nbsp;<time>10:00</time> до&nbsp;<time>20:00</time>,</p>
				</li>
				<li class="schedule__time list__item">
					<p class="header__text">&nbsp;сб с&nbsp;<time>10:00</time> до&nbsp;<time>18:00</time></p>
				</li>
			</ul>
			<div class="header__phone">
				<a class="header__phone-link" href="tel:+74951503651">+7 (495) 150-36-51</a>
				<button class="header__phone-button button button--primary" data-modal="callback">
					<span class="visually-hidden">Контактный телефон - </span><span class="header__phone-text">Заказать звонок</span>
				</button>
			</div>

			<address class="header__contacts header__text">
				Москва, Гостиничный проезд, дом 6&nbsp;корпус&nbsp;2
			</address>

			<nav class="page__navigation nav nav--nojs">
				<button class="nav__burger" type="button">
					<span class="visually-hidden">Включить/Выключить меню</span>
				</button>
				<ul class="menu nav__menu">
					<li class="menu__item submenu">
						<button class="submenu__drop-down" type="button">Ремонт под ключ</button>
						<div class="submenu__list">
							<a class="submenu__item submenu__link" href="/remont-odnokomnatnoj-kvartiry.php">Ремонт однокомнатной
								квартиры</a>
							<a class="submenu__item submenu__link" href="/remont-dvukhkomnatnoj-kvartiry.php">Ремонт двухкомнатной
								квартиры</a>
							<a class="submenu__item submenu__link" href="/remont-trehkomnatnoj-kvartiry.php">Ремонт трехкомнатной
								квартиры</a>
							<a class="submenu__item submenu__link" href="/remont-v-novostroykah.php">Ремонт квартиры новостройки</a>
							<a class="submenu__item submenu__link" href="/kosmeticheskiy-remont-kvartir.php">Косметический ремонт
								квартиры</a>
							<a class="submenu__item submenu__link" href="/kapitalniy-remont-kvartir.php">Капитальный ремонт
								квартиры</a>
							<a class="submenu__item submenu__link" href="/evroremont-kvartir.php">Евроремонт квартиры</a>
							<a class="submenu__item submenu__link" href="/dizajnerskij-remont-kvartir.php">Дизайнерский ремонт
								квартиры</a>
							<a class="submenu__item submenu__link" href="/remont-ofisov-pod-kliuch.php">Ремонт офиса под ключ</a>
							<a class="submenu__item submenu__link" href="/remont-restoranov-kafe.php">Ремонт ресторанов и кафе</a>
							<a class="submenu__item submenu__link" href="/otdelka-kvartir-pod-klyuch.php">Отделка квартиры под
								ключ</a>
							<a class="submenu__item submenu__link" href="/otdelka-kvartir-v-novostrojke.php">Отделка квартиры в
								новостройке</a>
							<a class="submenu__item submenu__link" href="/remont-studii.php">Ремонт квартиры студии</a>
							<a class="submenu__item submenu__link" href="/remont-domov.php">Ремонт домов</a>
						</div>
					</li>
					<li class="menu__item">
						<a class="menu__link" href="/dizajn-proekt-kvartir.php">Дизайн проекты</a>
					</li>
					<li class="menu__item">
						<a class="menu__link" href="/price.php">Цены на ремонт</a>
					</li>
					<li class="menu__item">
						<a class="menu__link" href="/portfolio.php">Портфолио</a>
					</li>
					<li class="menu__item submenu">
						<button class="submenu__drop-down" type="button">Полезное</button>
						<div class="submenu__list">
							<a class="submenu__item submenu__link" href="/video.php">Как сделать ремонт</a>
							<a class="submenu__item submenu__link" data-modal="kontrakt" href="/kontrakt.php">Договор</a>
							<a class="submenu__item submenu__link" href="/snabzhenie-otdelochnymi-materialami.php">Снабжение
								материалами</a>
							<a class="submenu__item submenu__link" href="/aktsii.php">Акции</a>
						</div>
					</li>
					<li class="menu__item">
						<a class="menu__link" href="/contacty.php">Контакты</a>
					</li>
				</ul>
			</nav>
		</header>
	</div>

	<main class="page__content page--center page--column">

		<section class="videoreviews section section--center">
			<?php if ($state) : ?>
				<h2 class="section__title section__title--inherit">Просмотр видео</h2>

				<div class="video">
					<iframe class="video__embed" width="512" height="288" src="https://www.youtube.com/embed/<?= $state ?>" allowfullscreen></iframe>
				</div>

			<? else : ?>
				<h2 class="section__title section__title--inherit error">Ошибка загрузки</h2>
				<p class="section__text section__text--inherit">
					Что-то пошло не так и видео не найдено.
				</p>
			<? endif; ?>
		</section>

	</main>

	<footer class="page__footer footer">

		<section class="footer__links footer__section page--center">
			<h2 class="visually-hidden">Полезные ссылки, статистика и рейтинги сайта Картель-мастеров</h2>
			<p class="footer__logos">
				<a class="footer__logo logo" href="#header">
					<img class="logo__image" src="img/logo.svg" width="150" height="67" alt="Логотип Картель Мастеров.">
				</a>
				<img class="footer__star" src="img/yandex_star.svg" width="65" height="58" alt="Эмблема звезда Яндекса">
			</p>

			<p class="footer__menu">
				<a class="footer__menu-link" data-modal="kontrakt" href="/kontrakt.php">ТИПОВОЙ ДОГОВОР</a>

				<a class="footer__menu-link" href="/sitemap.php">КАРТА САЙТА</a>

				<a class="footer__menu-link" href="/portfolio.php">ПОРТФОЛИО</a>

				<a class="footer__menu-link" href="/contacty.php">КОНТАКТЫ</a>
			</p>

			<p class="footer__socials socials">
				<a class="footer__socials-item footer__phone button" href="tel:+74951503651">
					<span class="visually-hidden">Контактный телефон - +74951503651</span>
				</a>
				<a class="footer__socials-item footer__email button" href="mailto:info@kartel-masterov.ru">
					<span class="visually-hidden">Электронная почта - info@kartel-masterov.ru</span>
				</a>
				<a class="footer__socials-item socials__vk" href="https://vk.com/k_m_moscow" target="_blank">
					<span class="visually-hidden">ВКонтакте</span>
				</a>
				<a class="footer__socials-item socials__telegram" href="https://t.me/kartelmasterov" target="_blank">
					<span class="visually-hidden">Телеграм</span>
				</a>
				<a class="footer__socials-item socials__youtube" href="https://www.youtube.com/channel/UCbQfSw3iZ5F4vX4wGAgnqvg" target="_blank">
					<span class="visually-hidden">Youtube</span>
				</a>
			</p>

			<div class="yandex-badge">
			</div>
			<!--/noindex-->
			<div class="footer__yell-badge">
				<span id="yellrank">Рейтинг на <a href="https://www.yell.ru/moscow/com/ooo-kartel-masterov_11900525/" target="_blank" rel="nofollow noopener"><span class="visually-hidden">Рейтинг на Яндекс</span></a></span>
				<div class="yell-badge">
				</div>
			</div>
			<!--/noindex-->
			<p class="footer__claim">Сайт не является публичной офертой и носит информационный характер</p>
		</section>

		<section class="footer__info footer__section page--center">
			<h2 class="visually-hidden">Дополнительная информация о компантии</h2>
			<a class="footer__text" href="/politikaconf.php" target="_blank">Политика
				конфиденциальности</a>
			<p class="footer__text">Дизайн и ремонт квартир в Москве</p>
			<p class="footer__text">ИНН: 9715290449, ОГРН: 1177746069995 </p>
			<p class="footer__text">&copy;2016-2022 ООО «Картель Мастеров»</p>
		</section>
	</footer>

	<div class="modal" id="calculator">
		<div class="modal__container">
			<button class="modal__close button" type="button">
				<svg class="modal__close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
				</svg>
				<span class="visually-hidden">Закрыть окно</span>
			</button>
			<div class="modal__content">
				<span class="modal__title">Если для вас рассчитали смету в другой компании&nbsp;&mdash;&nbsp;
					мы сделаем&nbsp;вам <br><b>более
						выгодное предложение,</b><br> как минимум, на&nbsp;5%</span>
				<form class="modal__content-feedback form form-js" method="post" action="lib/ruin-nojs.php">

					<label class="form__label">
						<span class="visually-hidden">Ваше имя</span>
						<input class="modal__content-input" type="text" name="name" placeholder="Имя" required>
					</label>

					<label class="form__label">
						<span class="visually-hidden">Ваш номер телефона</span>
						<input class="modal__content-input imaskphone" type="text" name="phone" placeholder="Номер телефона" required>
					</label>
					<p class="form__group">
						При условии, что в нее включены все необходимые работы по СП и СНиП. <br>Нажимая кнопку
						«Получить смету», я даю согласие на обработку введённых мной персональных данных в соответствии с
						<a href="/politikaconf.php" target="_blank" rel="nofollow noopener">Политикой конфиденциальности</a>.
					</p>
					<input type="hidden" name="lead" value="Более выгодное предложение, как минимум, на 5%">
					<input type="hidden" name="token">
					<button class="button button--primary form__submit-js" type="submit">Получить смету</button>
				</form>
			</div>
		</div>
	</div>

	<div class="modal" id="cost">
		<div class="modal__container">
			<button class="modal__close button" type="button">
				<svg class="modal__close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
				</svg>
				<span class="visually-hidden">Закрыть окно</span>
			</button>
			<div class="modal__content">
				<span class="modal__title">Оставьте свои контакты <br><b>и получите в подарок</b></span>
				<ul class="sub-list">
					<li class="sub-list__item">Экспертную консультацию от нашего инженера по ремонту от А до Я</li>
					<li class="sub-list__item">Выезд и расчёт точной сметы</li>
					<li class="sub-list__item">Брошюру со скидками на чистовые материалы у поставщиков </li>
				</ul>
				<form class="modal__content-feedback form form-js" method="post" action="lib/ruin-nojs.php">

					<label class="form__label">
						<span class="visually-hidden">Ваше имя</span>
						<input class="modal__content-input" type="text" name="name" placeholder="Имя" required>
					</label>

					<label class="form__label">
						<span class="visually-hidden">Ваш номер телефона</span>
						<input class="modal__content-input imaskphone" type="text" name="phone" placeholder="Номер телефона" required>
					</label>
					<p class="form__group">
						Нажимая кнопку «Получить подарок», я соглашаюсь с <a href="/politikaconf.php" target="_blank" rel="nofollow noopener">Политикой конфиденциальности</a>, и даю согласие на обработку введённых мной
						персональных данных.
					</p>
					<input type="hidden" name="lead" value="Оставить свои контакты и получить в подарок">
					<input type="hidden" name="token">
					<button class="button button--primary form__submit-js" type="submit">Получить подарок</button>
				</form>
			</div>
		</div>
	</div>

	<div class="modal" id="contract">
		<div class="modal__container modal__container--frame">
			<button class="modal__close button" type="button">
				<svg class="modal__close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
				</svg>
				<span class="visually-hidden">Закрыть окно</span>
			</button>
			<iframe class="modal__content modal__content--frame" src="img/docs/newdogovor.pdf" title="Договор на производство СтроительноМонтажных">
			</iframe>
		</div>
	</div>

	<div class="modal" id="callback">
		<div class="modal__container">
			<button class="modal__close button" type="button">
				<svg class="modal__close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path>
				</svg>
				<span class="visually-hidden">Закрыть окно</span>
			</button>
			<div class="modal__content">
				<span class="modal__title">Оставьте свои контакты <br> и наш специалист свяжется с вами.</span>
				<form class="modal__content-feedback form form-js" method="post" action="lib/ruin-nojs.php">
					<label class="form__label">
						<span class="visually-hidden">Ваше имя</span>
						<input class="modal__content-input" type="text" name="name" placeholder="Имя" required>
					</label>
					<label class="form__label">
						<span class="visually-hidden">Ваш номер телефона</span>
						<input class="modal__content-input imaskphone" type="text" name="phone" placeholder="Ваш номер телефона" required>
					</label>
					<p class="form__group">
						Нажимая кнопку «Оставить контакты», я соглашаюсь с <a href="/politikaconf.php" target="_blank" rel="nofollow noopener">Политикой конфиденциальности</a>, и даю согласие на обработку введённых мной
						персональных данных.
					</p>
					<input type="hidden" name="lead" value="Заказ звонка специалиста">
					<input type="hidden" name="token">
					<button class="button button--primary form__submit-js" type="submit">Оставить контакты</button>
				</form>
			</div>
		</div>
	</div>

	<!-- Значки рейтинга в футере -->
	<script>
		document.addEventListener('DOMContentLoaded', () => {
			setTimeout(function() {
				var y = document.getElementsByClassName("yandex-badge")[0];
				var p = document.createElement('iframe');
				p.width = 150;
				p.height = 50;
				p.frameBorder = 0;
				p.loading = "lazy";
				p.src = "https://yandex.ru/sprav/widget/rating-badge/212862636394";
				y.append(p);
				var ye = document.getElementsByClassName("yell-badge")[0];
				var pe = document.createElement('script');
				pe.src = "https://www.yell.ru/yellrank/yellrank.js/?cmp=11900525&sz=1&bg=1";
				pe.async = true;
				ye.append(pe);
			}, 8000);
		});
	</script>
	<!-- Значки рейтинга в футере -->
	<!-- Yandex metrika -->
	<script>
		document.addEventListener('DOMContentLoaded', () => {
			setTimeout(function() {
				(function(m, e, t, r, i, k, a) {
					m[i] = m[i] || function() {
						(m[i].a = m[i].a || []).push(arguments)
					};
					m[i].l = 1 * new Date();
					k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode
						.insertBefore(k, a)
				})
				(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

				ym(43750869, "init", {
					clickmap: true,
					trackLinks: true,
					accurateTrackBounce: true,
					webvisor: true,
					params: {}
				});
			}, 3000);
		});
	</script>
	<!-- /Yandex metrika -->
	<noscript>
		<div><img src="https://mc.yandex.ru/watch/43750869" style="position:absolute; left:-9999px;" alt="" /></div>
	</noscript>
	<!-- Google analytics -->
	<script>
		document.addEventListener('DOMContentLoaded', () => {
			setTimeout(function() {
				(function(i, s, o, g, r, a, m) {
					i['GoogleAnalyticsObject'] = r;
					i[r] = i[r] || function() {
						(i[r].q = i[r].q || []).push(arguments)
					}, i[r].l = 1 * new Date();
					a = s.createElement(o),
						m = s.getElementsByTagName(o)[0];
					a.async = 1;
					a.src = g;
					m.parentNode.insertBefore(a, m)
				})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

				ga('create', 'UA-96311365-1', 'auto');
				ga('send', 'pageview');
				setTimeout(function() {
					ga('send', 'event', 'Новый посетитель', location.pathname);
				}, 15000);
			}, 3000);
		});
	</script>
	<!-- /Google analytics -->
	<!-- Bitrix сквозная аналитика -->

	<script>
		//Сквозная аналитика
		document.addEventListener('DOMContentLoaded', () => {
			setTimeout(function() {
				(function(w, d, u) {
					var s = d.createElement('script');
					s.async = true;
					s.src = u + '?' + (Date.now() / 60000 | 0);
					var h = d.getElementsByTagName('script')[0];
					h.parentNode.insertBefore(s, h);
				})(window, document, 'https://cdn-ru.bitrix24.ru/b20894278/crm/tag/call.tracker.js');
			}, 3000);
		});
	</script>
	<!-- /Bitrix сквозная аналитика -->
	<!-- Bitrix виджет -->
	<script>
		document.addEventListener('DOMContentLoaded', () => {
			setTimeout(function() {
				(function(w, d, u) {
					var s = d.createElement('script');
					s.async = true;
					s.src = u + '?' + (Date.now() / 60000 | 0);
					var h = d.getElementsByTagName('script')[0];
					h.parentNode.insertBefore(s, h);
				})(window, document, 'https://cdn-ru.bitrix24.ru/b20894278/crm/site_button/loader_1_tpsdoa.js');
			}, 10000);
		});
	</script>
	<div class="bitrix24_async"></div>
	<!-- /Bitrix виджет -->
	<!-- Mango-->
	<script>
		(function(w, d, u, i, o, s, p) {
			if (d.getElementById(i)) {
				return;
			}
			w['MangoObject'] = o;
			w[o] = w[o] || function() {
				(w[o].q = w[o].q || []).push(arguments)
			};
			w[o].u = u;
			w[o].t = 1 * new Date();
			s = d.createElement('script');
			s.async = 1;
			s.id = i;
			s.src = u;
			p = d.getElementsByTagName('script')[0];
			p.parentNode.insertBefore(s, p);
		}(window, document, '//widgets.mango-office.ru/widgets/mango.js', 'mango-js', 'mgo'));
		mgo({
			calltracking: {
				id: 29970,
				elements: [{
					"numberText": "74951503651"
				}]
			}
		});
	</script>
	<!-- Mango-->
	<script src="https://www.google.com/recaptcha/api.js?render=6LdkQqslAAAAAGfvORf8OCclMfKRQvRYaGAWdtjV"></script>
	<script src="js/imask.js"></script>
	<script src="js/app.js"></script>
</body>

</html>
