### https://opytuvannya-95-8b6d406a2d17.herokuapp.com 

# 📚 Проект: Opytuvannya95

**Опис:** Веб-застосунок для тренування знань із комп'ютерної інженерії з використанням AI-оцінювання.

**Дзьобан Максим, Шергіна Олександра, Лушпак Вікторія.**

## 📚 Загальна iдея

* Веб-додаток, що дозволяє проходити тематичні тести.
* Використання OpenAI GPT-4o для оцінювання відповідей.
* Гейміфікація навчання: бали, анекдоти, статистика.
**Мета:** Створити інтерактивний симулятор тестування зі зворотним зв'язком.
**Завдання:**

* Реєстрація/логін
* Вибір теми тесту
* Проходження опитування
* AI-оцінка відповіді
* Статистика та збереження результатів

---

## 🔄 Основний флоу

1. Користувач заходить на сайт
2. Реєструється або логіниться
3. Обирає тему
4. Встановлює кількість питань
5. Проходить тест (таймер, відповіді)
6. Отримує оцінки й коментарі
7. Дивиться бали й статистику

---

## 🌌 Архiтектура системи

**Frontend:** React, Vite

**Backend:** Node.js + Express

**Database:** MongoDB Atlas

**AI:** OpenAI GPT-4o API

**Деплой:** Heroku

---

## 🏠 Архітектурна схема

```
React (SPA)
│
├── App.jsx
├── PopUps.jsx
├── Test.jsx
├── Notepad.jsx
└── Timer.jsx
   
↓ fetch /api/*

Express.js сервер
├── /api/register
├── /api/login
├── /api/questions
├── /api/evaluate ← GPT-4
├── /api/points

↓
MongoDB Atlas
(users, logs)
```

---

## 🌐 React Router

* `/` — WelcomeWindow
* `/about` — NotepadWindow
* `/contacts` — NotepadWindow
* `/test` — SelectTestWindow

Відповідає вимозі про мультисторінковість

---

## 🌈 CSS та UI дизайн

* Власний CSS у стилі Windows 95
* Системні шрифти: W95FA, SilkScreen
* Список стилізованих компонентів:

  * Кнопки з тінями
  * Вікна з заголовками
  * Таймер, блокнот, анімації

---

## ✏️  Основні компоненти

* App.jsx
* PopUps.jsx
* WelcomeWindow\.jsx
* CreateAccountWindow
* SelectTestWindow
* TestWindow
* Timer

---

## 🤳 Використання props

* `CreateAccountWindow` приймає `loginHandler`, `isLoginMode`
* `PopUpWindow` — `title`, `text`, `clickHandler`, `onClose`
* `TestWindow` — `questions`, `username`, `time`

---

## 📂 Робота з useState

* Зберігання:

  * логіну, пароля
  * стейту авторизації
  * вибраної теми
  * питань, відповідей, балів
* Форми: `input`, `textarea`, `select`

---

## 🎓 Форми авторизації

* Введення логіна та пароля
* Використання useState і DOM getElementById
* Форма викликає `fetch('/api/login')` або `fetch('/api/register')`

---

## 📅 Отримання питань з API

* `useEffect` → `fetch('/api/questions')`
* Групування по topics
* Зберігання у useState
* Відображення у PopUpWindow

---

## 🔜 Початок тесту

* Вибір теми з `select`
* Вибір кількості питань
* Валідація (>=1, <= available)
* Випадковий вибір індексів

---

## ⏳ Таймер

* Компонент `Timer`
* Показ годин, хвилин, секунд
* При завершенні → виклик `finishHandler`

---

## 🤞 Завершення тесту

* Натискання кнопки Finish
* Отримання відповідей з `textarea`
* Збереження в `useState`
* Передача до ResultsWindow

---

## 🧐  AI-оцінювання

* `/api/evaluate` — запит до OpenAI
* GPT-4o-mini повертає:

  * score (-4 .. 2)
  * comment
  * ideal\_answer
* Вивід у таблицю `#responses`

---

## 🔹 Збереження балів

* `POST /api/points`
* `{ username, delta }`
* MongoDB: оновлення балів у users

---

## 🔹 Статистика користувача

* Отримання: `GET /api/user/:username`
* Вивід у попап-таблицю
* Врахування тільки оцінених відповідей

---

## 🌄 Інші фічі

* "Anecdote of the Day"
* "Penalty Log" → Google Sheet
* Welcome вікно
* Кастомне лого, іконки

---

## 🏙️ Деплой

* Heroku (free tier)
* `"heroku-postbuild"`: `cd client && npm install && npm run build`
* Один сервер для React + API

---

## 🤖 Як працює клієнт

* Vite app
* `fetch('/api/...')`
* Статичні файли з `/client/dist`
* Відносні URL → універсальність продакшн/локально

---

## 🚀 Тестування

* Ручне тестування:

  * авторизація
  * вибір теми/питань
  * завершення тесту
  * результати
* DevTools → Network → перевірка fetch

---
