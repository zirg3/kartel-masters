# Для разработки сайта
* Имя сайта - kartel-masterov
---
перед началом работы инициализируем пакет

```
npm i -y
```

после внесения изменений в файлах препроцессора *.scss выполнить

```
npm run build
```

для запуска автоматического отслеживания изменний команда -

```
npm start
```

файлы из папки sass собираются в папку css в файл style.css и создается карта style.css.map
конечный файл стилей на выходе минифицируется плагином автоматически (для отключения закомментировать строку 21 в файле gulpfile.js)