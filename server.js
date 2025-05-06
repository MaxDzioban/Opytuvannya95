import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/evaluate', async (req, res) => {
    const { question, answer } = req.body;
    const prompt = `
Ти виконуєш роль асистента, який оцінює відповіді студентів на питання з комп’ютерної інженерії.

Оціни наведену відповідь за шкалою від -4 до +2 балів, згідно з такими критеріями:
- Якщо не зроблено чесної спроби відповісти або відповідь не має стосунку до питання — оцінка < 0.
- Якщо відповідь хоча б частково доречна — оцінка має бути 0.0 і вище.
- Оцінки >1 ставляться лише за винятково детальні, точні та добре сформульовані відповіді.

Питання: "${question}"

Відповідь студента: "${answer}"

Формат виводу — **JSON**:
{
  "score": <число від -4 до 2>,
  "comment": "<короткий коментар: сильні та слабкі сторони відповіді (2–3 речення)>,
  "ideal_answer": "<Дуже детальна ідеальна відповідь на це запитання, приблизно 120 - 150 слів.>""
}    `;
    
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [{ role: "user", content: prompt }],
                temperature: 0.3
            })
        });

        const data = await response.json();
        const reply = data.choices[0].message.content;
        const parsed = JSON.parse(reply);
        res.json(parsed);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Помилка сервера" });
    }
});

app.listen(3000, () => console.log("Сервер на порту 3000"));
