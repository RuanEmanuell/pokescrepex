import express from "express";
import puppeteer from "puppeteer";
import cors from "cors";

const app = express();

app.use(
    cors({
        origin: "http://localhost:4200"
    })
)

app.get("/", (req, res) => {
    {
        res.status(200);
        res.send("Hello World!");
    }
});

app.get("/pokemon/:pokemon", async (req, res) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto(`https://pokemondb.net/pokedex/${req.params.pokemon}`);

        const name = await page.$eval("h1", element => element.textContent);
        const dexId = await page.$eval("a:nth-of-type(2)", element => parseInt(element.textContent.substring(2, 5)) - 1);
        const sprite = await page.$eval(".img-sprite-v13", element => element.src);
        const type1 = await page.$eval("p a", element => element.textContent);
        let type2 = null;
        try {
            type2 = await page.$eval("p a:nth-of-type(2)", element => element.textContent);
        } catch (error) {
            console.error(error);
        } finally {
            res.status(200);
            res.send({
                name: name,
                dexId: dexId,
                type1: type1,
                type2: type2,
                sprite: sprite
            }
            );
        }
    } catch (error) {
        console.error(error);
        res.status(404);
    }
});

app.listen(3000, (error) => {
    {
        if (error) {
            console.error(error);
        } else {
            console.log("Server rodando na porta 3000");
        }
    }
});
