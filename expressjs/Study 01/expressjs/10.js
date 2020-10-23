var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');

app.use(cookieParser());

// Referenciando session:
var session = require('express-session');

// Utilizando session:
app.use(session({ secret: 'EB1B4F402512A6DF3E9DB92D367DF8132EE53B00842BE4354B9DC91ED006F60DE4A6E3BC8D7614588290FF3AB11852BB505FEA2FED4BC7990F651B80F9218993' }));

app.get('/', (req, res) => {
    if (req.session.page_views) {
        req.session.page_views++;
        res.send(`Você visitou essa página ${req.session.page_views} vezes.`);
    } else {
        res.send(`Seja bem vindo!`);
        req.session.page_views = 1;
    }
})

app.listen(8000, () => {
    console.log('Connected!');
})