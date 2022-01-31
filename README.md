# Rest-server users-aggregator

## Краткое оглавнение

1. [Запуск проекта](#запуск-проекта);
2. [Описание эндпоинтов](#описание-эндпоинтов);

## Запуск проекта

1. Склонировать репозиторий командой _git clone https://github.com/Chlorum17/users-aggregator.git_
2. Установить зависимости командой _npm ci --only=production --ignore-scripts_ или _npm i_
3. Выполнить команду _docker-compose up -d_ или для подключения к своей БД - поменять содержимое _.env_ файла в корне проекта
4. Запустить проект командой _npm start_ или _npm run dev_

## Описание эндпоинтов

### GET http://localhost:8080/api

Пинг сервера

### GET http://localhost:8080/api/users

Возвращает массив пользователей

#### Необязательные query параметры

- first_name
- last_name
