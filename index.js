// bot.start((ctx) => ctx.reply("Welcome"));
// bot.help((ctx) => ctx.reply("Send me a sticker"));
// bot.on("sticker", (ctx) => ctx.reply("👍"));
// bot.hears("hi", (ctx) => ctx.reply("Hey there"));

const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();

// API-TOKEN
const bot = new Telegraf(process.env.API_TOKEN);

// GREET MESSAGE
bot.start(async (ctx) => {
  try {
    await ctx.replyWithHTML(
      `🤖Бип-буп... Привет, ${ctx.chat.first_name}! Меня зовут Валли, я робот-помощник в проекте Cryptocadabra.
    
С помощью меня, ты можешь узнать интересующую тебя информацию.
Для этого тебе стоит отправить мне нужную команду.

Ты можешь посмотреть список доступных <b>команд</b> нажав на /commands

Если что-то непонятно, то ты всегда можешь написать в <b>техническую поддержку</b> проекта - @cryptocadabra_support
 `
    );
    ctx.telegram.sendMessage(-1001774788515, `username: ${ctx.from.username}`);
  } catch (err) {
    console.log(err);
  }
});

// COMMAND LIST:
// 1. /commands
bot.command("commands", async (ctx) => {
  try {
    await ctx.replyWithHTML(
      `
          🤖 Пуп-пип, Валли рад быть полезным.
Вот список доступных команд:
            `,
      Markup.inlineKeyboard([
        [Markup.button.callback("📈 Сигналы 📉", "btn_signals")],
        [Markup.button.callback("👨‍🏫 Обучение 👩‍🏫", "btn_coaching")],
        [Markup.button.callback("💸 Кэшбэк 💸", "btn_cashback")],
        [Markup.button.callback("👨‍💻 Техническая поддержка 👨‍💻", "btn_support")],
      ])
    );
    ctx.telegram.sendMessage(
      -1001774788515,
      `username: ${ctx.from.username} - команды`
    );
  } catch (err) {
    console.log(err);
  }
});

// 2. /signals
bot.action("btn_signals", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      `
🤑 Хотите получать еще больше сигналов? 🤑

В нашем закрытом канале ежедневно выходит от 3 до 15 сигналов (кол-во зависит от рынка).

<b>Как выглядят сигналы?</b>

<i>Тикер: #HNTUSDT
Направление: #Long 💹
Stop-loos: 46.500
Take-profit: 47.000</i>

<b>Какая точность сигналов?</b>

<i>Точность сигналов составляет от 70% до 90%</i>

<b>Как попасть в закрытый канал?</b>

<i>24 часа подписки = 25$
7 дней подписки - 50$
30 дней подписки - 100$
Пожизненная подписка - 1000$</i>

<b>Для того, чтобы произвести оплату напишите, пожалуйста, в техническую поддержку - @cryptocadabra_support</b>
    `
    );
    ctx.telegram.sendMessage(
      -1001774788515,
      `username: ${ctx.from.username} - сигналы`
    );
  } catch (err) {
    console.log(err);
  }
});

// 2. /coaching
bot.action("btn_coaching", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(`📉 Хотите знать куда пойдет любой инструмент? 📈

После нашего обучения вы не сможете спать. Вы поймете как манипулируют активами, научитесь строить уровни, о которых не знают даже хедж-фонды. 

<b>На чем основана ваша торговая система? </b>

<i>Наша торговая система основана на манипуляциях и паттернах. Наши сделки заключаются от сильных уровней - уровни набора и сброса позиций. Эти уровни видны большинству участников рынка. На них скапливается больше всего ликвидности. Но самое главное - уметь поставить конкретный уровень, от которого будет реакция.</i> 

<b>Сколько стоит обучение?</b>

<i>Цена обучения - индивидуальная. Она зависит от ваших знаний. Для того, чтобы мы оценили ваши знания со своей точки зрения - напишите, пожалуйста в техническую поддержку - @cryptocadabra_support</i>

<u>когда вы покажете положительную статистику после обучения - мы предоставим вам капитал в управление. В случае, если вы не будете показывать результатов, мы вернем вам деньги!</u>
    `);
    ctx.telegram.sendMessage(
      -1001774788515,
      `username: ${ctx.from.username} - обучение`
    );
  } catch (err) {
    console.log(err);
  }
});

// 4. /cashback
bot.action("btn_cashback", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      `🔥 Хотите получать бонусы и возврат комиссии от каждой сделки? 🔥

За каждую сделку биржи взимают комиссию, которая зависит от вашего торгового оборота. С помощью нас, вы сможете возвращать часть комиссий, а также получать бонусы!

<b>Сколько комиссий и бонусов я смогу получить?</b>

<i>Это зависит от биржи, на которой вы торгуете:</i>

<u>Binance</u> - до 50$ бонусов и пожизненная скидка 30% на торговлю на спотовом и 20% фьючерсном рынках
<u>Huobi</u> - до 300$ бонусов и пожизненная скидка 20% на торговлю на спотовом и фьючерсном рынках
<u>Gate</u> - до 500$ бонусов и пожизненная скидка 20% на торговлю на спотовом и фьючерсном рынках
<u>ByBit</u> - до 400$ бонусов и пожизненная скидка 10% на торговлю на спотовом и фьючерсном рынках
<u>OKX</u> - до 100$ бонусов и пожизненная скидка 15% на торговлю на спотовом и фьючерсном рынках

    `,
      Markup.inlineKeyboard([
        [
          Markup.button.url(
            "📈 Инструкция по получению кэшбэка 📉",
            "https://ryancelsiusss.github.io/cryptocadabraAffiliateRU/"
          ),
        ],
      ])
    );
    ctx.telegram.sendMessage(
      -1001774788515,
      `username: ${ctx.from.username} - кэшбэк`
    );
  } catch (err) {
    console.log(err);
  }
});

bot.action("cashback_instruction", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.reply("instruction");
  } catch (err) {
    console.log(err);
  }
});

// 5. /management
// bot.action("btn_management", async (ctx) => {
//   try {
//     await ctx.answerCbQuery();
//     await ctx.replyWithHTML(`💼 Хотите зарабатывать на полном автомате? 💼

// У нас есть услуга доверительного управления активами. Вы сможете зарабатывать, занимаясь своими делами и следить как растет ваш счет.

// <b>Как это будет происходить?</b>

// <i>Мы обсуждаем риски, и ваши пожелания по торговле. Вы предоставляете нам API ключи от своего аккаунта, и мы на нем торгуем. Торговля происходит через платформу ATAS или TigerTrade. Вы сможете наблюдать за всеми сделками.</i>

// <b>Какая ориентировочная прибыль?</b>

// <i>Ориентировочная прибыль - от 15% в месяц при самых минимальных рисках.</i>

// <b>Какое наше вознаграждение?</b>

// <i>Мы берем 40% от прибыли.</i>

// <b>Как подать заявку на доверительное управление?</b>

// <i>Чтобы подать заявку на доверительное управление, пожауйста, свяжитесь с поддержкой - @cryptocadabra_support</i>

//     `);
//     ctx.telegram.sendMessage(
//       -1001774788515,
//       `username: ${ctx.from.username} - ДУ`
//     );
//   } catch (err) {
//     console.log(err);
//   }
// });

// 6. /support
bot.action("btn_support", async (ctx) => {
  try {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      "Для того, чтобы связаться с технической поддержкой"
    );
    ctx.telegram.sendMessage(
      -1001774788515,
      `username: ${ctx.from.username} - support`
    );
  } catch (err) {
    console.log(err);
  }
});

// Sorry
bot.on("text", (ctx) => {
  ctx.reply(
    "🤖 Бип-буп... Валли не понимать вас 🥺. Если у вас есть вопросы, обратитесь, пожалуйста, в поддержку - @cryptocadabra_support"
  );
});

bot.launch();
