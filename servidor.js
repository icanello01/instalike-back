import express from 'express';

const app = express();
app.listen(4000, () => {
    console.log('Servidor escutando na porta 4000');
});

app.get('/saudacao', (req, res) => {
    res.status(200).send({
        mensagem: "Olá, bem-vindo à Imersão Dev Back-End!"
});
});