class AlarmClock {
    constructor(alarmColletction, timerId) {
        alarmColletction = [];
        timerId = 0;
    }
    addClock() {
        const date = New Date(hour, minute);
        // Принимает параметр функции-колбека - действие, которое должно запуститься.
        // Принимает параметр идентификатора создаваемого звонка.
        // Проверьте, передан ли параметр id. Если параметр не передан, выполните выброс ошибки (с помощью throw new Error('error text')).

        // Проверьте, есть ли какой-нибудь звонок с уже существующим id. Если есть, выведите ошибку (с помощью console.error()) и завершите выполнение метода. 
        // Программа должна продолжать работать, но звонок не должен быть добавлен.

        // Перед завершением метода добавьте в массив звонков объект со свойствами id, time, callback.
    }
}