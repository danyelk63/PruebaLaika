const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.json(
        [
            {
                id: "1",
                name: "Ringo Vitality Super Premium Adultos",
                imageName: "Ringo_Vitality_Super_Premium_Adultos.jpg",
                stars: 5,
                price: 22.500,
                discount: 10,
                size: ["2KG"]
            }, 
            {
                id: "2",
                name: "Br For Cat Wild Adulto",
                imageName: "BR_FOR_CAT_WILD_ADULTO.jpg",
                stars: 4,
                price: 28.500,
                discount: 15,
                size: ["1KG"]
            },
        ]
    );
});

app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});