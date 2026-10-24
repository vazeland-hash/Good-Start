// ============================================================
// level_data.js — Уровни A1–B2, теория, тесты, маппинги
// ============================================================

window.levelData = {
    levels: ['A1', 'A2', 'B1', 'B2'],
    names: {
        A1: 'Beginner', A2: 'Elementary', B1: 'Intermediate', B2: 'Upper-Intermediate'
    },
    colors: {
        A1: '#4CAF50', A2: '#2196F3', B1: '#FF9800', B2: '#E91E63'
    },

    theory: {
        A1: {
            title: 'A1 — Beginner',
            intro: 'Базовые правила: местоимения, to be, Present Simple, артикли, множественное число.',
            sections: [
                {
                    title: 'Глагол to be (am / is / are)',
                    html: `
                        <p><b>I</b> am — Я есть</p>
                        <p><b>He / She / It</b> is — Он / Она / Оно есть</p>
                        <p><b>You / We / They</b> are — Ты / Мы / Они есть</p>
                        <p><b>Positive:</b> I am a student. — Я студент.</p>
                        <p><b>Negative:</b> She is not (isn't) happy. — Она не счастлива.</p>
                        <p><b>Question:</b> Are you from Russia? — Ты из России?</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'She ___ a doctor.', options: ['am', 'is', 'are', 'be'], correct: 1, rule: 'She (3-е лицо) + is' },
                        { type: 'choice', q: 'We ___ from Russia.', options: ['am', 'is', 'are', 'be'], correct: 2, rule: 'We (множественное число) + are' },
                        { type: 'choice', q: 'I ___ a student.', options: ['am', 'is', 'are', 'be'], correct: 0, rule: 'I + am' },
                        { type: 'choice', q: 'It ___ a cat.', options: ['am', 'is', 'are', 'be'], correct: 1, rule: 'It + is' },
                        { type: 'text', q: 'Впиши глагол: You ___ my friend.', answer: 'are', rule: 'You + are' }
                    ]
                },
                {
                    title: 'Present Simple',
                    html: `
                        <p>Действия регулярные, привычки, факты.</p>
                        <p>I <b>work</b> every day. — Я работаю каждый день.</p>
                        <p>He <b>works</b> in a bank. — Он работает в банке. (3-е лицо: +s)</p>
                        <p>She <b>doesn't like</b> coffee. — Она не любит кофе. (doesn't + V1)</p>
                        <p><b>Do</b> you speak English? — Ты говоришь по-английски?</p>
                        <p><b>Маркеры:</b> always (всегда), usually (обычно), often (часто), sometimes (иногда), never (никогда).</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'I ___ to school every day.', options: ['go', 'goes', 'going', 'went'], correct: 0, rule: 'I + V1 (без окончаний)' },
                        { type: 'text', q: 'Впиши глагол: He ___ (like) fish.', answer: 'likes', rule: 'He/She/It + V-s (likes)' },
                        { type: 'choice', q: '___ you speak English?', options: ['Do', 'Does', 'Is', 'Are'], correct: 0, rule: 'Вопрос к you: Do + you + V1' },
                        { type: 'choice', q: 'He ___ like fish.', options: ["don't", "doesn't", "isn't", "aren't"], correct: 1, rule: 'Отрицание для He/She/It: doesn\'t' }
                    ]
                },
                {
                    title: 'Артикли a / an / the',
                    html: `
                        <p><b>a</b> — один любой предмет (согласная): a book — книга.</p>
                        <p><b>an</b> — один любой предмет (гласная): an apple — яблоко.</p>
                        <p><b>the</b> — конкретный, уже упомянутый: the book on the table — книга на столе.</p>
                        <p><b>Без артикля:</b> неисчисляемые и множественные в общем смысле — Water is cold. (Вода холодная).</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'It\'s ___ apple.', options: ['a', 'an', 'the', '—'], correct: 1, rule: 'Перед гласной (a, e, i, o, u) ставим an' },
                        { type: 'text', q: 'Вставь артикль: I have ___ cat. (первое упоминание)', answer: 'a', rule: 'Первое упоминание, слово начинается с согласной' },
                        { type: 'choice', q: 'I have ___ orange.', options: ['a', 'an', 'the', '—'], correct: 1, rule: 'Перед гласной ставим an' }
                    ]
                },
                {
                    title: 'Множественное число',
                    html: `
                        <p>Обычно <b>+s</b>: cat — cats, book — books.</p>
                        <p>После -s, -sh, -ch, -x, -o: <b>+es</b>: box — boxes, watch — watches.</p>
                        <p>Согласная + y → <b>-ies</b>: city — cities.</p>
                        <p><b>Исключения:</b> man — men, woman — women, child — children, foot — feet, tooth — teeth, mouse — mice.</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'I have two ___.', options: ['childs', 'childes', 'children', 'childrens'], correct: 2, rule: 'Child — исключение, множественное число children' },
                        { type: 'text', q: 'Напиши множественное число: box — ___', answer: 'boxes', rule: 'Слова на -x получают окончание -es' },
                        { type: 'text', q: 'Напиши множественное число: city — ___', answer: 'cities', rule: 'Согласная + y меняется на -ies' }
                    ]
                },
                {
                    title: 'Can (умение, возможность)',
                    html: `
                        <p><b>Can + V1:</b> I can swim. — Я умею плавать.</p>
                        <p><b>Отрицание:</b> He can't (cannot) drive. — Он не умеет водить.</p>
                        <p><b>Вопрос:</b> Can you help me? — Можешь мне помочь?</p>
                        <p>После <b>can</b> никогда не ставится to: I can swim (не can to swim).</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'She ___ swim very well.', options: ['can', 'cans', 'can to', 'to can'], correct: 0, rule: 'После can не ставится s и to' },
                        { type: 'text', q: 'Впиши ответ (без to): I can ___ (play) the piano.', answer: 'play', rule: 'Can + V1' },
                        { type: 'choice', q: '___ you help me?', options: ['Can', 'Cans', 'Can to', 'To can'], correct: 0, rule: 'Вопрос с can ставится в начало' }
                    ]
                },
                {
                    title: 'There is / There are',
                    html: `
                        <p><b>There is</b> + ед.ч.: There is a cat on the sofa. — На диване есть кошка.</p>
                        <p><b>There are</b> + мн.ч.: There are two books here. — Здесь есть две книги.</p>
                        <p><b>Отрицание:</b> There isn't a problem. There aren't any apples.</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'There ___ two cats on the sofa.', options: ['is', 'are', 'am', 'be'], correct: 1, rule: 'Two cats (множественное число) + are' },
                        { type: 'choice', q: 'There ___ a book on the table.', options: ['is', 'are', 'am', 'be'], correct: 0, rule: 'A book (единственное число) + is' }
                    ]
                }
            ]
        },
        A2: {
            title: 'A2 — Elementary',
            intro: 'Прошедшее время, будущее, степени сравнения, модальные глаголы, Present Continuous.',
            sections: [
                {
                    title: 'Past Simple',
                    html: `
                        <p>Для завершённых действий в прошлом.</p>
                        <p><b>Правильные:</b> work — worked; play — played.</p>
                        <p><b>Неправильные:</b> go — went, see — saw, have — had, do — did.</p>
                        <p><b>Отрицание:</b> I didn't go. — Я не ходил.</p>
                        <p><b>Вопрос:</b> Did you call? — Ты звонил?</p>
                        <p><b>Маркеры:</b> yesterday (вчера), last week (на прошлой неделе), in 2010 (в 2010), two days ago (два дня назад).</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'I ___ to the cinema yesterday.', options: ['go', 'goes', 'went', 'gone'], correct: 2, rule: 'Go — неправильный глагол, прошедшее время went' },
                        { type: 'text', q: 'Впиши глагол: She ___ (see) him last night.', answer: 'saw', rule: 'See — неправильный глагол, прошедшее время saw' },
                        { type: 'choice', q: 'Did you ___ him yesterday?', options: ['saw', 'see', 'seen', 'seeing'], correct: 1, rule: 'После did используем V1 (see)' }
                    ]
                },
                {
                    title: 'Present Continuous',
                    html: `
                        <p>Действие происходит прямо сейчас.</p>
                        <p><b>am / is / are + V-ing:</b> I am reading. — Я читаю. She is cooking. — Она готовит.</p>
                        <p><b>Отрицание:</b> They aren't working. — Они не работают.</p>
                        <p><b>Вопрос:</b> Are you listening? — Ты слушаешь?</p>
                        <p><b>Маркеры:</b> now (сейчас), right now (прямо сейчас), at the moment (в данный момент), Look! (Смотри!), Listen! (Слушай!).</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'She is ___ a book right now.', options: ['read', 'reads', 'reading', 'readed'], correct: 2, rule: 'is + V-ing (reading)' },
                        { type: 'choice', q: 'They ___ TV at the moment.', options: ['watch', 'are watching', 'is watching', 'watched'], correct: 1, rule: 'They (мн.ч.) + are + V-ing' }
                    ]
                },
                {
                    title: 'Future: going to / will',
                    html: `
                        <p><b>going to</b> — запланированное, есть намерение: I'm going to visit my grandma. — Я собираюсь навестить бабушку.</p>
                        <p><b>will</b> — спонтанное решение, предсказание: I'll help you! — Я помогу тебе! It will rain. — Будет дождь.</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'Tomorrow I ___ visit my grandma.', options: ['am going to', 'go', 'went', 'am going'], correct: 0, rule: 'Запланированное действие — am going to' },
                        { type: 'choice', q: 'I think it ___ rain tomorrow.', options: ['will', 'going to', 'is', 'are'], correct: 0, rule: 'Предсказание — will' }
                    ]
                },
                {
                    title: 'Степени сравнения',
                    html: `
                        <p><b>Короткие:</b> tall — taller — the tallest (высокий — выше — самый высокий).</p>
                        <p><b>Длинные:</b> interesting — more interesting — the most interesting (интересный — более интересный — самый интересный).</p>
                        <p><b>Исключения:</b> good — better — best (хороший — лучше — лучший); bad — worse — worst (плохой — хуже — худший).</p>
                        <p>Сравнение: <b>than</b> — чем. She is taller than me. — Она выше меня.</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'This book is ___ than that one.', options: ['interesting', 'more interesting', 'most interesting', 'interestingest'], correct: 1, rule: 'Длинные слова: more + прилагательное' },
                        { type: 'choice', q: 'She is ___ than me.', options: ['tall', 'taller', 'tallest', 'more tall'], correct: 1, rule: 'Короткие слова: +er (taller)' }
                    ]
                },
                {
                    title: 'Some / any / much / many',
                    html: `
                        <p><b>some</b> — утверждение: I have some milk. — У меня есть немного молока.</p>
                        <p><b>any</b> — вопросы/отрицания: Do you have any apples? — У тебя есть яблоки?</p>
                        <p><b>much</b> + неисчисляемые: much water — много воды.</p>
                        <p><b>many</b> + исчисляемые: many books — много книг.</p>
                        <p><b>a lot of</b> — универсально (и для тех, и для других).</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'I have ___ apples.', options: ['any', 'some', 'much', 'a'], correct: 1, rule: 'В утвердительных предложениях используем some' },
                        { type: 'choice', q: 'Do you have ___ questions?', options: ['some', 'any', 'much', 'a'], correct: 1, rule: 'В вопросах используем any' }
                    ]
                },
                {
                    title: 'Модальные глаголы: must / should / have to',
                    html: `
                        <p><b>must</b> — обязанность (сильная): You must wear a helmet. — Ты должен носить шлем.</p>
                        <p><b>have to</b> — вынужденность (по внешним причинам): I have to work on Saturday. — Мне приходится работать в субботу.</p>
                        <p><b>should</b> — совет: You should see a doctor. — Тебе следует сходить к врачу.</p>
                        <p>После всех трёх — <b>V1 без to</b>: must go, should see, have to work.</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'You ___ see a doctor.', options: ['should', 'should to', 'must to', 'can to'], correct: 0, rule: 'Совет — should + V1 (без to)' }
                    ]
                }
            ]
        },
        B1: {
            title: 'B1 — Intermediate',
            intro: 'Present Perfect, Conditionals 1–2, Passive, Reported Speech, Relative clauses, Gerund vs Infinitive.',
            sections: [
                {
                    title: 'Present Perfect',
                    html: `
                        <p><b>have / has + V3 (Past Participle)</b>.</p>
                        <p>Используется, когда важен <b>результат</b>, а не время действия, или когда период ещё не закончился.</p>
                        <p>I <b>have lost</b> my keys. — Я потерял ключи. (результат: ключей нет сейчас)</p>
                        <p>She <b>has lived</b> here for five years. — Она живёт здесь пять лет.</p>
                        <p><b>Have</b> you ever <b>been</b> to London? — Ты когда-нибудь был в Лондоне?</p>
                        <p><b>Маркеры:</b> already (уже), just (только что), yet (ещё), ever (когда-либо), never (никогда), since (с), for (в течение).</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'I ___ my keys. I can\'t find them.', options: ['lose', 'lost', 'have lost', 'am losing'], correct: 2, rule: 'Результат важен сейчас — Present Perfect (have lost)' },
                        { type: 'choice', q: 'She ___ here for five years.', options: ['lived', 'has lived', 'is living', 'lives'], correct: 1, rule: 'Действие началось в прошлом и длится до сих пор — has lived' }
                    ]
                },
                {
                    title: 'Past Continuous',
                    html: `
                        <p><b>was / were + V-ing</b> — длительное действие в прошлом.</p>
                        <p>I <b>was reading</b> when she called. — Я читал, когда она позвонила.</p>
                        <p>They <b>were watching</b> TV at 8 pm. — Они смотрели телевизор в 8 вечера.</p>
                        <p>Часто с Past Simple для фона: <i>I was walking home when I saw him</i>.</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'She ___ dinner when I called.', options: ['cooked', 'was cooking', 'has cooked', 'is cooking'], correct: 1, rule: 'Длительное действие (фон) — was/were + V-ing' }
                    ]
                },
                {
                    title: 'First Conditional (реальные условия)',
                    html: `
                        <p><b>If + Present Simple, will + V1.</b></p>
                        <p>If it <b>rains</b>, we <b>will stay</b> at home. — Если пойдёт дождь, мы останемся дома.</p>
                        <p>Для реального будущего, которое возможно.</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'If it ___, we will stay at home.', options: ['rain', 'rains', 'will rain', 'rained'], correct: 1, rule: 'В части с If используем Present Simple (rains)' }
                    ]
                },
                {
                    title: 'Second Conditional (нереальные)',
                    html: `
                        <p><b>If + Past Simple, would + V1.</b></p>
                        <p>If I <b>had</b> a car, I <b>would drive</b> to work. — Если бы у меня была машина, я бы ездил на работу.</p>
                        <p>Нереальное настоящее (мечты, гипотезы).</p>
                        <p>С <b>be</b> используем <b>were</b> для всех лиц: If I <b>were</b> you...</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'If I ___ you, I would apologize.', options: ['am', 'was', 'were', 'be'], correct: 2, rule: 'В Second Conditional с I используем were' }
                    ]
                },
                {
                    title: 'Passive Voice',
                    html: `
                        <p><b>be + V3.</b> Когда действие важнее исполнителя.</p>
                        <p>English <b>is spoken</b> all over the world. — На английском говорят по всему миру.</p>
                        <p>The letter <b>was sent</b> yesterday. — Письмо было отправлено вчера.</p>
                        <p>The house <b>will be built</b> next year. — Дом будет построен в следующем году.</p>
                        <p>Исполнитель через <b>by</b>: <i>Harry Potter was written <b>by</b> J.K. Rowling.</i></p>
                    `,
                    tests: [
                        { type: 'choice', q: 'The letter ___ yesterday.', options: ['sent', 'was sent', 'is sent', 'sends'], correct: 1, rule: 'Прошедшее время + пассив = was/were + V3' }
                    ]
                },
                {
                    title: 'Reported Speech (базовое)',
                    html: `
                        <p>При переводе в косвенную речь «отступаем на шаг назад»:</p>
                        <p>Present Simple → Past Simple</p>
                        <p>Past Simple → Past Perfect</p>
                        <p>will → would, can → could</p>
                        <p>"I <b>am</b> tired" → She said (that) she <b>was</b> tired. — Она сказала, что устала.</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'He said (that) he ___ tired.', options: ['is', 'was', 'were', 'be'], correct: 1, rule: 'Present Simple (is) переходит в Past Simple (was)' }
                    ]
                },
                {
                    title: 'Gerund vs Infinitive',
                    html: `
                        <p>После <b>enjoy, mind, suggest, avoid, finish, look forward to</b> — <b>-ing</b>:</p>
                        <p>I enjoy <b>reading</b>. — Я люблю читать. Would you mind <b>opening</b> the window? — Ты не против открыть окно?</p>
                        <p>После <b>want, need, plan, hope, decide, promise</b> — <b>to + V</b>:</p>
                        <p>I want <b>to go</b>. — Я хочу пойти. She decided <b>to stay</b>. — Она решила остаться.</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'I enjoy ___ books.', options: ['read', 'to read', 'reading', 'reads'], correct: 2, rule: 'Enjoy + V-ing (reading)' }
                    ]
                }
            ]
        },
        B2: {
            title: 'B2 — Upper-Intermediate',
            intro: 'Third & Mixed Conditionals, Modal Perfect, Inversion, Advanced Passive, Complex structures.',
            sections: [
                {
                    title: 'Third Conditional',
                    html: `
                        <p><b>If + Past Perfect, would have + V3.</b></p>
                        <p>If I <b>had studied</b> harder, I <b>would have passed</b> the exam. — Если бы я учился усерднее, я бы сдал экзамен.</p>
                        <p>Сожаления о прошлом, которое нельзя изменить.</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'If I ___ harder, I would have passed.', options: ['studied', 'had studied', 'study', 'would study'], correct: 1, rule: 'Третье условие: If + Past Perfect (had studied)' }
                    ]
                },
                {
                    title: 'Mixed Conditionals',
                    html: `
                        <p><b>If + Past Perfect, would + V1</b> — прошлое влияет на настоящее:</p>
                        <p>If I <b>had taken</b> that job, I <b>would be</b> rich now. — Если бы я тогда взял ту работу, сейчас бы был богат.</p>
                        <p><b>If + Past Simple, would have + V3</b> — настоящее влияет на прошлое:</p>
                        <p>If she <b>were</b> more careful, she <b>wouldn't have broken</b> the vase. — Если бы она была осторожнее, она бы не разбила вазу.</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'If I had taken that job, I ___ rich now.', options: ['am', 'was', 'would be', 'would have been'], correct: 2, rule: 'Смешанное условие: результат в настоящем — would + V1' }
                    ]
                },
                {
                    title: 'Modal Perfect',
                    html: `
                        <p><b>modal + have + V3.</b></p>
                        <p><b>must have done</b> — уверенность в прошлом: She must have forgotten. — Должно быть, она забыла.</p>
                        <p><b>might have done</b> — вероятность: He might have missed the train. — Возможно, он опоздал на поезд.</p>
                        <p><b>should have done</b> — сожаление / упрёк: You should have told me! — Тебе следовало сказать мне!</p>
                        <p><b>could have done</b> — упущенная возможность: I could have helped. — Я мог бы помочь.</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'She must ___ forgotten about it.', options: ['have', 'has', 'had', 'be'], correct: 0, rule: 'После модальных глаголов в прошедшем — have + V3' }
                    ]
                },
                {
                    title: 'Inversion (инверсия)',
                    html: `
                        <p>Обратный порядок слов для эмфазы (после <b>never, rarely, seldom, hardly, no sooner</b>):</p>
                        <p>Never <b>have I seen</b> such a beautiful place. — Никогда я не видел такого красивого места.</p>
                        <p>Rarely <b>does she</b> complain. — Редко она жалуется.</p>
                        <p>No sooner <b>had he arrived</b> than it started to rain. — Едва он приехал, как начался дождь.</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'Never ___ I seen such a view.', options: ['have', 'has', 'had', 'did'], correct: 0, rule: 'Инверсия с I: Never have I...' }
                    ]
                },
                {
                    title: 'Advanced Passive',
                    html: `
                        <p>Пассив с модальными глаголами: The work <b>must be done</b> today. — Работа должна быть сделана сегодня.</p>
                        <p>Пассив с перфектом: The house <b>has been sold</b>. — Дом был продан.</p>
                        <p>It is said that... / He is believed to... — безличный пассив:</p>
                        <p>It <b>is said that</b> he is very rich. = He <b>is said to be</b> very rich. — Говорят, что он очень богат.</p>
                    `,
                    tests: [
                        { type: 'choice', q: 'The work must ___ today.', options: ['do', 'be done', 'been done', 'have done'], correct: 1, rule: 'Must + be + V3 (be done)' }
                    ]
                },
                {
                    title: 'Сложные относительные придаточные',
                    html: `
                        <p><b>who</b> — люди, <b>which</b> — предметы, <b>whose</b> — принадлежность, <b>where</b> — место, <b>when</b> — время.</p>
                        <p>Non-defining (с запятыми): <i>My brother, <b>who</b> lives in Paris, is a chef.</i></p>
                        <p>Defining (без запятых): <i>The man <b>who called</b> is my boss.</i></p>
                    `,
                    tests: [
                        { type: 'choice', q: 'My brother, ___ lives in Paris, is a chef.', options: ['who', 'which', 'whose', 'where'], correct: 0, rule: 'Для людей используем who' }
                    ]
                }
            ]
        }
    },

    categoryLevels: {
        greetings: 'A1', family_basic: 'A1', people_basic: 'A1', body_basic: 'A1',
        pronouns_basic: 'A1',
        clothes_basic: 'A1', home_basic: 'A1', furniture_basic: 'A1', food_basic: 'A1',
        drinks_basic: 'A1', animals_pets: 'A1', animals_wild: 'A1', birds_insects: 'A1',
        sea_animals: 'A1', nature_basic: 'A1', weather_basic: 'A1', seasons_basic: 'A1',
        months_basic: 'A1', days_basic: 'A1', daytime_basic: 'A1', time_common: 'A1',
        holidays_basic: 'A1', colors_shapes: 'A1', numbers_basic: 'A1',
        ordinal_numbers: 'A1', toys_basic: 'A1', transport_basic: 'A1',
        basic_verbs: 'A1', basic_adjectives: 'A1',
        time_clock: 'A2', character: 'A2', emotions: 'A2', appearance: 'A2',
        study_education: 'A2', hobby_leisure: 'A2', communication_relationships: 'A2', home_interior: 'A2',
        shopping: 'A2', travel_transport: 'A2', hotel_accommodation: 'A2',
        food_drinks: 'A2', sights_attractions: 'A2', daily_life: 'A2', daily_routine: 'A2', kitchen: 'A2', home_chores: 'A2',
        small_talk: 'A2', adverbs: 'A2', health_medicine: 'A2',
        phrasal_verbs: 'B1', work_business: 'B1', nature_ecology: 'B1', active_leisure: 'B1',
        media_art: 'B1', tech: 'B1', dating_flirt: 'B1', slang_idioms: 'B1', smells_aromas: 'B1',
        a2_verbs: 'A2', a2_adjectives: 'A2', a2_nouns: 'A2',
        b1_verbs: 'B1', b1_adjectives: 'B1', b1_nouns: 'B1', cozy_life: 'A2'
    },
    bookLevels: {
        'beginner': 'A1', 'elementary': 'A2', 'pre-intermediate': 'B1',
        'intermediate': 'B1', 'upper-intermediate': 'B2', 'advanced': 'B2'
    },
    phraseGroups: {
        'Приветствия и прощания': 'A1', 'Смол-ток': 'A1', 'Согласие и несогласие': 'A2',
        'Мнение': 'B1', 'Эмоции': 'A2', 'Поддержка и утешение': 'A2', 'Извинения и ответ': 'A2',
        'Просьбы': 'A2', 'Предложения и разрешение': 'A2', 'Уточнения и переспрос': 'A2',
        'Планы и договорённости': 'B1', 'Связки и паузы': 'A2', 'Работа и учёба': 'B1',
        'Еда': 'A2', 'Покупки и деньги': 'A2', 'Усталость и недовольство': 'B1',
        'Идиомы': 'B1', 'Уверенность и сомнение': 'B1', 'Реакции на новости': 'B1',
        'Поздравления и пожелания': 'A2', 'Вопросы и ответы': 'B1', 'Срочность': 'A2',
        'Симпатии и предпочтения': 'A2', 'Описание запахов': 'B1'
    }
};