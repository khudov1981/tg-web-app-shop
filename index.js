import TelegramBot from "node-telegram-bot-api";

const token = "8178730840:AAHCtYRb_aXdcMDBksPBPVSNJLxRfTKMan0";
const webAppUrl = "https://bitbits.net/";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    await bot.sendMessage(chatId, "Ниже появится кнопка заполни форму", {
      reply_markup: {
        keyboard: [[{ text: "Заполнить форму", web_app: { url: webAppUrl } }]],
      },
    });
    await bot.sendMessage(chatId, "Ниже появится кнопка сделать заказ", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Сделать заказ", web_app: { url: webAppUrl } }],
        ],
      },
    });
  }
});
