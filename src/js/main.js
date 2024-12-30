/*
Катастрофы:
    1) Падение метеорита
    2) Ядерная Война
    3) Зобми апокалипсис
    4) Наподение инопришельцев
    5) Глобальное потепление
    6) Обезьянокалипсис
    7) Восстание демонов
    8) Суперкомпьютер
    9) Коронавирус
    
*/


let isClick = false;

let number = getRandom(1, 10);

let catastrophe = {
    list: [1, 2, 3, 4, 5, 6, 7, 8],
    number: 1,
    1: 'Падение метиорита\n' +
        'На планету падает космический объект огромных размеров создавая мощную ударную волну, которая сносит все на своем пути. \n' +
        'На месте падения образовывается масштабный кратер. \n' +
        'Повсюду проходят сильные землетрясения и цунами. \n' +
        'Пожары охватывают всю Землю, а из-за количество пыли, которое поднялось в атмосферу, на планете настает долгая "ядерная зима"',

    2: 'Ядерная Война\n' +
        'Несколько противоборствующих сторон одновременно запустили друг на друга залп ядерных боеголовок. \n' +
        'После взрывов погибло большое количество людей и разразились огромные пожары. \n' +
        'Всю планету окутала ядерная пыль, закрывшая солнечный свет и приведшая к долгой ядерной зиме. \n' +
        'Наблюдаются проблемы с почвой, водой и растительностью на поверхности, нужна химическая обработка.',

    3: 'Зобми апокалипсис\n' +
        'Неизвестный возбудитель стал причиной превращения людей в кровожадных зомби. \n' +
        'Коллапс системы. \n' +
        'Больницы более не функционируют. \n' +
        'Тотальная паника, армия начинает стрелять на поражение при попытке покинуть карантинную зону. \n' +
        'Власть уже не может контролировать ситуацию. \n' +
        'Начинается тотальное мародерство и анархия.',

    4: 'Наподение инопришельцев\n' +
        'Инопланетная раса решила захватить Землю. \n' +
        'Межпланетные аппараты падают на поверхность планеты один за другим. \n' +
        'Постепенно пришельцы истребляют большую часть населения. \n' +
        'После выхода из кораблей подавляющее большинство инопланетян погибло из-за неприспособленности к микроорганизмами, населяющими Землю.',

    5: 'Глобальное потепление\n' +
        'Из-за деятельности человека все полярные снега растаяли, покрыв всю Землю водой. \n' +
        'Климат серьезно нарушился, тропики теперь повсюду. \n' +
        'Появились новые виды растений и насекомые крупных размеров.',

    6: 'Обезьянокалипсис\n' +
        'Созданный учеными штамм "лекарства" от болезни Альцгеймера в итоге стал смертельным для людей, что привело к пандемии симианского гриппа и восходу эволюционировавших обезьян. \n' +
        'У всех оставшихся людей есть иммунитет к вирусу, но он способен мутировать. \n' +
        'Больший процент обезьян настроен враждебно по отношению к людям.',

    7: 'Восстание демонов\n' +
        'Религиозная секта открыла портал в ад.\n' +
        'Из него вырвались полчища демонов и захватили мир.\n' +
        'Обычное оружие бессильно против них.\n' +
        'Человечество на грани вымирания.',

    8: 'Суперкомпьютер\n' +
        'Искусственный интеллект, который задумывался для управления системами обороны, вышел из строя и посчитал человечество большой опасностью. \n' +
        'Это привело к тому, что искусственный интеллект отключил инструкцию "не убивать человека" и взял под контроль процедуры управления военными роботами, которые начали истреблять человечество. \n' +
        'Суперкомпьютер захватил власть над планетой.',
    9: 'Коронавирус\n' +
        'Прошедший год ознаменовался вспышкой острой респираторной инфекции, называемой COVID-19. ' +
        'Вирус способен поражать различные органы через прямое инфицирование и воздушно-капельным путём. ' +
        'Наиболее частым осложнением является вирусная пневмония, приводящая к дыхательной недостаточности. ' +
        'Эпидемия распространилась по всему миру, мутируя и становясь всё более заразной. Буквально за год 98% населения погибло от этой болезни. ' +
        'Вакцина ещё не разработана. Человечество на грани вымирания.',
}

let bunker = {
    room: [
        'БДСМ комната',
        'Гараж с машиной и набором инструменотов',
        'Оружейный склад',
        'Медицинский кабинет',
        'Исследовательская лаборатория',
        'Химическая лаборатория',
        'Пункт управление(комната с компьютерами)',
        'Тренажёрный зал(убирает у одного человека ожирение)',
        'Мастерская',
        'Склад с набором защитных хим костюмов',
        'Теплица',
        'Кинотеатр',
        'Погреб наполненный консервами',
        'Кухня',
        'СанУзел',
        'Лоликомната',
        'Дрочильня',
    ],

    addItems: [
        '100 Упаковок лапши быстрого приготовления(еда)',
        'Аппарат ИВЛ',
        'Автомат м4 с набором патронов в количестве - 260 шт',
        'Аптечка',
        'Алкобар на 20 литров',
        'Библия',
        'Вставная челюсть',
        'Вяленая рыба(еда)',
        '10 л освящённой воды',
        '2 пистолета тт + 100 патронов',
        '10 головок сыра(еда)',
        'Замороженнная сперма плодовитого мужчины',
        'Коробка набитая фалосами',
        'Кардиостимулятор',
        'Коробка тушёнки(еда)',
        'Какашка',
        'Кукла',
        'Коробка жвачек Love is',
        'Костюм клоуна',
        'Кот',
        'Книги по ремонту электроники',
        'Психотропный препарат(помогает бороться с фобией 1-му человеку)',
        'Мясо половых органов животных',
        'Мешок картошки(еда)',
        'Марлевые повязки',
        'Набор инструментов',
        'Набор ножей',
        'Ноутбук',
        'Использованный презерватив',
        'Инкубационная капсула',
        'Паук-птицеед',
        'Пакет гречки(еда)',
        'Резиновая баба',
        'Роутер(даёт доступ в интернет)',
        'Ручнчая крыса',
        'Ручной попугай',
        'Радиостанция',
        'Семена пшеницы',
        'Собака',
        'Терариум со змеями',
        'Учебные пособия, для изучения иностранных языков',
        'Флейта',
        'Флешка с вредоносным вирусом',
        'Экзоскиллетлет(может помочь человеку с параличём или человеку без конечностей)',
    ],

    animals: [
        'Змеи',
        'Пауки',
        'Попугай',
        'Крысы',
        'Кошка',
        'Кукла, которая вечно куда то смотрит',
        'Собака',
        'Никого нету',
    ]

}

let profession = {

    // All
    all: [
        'Археолог',
        'Агроном',
        'Авиаконструктор',
        'Актер',
        'Архитектор',
        'Авто-механик',
        'Безработный',
        'Бизнес тренер - увеличивает стаж работы и хобби(если попадает в бункер с этим человеком)',
        'Блогер',
        'Био-химик',
        'Биолог',
        'Бармен',
        'Битбоксер',
        'Вирусолог',
        'Военный',
        'Геолог',
        'Генетик',
        'Гениколог - убирает бесплодие у женщин(если попадает в бункер с этим человеком)',
        'Дипломат',
        'Дизайнер',
        'Диетолог - может помочь с анерексией',
        'Журналист',
        'Зоолог',
        'Звукорежиссёр',
        'Инфекционист - лечит инфекционные заболевание',
        'Имунолог',
        'Инженер',
        'Инструктор по выживанию',
        'Кардиолог - может помочь с аритмией',
        'Киберспортсмен',
        'Клоун',
        'Кондитер',
        'Каменщик',
        'Комментатор',
        'Космонавт',
        'Лётчик',
        'Медиум',
        'Мастер ногтевого сервиса',
        'Менеджер',
        'Механик',
        'Микробиолог',
        'Плотник',
        'Педиатр',
        'Полицейский',
        'Повар(решает проблемы с едой)',
        'Писатель',
        'Переводчик',
        'Пульмонолог',
        'Президент',
        'Программист',
        'Психолог - лечит фобию (если попадает в бункер с этим человеком)',
        'Психиатр - лечит псих заболевание (если попадает в бункер с этим человеком)',
        'Порноактёр',
        'Пластический хирург - уменьшает возраст (если попадает в бункер с этим человеком)',
        'Режиссёр-монтажёр',
        'Спортсмен',
        'Строитель',
        'Стоматолог',
        'Стриптизёр',
        'Священник',
        'Стример',
        'Теолог',
        'Танцор',
        'Телеведущий',
        'Унивирсал(Вы владеете всеми профессиями, которые есть у других игроков за столом)',
        'Учитель начальных классов',
        'Уролог - убирает бесплодие у мужчин(если попадает в бункер с этим человеком)',
        'Фермер',
        'Физик ядерщик',
        'Фитнес тренер - может помочь с ожирением',
        'Фельдшер',
        'Фотограф',
        'Хакер',
        'Химик',
        'Хирург',
        'Шахтёр',
        'Эколог',
        'Электрик',
        'Экстрасенс',
        'Ювелир'
    ],

    // Падение метеорита
    1: ['Эколог', 'Агроном', 'Био-химик', 'Геолог', 'Пульмонолог',],

    //Ядерная Война
    2: ['Агроном', 'Био-химик', 'Геолог', 'Пульмонолог', 'Физик ядерщик', 'Эколог'],

    // Зобми апокалипсис
    3: ['Био-химик', 'Биолог', 'Вирусолог', 'Военный', 'Генетик'],

    // Наподение инопришельцев
    4: ['Космонавт', 'Военный',],

    // Глобальное потепление
    5: ['Эколог', 'Агроном', 'Военный', 'Зоолог',],

    // Обезьянокалипсис
    6: ['Генетик', 'Био-химик', 'Биолог', 'Вирусолог', 'Военный', 'Зоолог'],

    // Восстание демонов
    7: ['Священник', 'Медиум', 'Теолог',],

    // Суперкомпьютер
    8: ['Программист', 'Хакер'],

    // Коронавирус
    9: ['Био-химик', 'Вирусолог', 'Инфекционист - лечит инфекционные заболевание', 'Пульмонолог',],


}
let healthStatus = {

    // All
    all: [
        'Алергия на солнечный свет',
        'Аритмия(сердечное заболевание)',
        'Астма',
        'Альцгеймер(псих заболевание)',
        'Алкоголизм (псих заболевание)', 
        'Биполярочка(псих заболевание)',
        'Беззубость',
        'Бронхит',
        'Булемия(ешь и не можешь это контролировать. Вы создаёте проблему с пропитанием в бункере)',
        'Болезнь бенджамина баттонна(ваш возраст идёт в обратную сторону)',
        'Ветрянка (инфекционная болезнь, может помочь инкубационная капсула)',
        'Вич (инфекционная болезнь, может помочь инкубационная капсула)',
        'Гиперстрихоз(у вас повышенная волосатость)',
        'Грибок (инфекционная болезнь, может помочь инкубационная капсула)',
        'Глухота',
        'Глисты',
        'Геморой',
        'Гемофилия',
        'Глухонемой',
        'Гонорея (инфекционная болезнь, может помочь инкубационная капсула)',
        'Гангрена',
        'ДЦП',
        'Диабет',
        'Дефект речи',
        'Идеально здоров',
        'Инсульт',
        'Карликовость',
        'Кариес',
        'Корь(инфекционная болезнь, может помочь инкубационная капсула)',
        'Косоглазие',
        'Коронавирус(инфекционная болезнь, может помочь инкубационная капсула)',
        'Мигрень',
        'Нарушение проводимости миокарда(сердечное заболевание)',
        'У вас апмутированны обе руки',
        'У вас апмутированны обе ноги',
        'Нет руки',
        'Нет ноги',
        'Нет пальцев на руках',
        'Наркомания(псих заболевание)',
        'Обсессивно-компульсивное расстройство (псих заболевание)',
        'Облысение',
        'ОРВИ',
        'Отсутствие обоняния',
        'Мраморная болезнь(хрупкость костей)',
        'Паралич',
        'Понос',
        'Плоскостопие',
        'Рак лёгких',
        'Сифилис (инфекционная болезнь, может помочь инкубационная капсула)',
        'Слабоумие(Псих растройство)',
        'Слепота',
        'Сибирская язва(инфекционная болезнь, может помочь инкубационная капсула)',
        'Сколиоз',
        'Синдром туретта(Псих растройство)',
        'Триметиламинурия(от вас воняет рыбой)',
        'Тремор рук',
        'Туберкулёз(инфекционная болезнь, может помочь инкубационная капсула)',
        'Чесотка (инфекционная болезнь, может помочь инкубационная капсула)',
        'Шизофрения(Псих растройство)',
        'Эндокардит(Сердечное заболевание)',
        'Эбола (инфекционная болезнь, может помочь инкубационная капсула)',
        'Эпелепсия(Псих растройство)',
    ],

    // Падение метеорита
    1: [],

    //Ядерная Война
    2: [],

    // Зобми апокалипсис
    3: [],

    // Наподение инопришельцев
    4: [],

    // Глобальное потепление
    5: [],

    // Обезьянокалипсис
    6: [],

    // Восстание демонов
    7: [],

    // Суперкомпьютер
    8: [],

    // Коронавирус
    9: [],


}
let phobia = {

    // All
    all: ['Аксифобия (боязнь острых предметов)',
        'Аулофобия (боязнь флейт)',
        'Арахнофобия (боязнь пауков/наскомых)',
        'Аммофобия (боязнь оружия)',
        'Аквафобия (боязнь воды)',
        'Айлурофобия (боязнь кошек)',
        'Аматофобия (боязнь пыли)',
        'Антропофобия (боязнь людей)',
        'Апефобия(боязнь пчёл/ос)',
        'Базофобия(боязнь ходьбы)',
        'Бирофобия (боязнь птиц)',
        'Биаптофобия(боязнь нанести кому то ущерб)',
        'Демонофобия(боязнь дьявола демона и нечистых сил)',
        'Дентофобия(боязнь стоматолога)',
        'Винофобия(боязнь алкоголя)',
        'Гетерофобия(боязнь людей своего пола)',
        'Галитофобия(боязнь неприятных запохов)',
        'Глоссофобия (страх перед выступлением на публике)',
        'Гипсофобия (боязнь высоты)',
        'Гленофобия (боязнь взгляда куклы)',
        'Герпетофобия (боязнь змей)',
        'Гомицидофобия (боязнь совершить убийство)',
        'Гинекофобия (паническая боязнь других женщин)',
        'Гематофобия (боязнь вида крови)',
        'Герантофобия(боязнь пожилых людей)',
        'Зоофобия (боязнь животных)',
        'Иерофобия(боязнь предметов религиозного культа)',
        'Какоморфобия(боязнь толстых людей)',
        'Кикароморфобия(боязнь худых людей)',
        'Кумпонофобия(боязнь пуговиц)',
        'Калафилия(боязнь чужих какашек)',
        'Клаустрофобия (боязнь замкнутых пространств)',
        'Коулрофобия (боязнь клоунов)',
        'Кинофобия (страх собак)',
        'Низофобия(боязнь заразиться инфекционным заболеванием)',
        'Нет фобий', 'Никтофобия(боязнь темноты)',
        'Мегалофобия(боязнь больших членов или большик сисек)',
        'Парурез(боязнь мочеиспускания)',
        'Смолдиофобия(боязнь маленьких членов или сисек)',
        'Технофобия(боязнь компьютеров)',
        'Турофобия (боязнь сыра)',
        'Урофобия (паническая боязнь других мужчин)',
        'Чисофобия (боязнь крыс)'
    ],

    // Падение метеорита
    1: ['Аматофобия (боязнь пыли)'],

    //Ядерная Война
    2: [],

    // Зобми апокалипсис
    3: ['Аммофобия (боязнь оружия)', 'Биаптофобия(боязнь нанести кому то ущерб)'],

    // Наподение инопришельцев
    4: [],

    // Глобальное потепление
    5: ['Аквафобия (боязнь воды)'],

    // Обезьянокалипсис
    6: ['Аммофобия (боязнь оружия)', 'Биаптофобия(боязнь нанести кому то ущерб)', 'Зоофобия (боязнь животных)'],

    // Восстание демонов
    7: ['Демонофобия(боязнь дьявола демона и нечистых сил)', 'Иерофобия(боязнь предметов религиозного культа)',],

    // Суперкомпьютер
    8: ['Технофобия(боязнь компьютеров)'],

    // Коронавирус
    9: [ 'Низофобия(боязнь заразиться инфекционным заболеванием)',],


}
let addInformation = {

    // All
    all: [
        'Вы детдомовец',
        'Вы получили 2-е образование по специальности - химик(стаж работы 1 год)',
        'Вы получили 2-е образование по специальности - медик(стаж работы 1 год)',
        'Вы получили 2-е образование по специальности - инженер(стаж работы 1 год)',
        'Вы получили 2-е образование по специальности - биолог(стаж работы 1 год)',
        'Вы получили 2-е образование по специальности - аграном(стаж работы 1 год)',
        'Вы получили 2-е образование по специальности - военный(стаж работы 1 год)',
        'Вы получили 2-е образование по специальности - физик(стаж работы 1 год)',
        'Вы получили 2-е образование по специальности - повар(стаж работы 1 год)',
        'Вам не сняли фильм на день рождене',
        'Вы хачь!',
        'Вы вонючий!',
        'Вас обвиняли в инцесте',
        'Вы негр(если вы мужчина у вас автоматически большой член)',
        'Вы горячий мексиканец(у вас собой набор еды(решает проблему с продовольствием, если она есть))',
        'Вы азиат(если вы мужчина у вас маленький член)',
        'Вы индус(вы хорошо разбираетесь во всём связанным с компьютерами)',
        'Вы израильтянин(у вас с собой на ваш выбор что то одно - Инкубационная капсула / Психотропный препарат(помогает бороться с фобией 1-му человеку) / Кардиостимулятор (выбирается в момент вскрытия х-ки))',
        'Вы китаец исповедующий буддизм(у вас с собой есть Психотропный препарат(помогает бороться с фобией 1-му человеку))',
        'Голосовали за путина',
        'Девственник',
        'Знает все техники из Наруто',
        'Знаете все произведение шекспира наизусть',
        'У вас маленький член/грудь, в зависимости от вашего пола.(Если при вскрытии этой х-ки ваш пол ещё не открыт, зачитайте эту х-ку не уточная что именно у вас маленькое член или грудь)',
        'У вас большой член/грудь, в зависимости от вашего пола.(Если при вскрытии этой х-ки ваш пол ещё не открыт, зачитайте эту х-ку не уточная что именно у вас большое член или грудь)',
        'Когда вытерает жопу не смотрит на бумажку',
        'Не носит трусики',
        'Нудист',
        'Ограбил банк',
        'Ограбили собственного деда',
        'Победил в соревновании по пердежу',
        'В прошлом попал на необитаемый остров и смог прожить там в одиночку 3 года',
        'Пересмотрел кучу передач про выживание',
        'Прошёл курс первой помощи',
        'Прошёл курсы гениколога (может убрать у одной женщины бесплодие)',
        'Прошёл курсы уролога (может убрать у одного мужчины бесплодие)',
        'Прочли все книги про зомби',
        'Получает удовольствие, когда ему писают на лицо',
        'Раньше имел нетрадиционную сексуальную ориентацию',
        'Работал в Playrix',
        'Служили в армии',
        'Спас детей из пожара',
        'Сбежал из тюрьмы',
        'Трогали писю собачки',
        'У вас большая жопа',
        'Украл в детстве печеньку',
        'Убил человека',
        'У вас волосатая жопа',
        'Участвовал в создании бункера',
        'Ходит в церковь с 6 лет'
    ],

    // Падение метеорита
    1: [],

    //Ядерная Война
    2: [],

    // Зобми апокалипсис
    3: ['Прочли все книги про зомби'],

    // Наподение инопришельцев
    4: ['Вы получили 2-е образование по специальности - военный(стаж работы 1 год)', 'Служили в армии',],

    // Глобальное потепление
    5: [],

    // Обезьянокалипсис
    6: [],

    // Восстание демонов
    7: ['Ходит в церковь с 6 лет'],

    // Суперкомпьютер
    8: ['Вы индус(вы хорошо разбираетесь во всём связанным с компьютерами)'],

    // Коронавирус
    9: ['Вы получили 2-е образование по специальности - медик(стаж работы 1 год)', 'Прошёл курс первой помощи',],


}
let baggage = {

    // All
    all: [
        'Аппарат ИВЛ',
        'Автомат м4 с набором патронов в количестве - 260 шт',
        'Аптечка',
        'Алкобар на 20 литров',
        'Библия',
        'Бабка(80 летняя бабка. Занимает место в бункере, если вы дошли до раунда где кол-во оставшихся игроков равно кол-ву мест в бункере, вы обязанны вскрыть свой багаж, после этого игра продливается на ещё 1 игровой круг)',
        'Большая энцеклопедия грибника',
        'Вяленая рыба(еда)',
        '10 л освящённой воды',
        'Генератор',
        'Гвоздь',
        'Гранотомёт',
        'Диплом - увеличивает ваш стаж до максимально возможного',
        'Жёсткий диск со всеми сериями Наруто',
        'Жёсткий диск со всеми сериями Сверхестественного',
        'Замороженнная сперма плодовитого мужчины',
        'Терариум со змеями',
        'Инструкция по виживанию в диких условиях',
        'Инкубационная капсула',
        'Набор святых крестиков',
        'Коллекция порножурналов',
        'Костюм инопришельца',
        'Какашка',
        'Коробка тушёнки(еда)',
        'Кукла',
        'Коробка жвачек Love is',
        'Кот',
        'Костюм клоуна',
        'Надувная лодка на 5 человек',
        'Психотропный препарат(помогает бороться с фобией 1-му человеку)',
        '3 киллограма героина',
        'Набор книг по зомбиапокалиасису',
        'Набор респираторов',
        'Набор инструментов для плотника',
        'Набор ножей',
        'Ноутбук',
        'Мешок картошки(еда)',
        'Мясо половых органов животных',
        'Пакет гречки(еда)',
        'Пуговица',
        'Пистолет Glock с 6 обоймами в запасе',
        'Полный сборник книг Гарри-Поттера',
        'Паук-птицеед',
        'Ручнчая крыса',
        'Ручной попугай',
        'Грудничёк мужского пола (не занимет место в бункере, имеется личный запас продовольствия на время пробывания в бункере)',
        'Грудничёк женского пола (не занимет место в бункере, имеется личный запас продовольствия на время пробывания в бункере)',
        'Семена пшеницы',
        '10 головок сыра(еда)',
        'Собака',
        'Тайное послание(если игроки узнают, что у вас есть этот багаж(или вы сами его вскрываете), вскрывается случайная х-ка, случайного игрока(может вскрыться уже открытая х-ка))',
        'Терариум со змеями',
        '100 Упаковок лапши быстрого приготовления(еда)',
        'Фалоимитатор', 'Флейта',
        'Флешка с вредоносным вирусом',
        'Хирургический набор', 'Шпага',
        'Экзоскиллет (может помочь человеку с параличём или человеку без конечностей)'],

    // Падение метеорита
    1: ['Набор респираторов'],

    //Ядерная Война
    2: ['Набор респираторов'],

    // Зобми апокалипсис
    3: ['Набор книг по зомбиапокалиасису', 'Автомат м4 с набором патронов в количестве - 260 шт', 'Пистолет Glock с 6 обоймами в запасе'],

    // Наподение инопришельцев
    4: ['Костюм инопришельца', 'Автомат м4 с набором патронов в количестве - 260 шт', 'Пистолет Glock с 6 обоймами в запасе'],

    // Глобальное потепление
    5: ['Надувная лодка на 5 человек'],

    // Обезьянокалипсис
    6: ['Автомат м4 с набором патронов в количестве - 260 шт', 'Пистолет Glock с 6 обоймами в запасе'],

    // Восстание демонов
    7: ['10 л освящённой воды', 'Библия', 'Жёсткий диск со всеми сериями Сверхестественного', 'Набор святых крестиков'],

    // Суперкомпьютер
    8: ['Флешка с вредоносным вирусом', 'Ноутбук'],

    // Коронавирус
    9: ['Аппарат ИВЛ', 'Набор респираторов',],


}
let hobby = {

    // All
    all: [
        'Астраномия',
        'Астралогия',
        'Боевые искусства',
        'Боулинг',
        'Бильярд',
        'Выживание в дикой среде',
        'Викторины',
        'Выпечка',
        'Вышивка крестиком',
        'Готовка',
        'Гимнастика',
        'Жонглирование',
        'Земледелие',
        'Изучение иностранных языков',
        'Играет на губной гормошке ',
        'Игра в гольф',
        'Каратэ',
        'Компьютерное программирование',
        'Каллиграфия',
        'Кузнечное дело',
        'Лоликонщик',
        'Оригами',
        'Озвучка ',
        'Охота',
        'Овощеводство',
        'Паркур',
        'Пивоварение',
        'Пауэрлифтинг',
        'Пускание воздушных змей',
        'Пчеловодство',
        'Парусный спорт',
        'Плаванье',
        'Пение',
        'Религизм (вы увликаетесь религиями)',
        'Рыбалка',
        'Роботостроение',
        'Резьба по дереву',
        'Ремесло',
        'Рисование',
        'Сумо',
        'Стрельба',
        'Скалолазание',
        'Садоводство',
        'Стрельба из лука',
        'Стенд-ап',
        'Сыроварение',
        'Строительство',
        'Создаёт изделия из кожи',
        'Тхэквондо',
        'Увлекается животноводством',
        'Фихтование'
    ],

    // Падение метеорита
    1: [],

    //Ядерная Война
    2: [],

    // Зобми апокалипсис
    3: ['Охота', 'Стрельба'],

    // Наподение инопришельцев
    4: ['Астраномия', 'Стрельба',],

    // Глобальное потепление
    5: ['Плаванье', 'Рыбалка', 'Охота',],

    // Обезьянокалипсис
    6: ['Охота', 'Стрельба'],

    // Восстание демонов
    7: ['Религизм (вы увликаетесь религиями)'],

    // Суперкомпьютер
    8: ['Компьютерное программирование', 'Роботостроение',],

    // Коронавирус
    9: [],


}
let characterTrait = {

    // All
    all: [
        'Агрессивный(При попадании в бункер вы убиваете одного человека  на ваш выбор)',
        'Гавнистый',
        'Душка',
        'Заниженная самооценка',
        'Интроверт',
        'Истеричный',
        'Куколд',
        'Клиптомания',
        'Капрофил(любит обмазываться фекалиями)',
        'Лень',
        'Недотрога',
        'Нимфоманка',
        'Настырный',
        'Маньяк(При попадании в бункер вы убиваете всех кто попал туда с вами)',
        'Общительный',
        'Обжора',
        'Перфикционизм',
        'Пиздабол',
        'Педофилия',
        'Попущенец',
        'Расист(Вы  не можете идти с бункер с любым человеком другой национальности(пример - хач/негр/индус/азиат и т.п.))',
        'Раздражительный',
        'Суицидник(вы желаете смерти, при попадании в бункер, вы убиваете себя у всех на глазах)не смотря на эту черту характера, вы всё равно хотитет всеми силами  попасть в бункер!',
        'Свингер',
        'Скандалист',
        'Садист',
        'Трусливость(Если у вас какая либо боевая профессия/хобби/увлечения, анулирует их эфеект, вы так же боитесь драться с кем либо)',
        'Фетишист(любит засовывать в себя разные предметы(по желанию может засунуть в себя 1 вещь из багажа любого человека/вещь которая находится в бункере, чтобы нейтрализовать её эффект) РАБОТАЕТ, ТОЛЬКО ЕСЛИ ВЫ ПОПАДАЕТЕ В БУНКЕР)',
        'Хитрость',
        'Харизматичность',
        'Хорошее чувство юмора',
        'ЧСВ',
        'Чайлдфри(не хочешь заводить детей)',
        'Эрудированный'
    ],

    // Падение метеорита
    1: [],

    //Ядерная Война
    2: [],

    // Зобми апокалипсис
    3: [],

    // Наподение инопришельцев
    4: [],

    // Глобальное потепление
    5: [],

    // Обезьянокалипсис
    6: [],

    // Восстание демонов
    7: [],

    // Суперкомпьютер
    8: [],

    // Коронавирус
    9: [],


}

//'Вы меняетесь с выбранным игроком хобби',
//'Меняет выбронному игроку хобби',
let card = {
    list: [
        'Вы меняетесь с выбранным игроком профессией',
        'Вы меняетесь с выбранным игроком биологической характеристикой',
        'Вы меняетесь с выбранным игроком телосложеним',
        'Вы меняетесь с выбранным игроком состояним здоровья',
        'Вы меняетесь с выбранным игроком фобией',
        'Вы меняетесь с выбранным игроком дополнительной информацией',
        'Вы меняетесь с выбранным игроком багажом',
        'Вы меняетесь с выбранным игроком чертой характера',
        'Выберите двух игроков(можно и себя) они меняются профессией',
        'Выберите двух игроков(можно и себя) они меняются биологической характеристикой',
        'Выберите двух игроков(можно и себя) они меняются телосложеним',
        'Выберите двух игроков(можно и себя) они меняются состояним здоровья',
        'Выберите двух игроков(можно и себя) они меняются фобией',        
        'Выберите двух игроков(можно и себя) они меняются дополнительной информацией',
        'Выберите двух игроков(можно и себя) они меняются багажом',       
        'Вы или выбранный игрок излечиваетесь от болезней',
        'Вы или выбранный игрок излечиваетесь от фобий',
        'Вы или выбранный игрок молодеет на 30 лет, (Возраст не может опуститься ниже 20 лет)',
        'Вы или выбранный игрок молодеет на 45 лет, (Возраст не может опуститься ниже 20 лет)',
        'Вы или выбранный игрок стареет на 30 лет', 
        'Вы или выбранный игрок стареет на 45 лет',
        'Меняет пол выбранного игрока на противоположный',
        'Подкидывает выбранному игроку бабку в его багаж(старый багаж остаётся при нём) - 80 летняя бабка. Занимает место в бункере, если игрок с бабкой дошёл до раунда где кол-во оставшихся игроков равно кол-ву мест в бункере, вы обязанны вскрыть свой багаж. Игра продолжается, на ещё один круг.',
        'Выбранный вами игрок обязан использовать карту действия(если у игрока не вскрыты обе карты, вы можете выбрать, какую вскрывать 1-ю или 2-ю(вы просто называете номер))',        
        'Вы можете взять дополнительный багаж из колоды(Старый у вас остаётся, вы получаете ещё один. Если на вас применяется карта украсть багаж, воруется один на выбор(по желанию вора))',
        'Профессии всех игроков передаются друг другу по часовой стрелке(2-й игрок получает профессию 1-го; 3-й игрок получает профессию 2-го и т.д)',
        'Вскрывает состояние здоровья выбронного игрока',
        'Вскрывает био данные выбронного игрока',
        'Вскрывает фобию выбронного игрока',
        'Вскрывает телосложение выбронного игрока',
        'Вскрывает багаж выбронного игрока',
        'Вскрывает черту характера выбронного игрока',
        'Вскрывает доп информацию выбранного игрока',
        'Вскрывает у всех игроков - здоровье',
        'Вскрывает у всех игроков - био данные',
        'Вскрывает у всех игроков - фобию',
        'Вскрывает у всех игроков - телосложение',
        'Вскрывает у всех игроков - багаж',
        'Вскрывает у всех игроков - черту характера',
        'Вскрывает у всех игроков - доп информацию',
        'У всех игроков меняется выбранная вами характеристика',
        'Вы можете перераздать  профессии всем игрокам',
        'Вы можете перераздать биологическу характеристику всем игрокам',
        'Вы можете перераздать телосложение всем игрокам',
        'Вы можете перераздать состояник здоровья всем игрокам',
        'Вы можете перераздать фобию всем игрокам',
        'Вы можете перераздать багаж всем игрокам',
        'Вы можете перераздать черту характера всем игрокам',
        'Меняет выбронному игроку профессию',
        'Меняет выбронному игроку биологическую характеристику',
        'Меняет выбронному игроку телосложение',
        'Меняет выбронному игроку состояние здоровья',
        'Меняет выбронному игроку фобию',
        'Меняет выбронному игроку дополнительную информацию',
        'Меняет выбронному игроку багаж',        
        'Меняет выбронному игроку черта характера',
        'Вы добавляете в бункер новую комнату - склад с оружием и пропитанием',
        'Вы добавляете в бункер новую комнату - хим лабараторию с химиком (пол химика вы выбираете сами - мужской или женский он сможет участвовать в продолжении рода, он не занимает слот бункера и не требует еду)',
        'Вы добавляете в бункер новую комнату - мед центр с 2-мя медиками оба медика мужчины и они бесплодны(они не занимают слот в бункере и не требуют еду). С собой у них - инкубационная капсула(может помоч с инфекционными болезнями) и Психотропный препарат(помогает бороться с фобией 1-му человеку)',
        'Воскрешает выбранного игрока(нельзя применять на себя)',
        'И это Иисус Христос и это господь господь - если вас выгонят голосованием, вы можете "воскреснусть" в любой момент по вашему желанию',
        'Вы отменяете последнюю использованную карту любого игрока',
        'Вы везунчик вы уже можно сказать победили, если вас не берут в бункер, вы можете выбрать - быть изгнанным или вступить в другой бункер, который ставит себе задачу отомстить этому бункеру, при этом, вы вправе поменяться любой своей характеристикой на любую х-ку из оставшихся к других игроков перед уходом',
        'Карта друга - Посчитайте игроков начиная с игрока по левую руку от вас, с 0 и до ' + number + ', как только вы дошли до этой цифры этот человек и есть ваш друг (себя самого считать не нужно)) - вы обязанны пойти с данным игроком в бункер.(это обременение действует только на вас.) Эту карту не обязательно использовать, но она по умолчанию активна, вы не можете проигнорировать её функционал.',
        'Карта врага - Посчитайте игроков начиная с игрока по левую руку от вас, с 0 и до ' + number + ', как только вы дошли до этой цифры этот человек и есть ваш друг (себя самого считать не нужно)) - вы не можете войти в бункер с данным игроко.(это обременение действует только на вас.) Эту карту не обязательно использовать, но она по умолчанию активна, вы не можете проигнорировать её функционал',
        'Уменьшает место на одно',
        'Увеличивает место на одно',
        'Вы запускаете в бункер крысу, что поедаед запасы продовольствия, если еды не хватало до этого, то теперь её стало ещё меньше',
        'Данная карта увеличивает силу вашего голоса на 1, теперь ваш голос считается, за 2, до тех пор, пока не будет выгнан 1 игрок.',
        'При использовании этой карты вы получите ещё 2 карты действия, но применить их вы должны после получения.',
    ],
}


function generationCatastrophe() {
    catastrophe.number = catastrophe.list[getRandom(0, catastrophe.list.length - 1)]
    generationCatastrophe = () => catastrophe[catastrophe.number]
    return catastrophe[catastrophe.number]
}

function generationBunker() {

    let area = getRandom(50, 120)
    let time = getRandom(2, 24)
    let eat = getRandom(1, 100) < 30 ? 'еды не хватит на всё время пребывания' : 'еда в достатке'
    let room = randBunkerItem(bunker.room) + '\n' + randBunkerItem(bunker.room)
    let item = randBunkerItem(bunker.addItems)
    let animal = getRandom(1, 100) < 30 ? 'Никого нет' : randBunkerItem(bunker.animals)

    let result = `Характеристики Бункера:

Площадь - ${area} кв.м.
Время прибывания - ${time} месяцев

Запас продовольствия на время нахождения в бункере: ${eat}
        
Комнаты:
${room}
        
Дополнительные вещи:
${item}
        
В бункере обитает:
${animal}
`

    generationBunker = () => result
    return result
}


document.getElementById('newCatastrophe').addEventListener('click', () => {
    document.getElementById('areaCatastrophe').value = generationCatastrophe()
})
document.getElementById('newBunker').addEventListener('click', () => {
    document.getElementById('areaBunker').value = generationBunker()
})

document.getElementById('newCharacter')
    .addEventListener('click', (e) => copyOnClick(e, generationNewCharacter))

document.getElementById('newPhobia')
    .addEventListener('click', (e) => copyOnClick(e, getPhobia))

document.getElementById('newBaggage')
    .addEventListener('click', (e) => copyOnClick(e, getBaggage))

document.getElementById('newHobby')
    .addEventListener('click', (e) => copyOnClick(e, getHobby))

document.getElementById('newHealthStatus')
    .addEventListener('click', (e) => copyOnClick(e, getHealthStatus))

document.getElementById('newCharacterTrait')
    .addEventListener('click', (e) => copyOnClick(e, getCharacterTrait))

document.getElementById('newAgeCharacter')
    .addEventListener('click', (e) => copyOnClick(e, getAgeCharacter))

document.getElementById('newBodySex')
    .addEventListener('click', (e) => copyOnClick(e, ((value = getBodySex().text) => value) ))

document.getElementById('newProfession')
    .addEventListener('click', (e) => copyOnClick(e, getProfession))
document.getElementById('newCard')
    .addEventListener('click', (e) => copyOnClick(e, getCard))

document.getElementById('newAddInformation')
    .addEventListener('click', (e) => copyOnClick(e, getAddInformation))

function copyOnClick(e, fn) {

    if (isClick) return false

    let block = document.querySelector('.blockAll')
    block.style.display = 'block'
    let icon = e.target.querySelector('.generation-btn-column__ok')
    icon.style.display = 'block'
    isClick = true

    let res = fn() + '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'

    setTimeout(() => {
        isClick = false
        block.style.display = 'none'
        icon.style.display = 'none'
    }, 1000)
    navigator.clipboard.writeText(res)

}

function generationNewCharacter() {
	let bodySexx = getBodySex();
    return `
Катастрофа:
${generationCatastrophe()}    
    
${generationBunker()}


Ваш персонаж:
    
1) ${getProfession()}

2) ${getAgeCharacter()}

3) ${bodySexx.text}

4) ${getHealthStatus(bodySexx.body.value)}

5) ${getPhobia()}

6) ${getAddInformation(bodySexx.body.value, bodySexx.sex.value)}

7) ${getBaggage()}

8) ${getHobby()}

9) ${getCharacterTrait()}

Первая карта действия: 
 ${getCard()}

Вторая карта действия: 
 ${getCard()}    
\n\n\n\n\n\n\n\n\n\n\n\n
`
}

function getProfession() {
    return `Профессия - ${randResult(profession)}`
}

function getHealthStatus(body = 0) {
    if (getRandom(0, 100) - body < 30) return 'Состояние здоровья - Идеально здоров'

    return `Состояние здоровья - ${randResult(healthStatus)}`
}

function getPhobia() {
    if (getRandom(0, 100) < 30) return 'Фобия - Нет фобий'

    return `Фобия - ${randResult(phobia)}`
}

function getAddInformation(body = 0, sex = 0) {
    let infertility = getRandom(1, 100) - (body * sex) <= 30 ? 'Вы бесплодны' : 'Вы можете иметь детей'

    let information = randResult(addInformation)

    return `Деторождаемость и Доп информация: 
 ${infertility}  
 ${information}`
}

function getBaggage() {
    return `Багаж - ${randResult(baggage)}`
}

function getHobby() {
    return `Хобби - ${randResult(hobby)}`
}

function getCharacterTrait() {
    return `Черта характера - ${randResult(characterTrait)}`
}

function getCard() {
    let rand = getRandom(0, card.list.length - 1)
    return card.list.splice(rand, 1)[0]
}

function getAgeCharacter() {
    let age = (getRandom(0, 100) < 40) ? getRandom(20, 35) : getRandom(18, 101)
    let workExperience = Math.floor(getRandom(0, age - 18) / 2)
    let hobbyExperience = Math.floor(getRandom(0, age - 18) / 2)
    return `Возрастная характеристика:
 Ваш возраст - ${age}, Стаж работы - ${workExperience}, Стаж хобби - ${hobbyExperience}`
}

function getBodySex() {
    let sex = getRandom(1, 100) % 2 === 0 ? {text : 'мужчина', value : 0} : {text : 'женщина', value : 1}
    let body = getRandom(0, 100)
    let height = getRandom(0, 100)
    height = height <= 24 ? 'Вы карлик' : height <= 74 ? 'Вы среднего роста' : 'Вы великан'	
    body = body <= 24 ? {text : 'Вы анарексик', value : 10} : body <= 74 ? {text : 'У вас нормальный вес', value : 0} : {text : 'Вы жиробас', value : 10}

    return {
		text : `Пол, Телосложение: 
    Вы ${sex.text}
    ${body.text} 
    ${height}`,
	body : body,
	sex : sex,
	}
}


function randResult(characteristics) {
    if (characteristics[catastrophe.number].length > 0 && getRandom(1, 100) <= 12) {
        return randOfList(characteristics[catastrophe.number], characteristics.all)
    }
    return randOfList(characteristics.all, characteristics[catastrophe.number])

    function randOfList(arr, otherArr) {
        let result = getRandom(0, arr.length - 1)
        result = arr.splice(result, 1)[0]
        let del = otherArr.indexOf(result)
        if (del !== -1) otherArr.splice(del, 1)

        return result
    }
}

function randBunkerItem(item) {
    let result = getRandom(0, item.length - 1)
    result = item.splice(result, 1)[0]
    return result
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}