import TelegramBot from "node-telegram-bot-api";

const token = "8178730840:AAHCtYRb_aXdcMDBksPBPVSNJLxRfTKMan0";
const webAppUrl = "https://helpful-crumble-b3172c.netlify.app/";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    await bot.sendMessage(chatId, "Ниже появится кнопка заполни форму", {
      reply_markup: {
        keyboard: [
          [{ text: "Заполнить форму", web_app: { url: webAppUrl + "/form" } }],
        ],
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
