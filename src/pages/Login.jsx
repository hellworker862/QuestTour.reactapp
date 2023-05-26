import React from 'react'

function Login() {
  return (
    <form class="sign-in__form">
        <div class="sign-in__content">
          <img
            src="/img/Logo_Parmalogica.png"
            alt="Логотип компании"
            class="logo"
          />
          <h2 class="sign-in__title">Авторизация</h2>
          <input
            type="text"
            class="input-text sign-in-input"
            placeholder="Введите логин"
          />
          <input
            type="password"
            class="input-text sign-in-input"
            placeholder="Введите пароль"
          />
          <div class="remember-me">
            <label for="remember-me" class="remember-me__label"
              >Запомнить меня?</label
            >
            <input
              id="remember-me"
              type="checkbox"
              class="remember-me__checkbox"
              placeholder="Запомнить меня?"
            />
          </div>
          <button class="button sign-in__btn" type="submit">Войти</button>
        </div>
      </form>
  )
}

export default Login