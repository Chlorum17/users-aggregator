# REST users-aggregator

## Запуск проекта

1. Склонировать репозиторий командой **git clone https://github.com/Chlorum17/users-aggregator.git**
2. Установить зависимости командой **npm ci --only=production --ignore-scripts** или **npm i**
3. Выполнить команду **docker-compose up -d** или для подключения к своей БД - поменять содержимое **.env** файла в корне проекта
4. Запустить проект командой **npm start** или **npm run dev**

## Описание эндпоинтов

### GET http://localhost:8080/api

Пинг сервера

### GET http://localhost:8080/api/users

Возвращает массив пользователей

#### Необязательные query параметры

- first_name
- last_name
