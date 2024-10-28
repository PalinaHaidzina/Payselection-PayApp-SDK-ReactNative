# Тестовое приложение для SDK на React-Native

## Начало

1. Установка зависимостей

   ```bash
   npm install
   ```

2. Запуск приложения

   ```bash
    npx expo start
   ```
В терминале вы сможете увидеть возможность как запустить приложение на

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Описание

В приложении необходимо выбрать метод оплаты, а так же тип чека: две вкладки внизу обозначают оплату двух типов чеков. 
Для метода оплаты Token необходимо прописать в PaymentDetails соответствующие токен и тип токена в поля PayToken и Type.
 В случае других методов оплат оставить эти поля нетронутыми.

При оплате, получении статуса транзакции по TransactionId или OrderId в консоли будет выводиться вся необходимая информации для проверки прошла ли оплата.
