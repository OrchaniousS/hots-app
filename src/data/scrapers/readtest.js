// got stuck on mana -- regen selector -- to do later as project goes on
const puppeteer = require("puppeteer");
const fs = require("fs");

scraper2("https://www.heroesfire.com/hots/wiki/heroes");

async function scraper2(url) {
  const browser = await puppeteer.launch({
    /*headless: false*/
  });
  const page = await browser.newPage();
  await page.goto(url);

  const heroList = await page.evaluate(() =>
    Array.from(document.querySelectorAll("#cards > div.grid a")).map(
      (link) => link.href
    )
  );
  // const dataLinks = JSON.stringify(heroList, null, 2)
  // fs.writeFileSync('hotsHeroes',dataLinks)

  for (let heroLink of heroList) {
    await page.goto(heroLink);

    const jsonHero = await page.evaluate(() =>
      Array.from(
        document.querySelectorAll("#wiki > div.col-l > div:nth-child(2)")
      ).map((compact, i) => ({
        name: compact.querySelector("h2").innerText.trim(),
        health: compact
          .querySelector([
            "#chapter > div > table > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr:nth-child(1) > td:nth-child(2)",
            "#chapter > div > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(1) > td > table > tbody > tr > td.hero-stats > table > tbody > tr:nth-child(1) > td:nth-child(2)",
          ])
          .innerText.toString()
          .trim(),
        //  healthRegen: compact.querySelector(['#chapter > div > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(1) > td > table > tbody > tr > td.hero-stats > table > tbody > tr:nth-child(2) > td:nth-child(2)','#chapter > div > table > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(2)']).innerText.trim(),
        //  mana: compact.querySelector(['#chapter > div > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(1) > td > table > tbody > tr > td.hero-stats > table > tbody > tr:nth-child(3) > td:nth-child(2)','#chapter > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr:nth-child(3) > td:nth-child(2)']).innerText.trim(),
        // // manaRegen: compact.querySelector('' || '').innerText.trim(),
        // attackSpeed: compact.querySelector('' || '').innerText.trim(),
        damage: {
          damageA: compact
            .querySelector([
              "#chapter > div > table > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr:nth-child(6) > td:nth-child(2)",
              "#chapter > div > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(1) > td > table > tbody > tr > td.hero-stats > table > tbody > tr:nth-child(4) > td:nth-child(2)",
            ])
            .innerText.trim(),
          damageB: compact
            .querySelector([
              "tbody > tr:nth-child(6) > td:nth-child(2)",
              "#chapter > div > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(1) > td > table > tbody > tr > td.hero-stats > table > tbody > tr:nth-child(4) > td:nth-child(2)",
            ])
            .innerText.trim(),
          damageC: compact
            .querySelector([
              "#chapter > div > table > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr:nth-child(4) > td:nth-child(2)",
              "#chapter > div > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(1) > td > table > tbody > tr > td.hero-stats > table > tbody > tr:nth-child(4) > td:nth-child(2)",
              "#chapter > div > table > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr:nth-child(6) > td:nth-child(2)",
            ])
            .innerText.trim(),
        },
        qoute: compact
          .querySelector([
            "#chapter > div > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2)",
            "#chapter > div > table > tbody > tr:nth-child(3) > td",
          ])
          .innerText.trim(),
        // statistics: {
        //     title: compact.querySelector('td.hero-stats').innerText.toString().split('\n')[0].split(":", 3)[1],
        //     role: compact.querySelector('td.hero-stats').innerText.toString().split('\n',2)[1].split(":",3)[1],
        //     franchise: compact.querySelector('td.hero-stats').innerText.toString().split('\n',3)[2].split(":",3)[1],
        //     price: compact.querySelector('td.hero-stats').innerText.toString().split('\n',4)[3].split(":",3)[1],
        // }
      }))
    );

    // let data = JSON.stringify(jsonHero,null,2)
    // fs.writeFileSync('detailsHero.json',data)
    console.log(jsonHero);
  }
  browser.close();
}

// to add section

// ~~~~~getting single info without selectors
// let info =  Array.from(document.querySelectorAll('td.hero-stats'))
//         .map(item => ({
//             mainInfo: item.innerText.trim(),
//         }))

// let titleSplit = info[0].mainInfo.toString().split('\n')[0].split(":",3)[1]
// let roleSplit = info[0].mainInfo.toString().split('\n',2)[1].split(":",3)[1]
// let franchiseSplit = info[0].mainInfo.toString().split('\n',3)[2].split(":",3)[1]
// let priceSplit =  info[0].mainInfo.toString().split('\n',4)[3].split(":",3)[1]

//   Array.from(document.querySelectorAll('#wiki > div.col-l > div:nth-child(2)'))
//         .map(item => ({
//             mainInfo: item.innerText.trim(),
//             title: item.querySelector('td.hero-stats').innerText.toString().split('\n')[0].split(":",3)[1]
//         }))
