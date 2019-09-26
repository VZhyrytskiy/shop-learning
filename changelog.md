1. Проинсталировать Angular-CLI (https://github.com/angular/angular-cli) 
   и/или AngularConsole (https://angularconsole.com)
    - Просмотреть CLI QuickStart https://angular.io/docs/ts/latest/cli-quickstart.html
    - Просмотреть Style Guide https://angular.io/guide/styleguide
    - Просмотреть СLI Commands https://angular.io/cli
    - Просмотреть Deprecation Guide https://angular.io/guide/deprecations 

2. Создайте проект (ng new shop) и загрузите его на гитхаб без каких-либо дополнительных папок.
   Код можете писать для себя в отдельных бренчах. Итоговый код добавляйте в мастер и после этого отправляйте мне.
   В package.json замените содержимое команды start на ng lint && ng serve -o, чтобы при запуске проекта запускался линтинг и открывался браузер

3. Создайте компонент FirstComponent. Используйте его в AppComponent.

4. Добавьте несколько простых свойств для компонента FirstComponent и несколько свойств в виде массива. Выведите их в темплейт:
    - name: string
    - description: string
    - price: number
    - category: enum (Создайте enum с несколькими категориями) https://www.typescriptlang.org/docs/handbook/enums.html
    - isAvailable: boolean
    - ...

5. Создайте компонент ProductComponent. Добавьте кнопку Buy в шаблон. Реализуйте обработчик события клик onBuy(), 
   который выводит в консоль сообщение о покупке товара.

6. Создайте сервис ProductsService, который будет возвращать товары с помощью метода getProducts(). 
   Модель товара ProductModel опишите интерфейсом и/или классом, 
   который реализует данный интерфейс. Создайте массив из нескольких товаров. 
   Создайте компонент ProductListComponent. Используйте в нем сервис ProductsService, получите и отобразите товары на станице 
   c помощью директивы *ngFor.
