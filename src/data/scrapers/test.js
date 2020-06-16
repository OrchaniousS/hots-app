const puppeteer = require("puppeteer");
const fs = require("fs");

async function testScrape(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);

  const dataHero = [];

  switch (url) {
    case "https://www.heroesfire.com/hots/wiki/heroes":
      const dataHero = await page.evaluate(() =>
        Array.from(document.querySelectorAll("a.card-wrap")).map(
          (compact, i) => ({
            id: i,
            name: compact.querySelector("div.name").innerText.trim(),
            logo: compact.querySelector("img").src,
            role: compact
              .querySelector("div.stat:nth-child(3)")
              .innerText.trim(),
            difficulty: compact
              .querySelector("div.stat:nth-child(5)")
              .innerText.trim(),
            franchise: compact
              .querySelector("div.stat:nth-child(4)")
              .innerText.trim(),
            //title: compact.$x('//*[@id="chapter"]/div/table/tbody/tr/td[2]/table/tbody/tr[1]/td/table/tbody/tr/td[1]/text()[1]').getProperty('textContent'),
          })
        )
      );

      let data = JSON.stringify(dataHero, null, 2);
      fs.writeFileSync("formalHeroes.json", data);
      break;
    case `https://www.heroesfire.com/hots/wiki/heroes/${dataHero.name}`:
      break;
    default:
      console.log(`url is not right : ${url}`);
  }

  browser.close();
}

const url = "https://www.heroesfire.com/hots/wiki/heroes";
testScrape(url);

// getting info from chrome console -
// Array.from(document.querySelectorAll('a.card-wrap')).map((item)=>item.innerText.trim())
// heroes names
// Array.from(document.querySelectorAll('div.card-wrap')).map((item)=>item.innerText.trim())
// heroes images
// Array.from(document.querySelectorAll('a.card-wrap img')).map((item)=>item.src)
// Actual code for doing the above
// const divHero = await page.evaluate(() =>
// Array.from(document.querySelectorAll("div.card-wrap")).map((item) =>
//   item.innerText.trim()
// )
// );

// const imgHero = await page.evaluate(() =>
// Array.from(document.querySelectorAll("a.card-wrap img")).map(
//   (item) => item.src
// )
// );
