const puppeteer = require("puppeteer");
const fs = require("fs");

// heroes wiki gamepedia
dataScraperH("https://heroesofthestorm.gamepedia.com/Heroes_of_the_Storm_Wiki");

async function dataScraperH(url) {
  // headless - to see browser
  const browser = await puppeteer.launch({
    // headless: false,
  });
  const page = await browser.newPage();
  await page.goto(url);

  //link scraper
  const heroLinkList = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(".main-page-hero-headers .hero-tile .link")
    )
      .map((compact) => ({
        name: compact.innerText,
        nameLink: compact.querySelector("a").href.split("/")[3],
      }))
      .slice(0)
      .sort(function (a, b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      })
  );

  let heroData = [];

  ///data scraper from link
  for (let heroLink of heroLinkList) {
    await page.goto(
      `https://heroesofthestorm.gamepedia.com/Data:${heroLink.nameLink}`
    );

    const heroDataScraper = await page.evaluate(() =>
      Array.from(document.querySelectorAll("#bodyContent")).map((compact) => ({
        basicInfo: {
          name: compact.querySelector([
            "div > table:nth-child(1) > tbody > tr:nth-child(3) > td:nth-child(3)",
            "div > table:nth-child(2) > tbody > tr:nth-child(3) > td:nth-child(3)",
          ]).innerText,
          title: compact.querySelector([
            "div > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(3)",
            "div > table:nth-child(2) > tbody > tr:nth-child(6) > td:nth-child(3)",
          ]).innerText,
          role:
            compact.querySelector([
              "div > table:nth-child(1) > tbody > tr:nth-child(7) > td:nth-child(3)",
              "div > table:nth-child(2) > tbody > tr:nth-child(7) > td:nth-child(3)",
            ]).innerText === "Melee" ||
            compact.querySelector([
              "div > table:nth-child(1) > tbody > tr:nth-child(7) > td:nth-child(3)",
              "div > table:nth-child(2) > tbody > tr:nth-child(7) > td:nth-child(3)",
            ]).innerText === "Ranged"
              ? compact.querySelector([
                  "div > table:nth-child(1) > tbody > tr:nth-child(7) > td:nth-child(3)",
                  "div > table:nth-child(2) > tbody > tr:nth-child(7) > td:nth-child(3)",
                ]).innerText + " Assassin"
              : compact.querySelector([
                  "div > table:nth-child(1) > tbody > tr:nth-child(7) > td:nth-child(3)",
                  "div > table:nth-child(2) > tbody > tr:nth-child(7) > td:nth-child(3)",
                ]).innerText,
          difficulty: compact.querySelector([
            "div > table:nth-child(1) > tbody > tr:nth-child(11) > td:nth-child(3)",
            "div > table:nth-child(2) > tbody > tr:nth-child(11) > td:nth-child(3)",
          ]).innerText,
          price: compact.querySelector([
            "div > table:nth-child(1) > tbody > tr:nth-child(5) > td:nth-child(3)",
            "div > table:nth-child(2) > tbody > tr:nth-child(5) > td:nth-child(3)",
          ]).innerText,
          qoute: compact.querySelector([
            "div > table:nth-child(1) > tbody > tr:nth-child(10) > td:nth-child(3)",
            "div > table:nth-child(2) > tbody > tr:nth-child(10) > td:nth-child(3)",
          ]).innerText,
        },
        baseStats: {
          attackType:
            compact.querySelector([
              "div > table:nth-child(2) > tbody > tr:nth-child(12) > td:nth-child(3)",
              "div > table:nth-child(1) > tbody > tr:nth-child(12) > td:nth-child(3)",
            ]).innerText === "False"
              ? "Ranged"
              : "Melee",
          health: compact.querySelector([
            "div > table:nth-child(1) > tbody > tr:nth-child(13) > td:nth-child(3)",
            "div > table:nth-child(2) > tbody > tr:nth-child(13) > td:nth-child(3)",
          ]).innerText,
          healthRegen: compact.querySelector([
            "div > table:nth-child(1) > tbody > tr:nth-child(14) > td:nth-child(3)",
            "div > table:nth-child(2) > tbody > tr:nth-child(14) > td:nth-child(3)",
          ]).innerText,
          resourceAmount: compact.querySelector([
            "div > table:nth-child(1) > tbody > tr:nth-child(15) > td:nth-child(3)",
            "div > table:nth-child(2) > tbody > tr:nth-child(15) > td:nth-child(3)",
          ]).innerText,
          resourceType: compact.querySelector([
            "div > table:nth-child(1) > tbody > tr:nth-child(16) > td:nth-child(3)",
            "div > table:nth-child(2) > tbody > tr:nth-child(16) > td:nth-child(3)",
          ]).innerText,
          attackDamage: compact.querySelector([
            "div > table:nth-child(1) > tbody > tr:nth-child(20) > td:nth-child(3)",
            "div > table:nth-child(2) > tbody > tr:nth-child(20) > td:nth-child(3)",
          ]).innerText,
          attackSpeed: compact.querySelector([
            "div > table:nth-child(1) > tbody > tr:nth-child(18) > td:nth-child(3)",
            "div > table:nth-child(2) > tbody > tr:nth-child(18) > td:nth-child(3)",
          ]).innerText,
          attackRange: compact.querySelector([
            "div > table:nth-child(1) > tbody > tr:nth-child(19) > td:nth-child(3)",
            "div > table:nth-child(2) > tbody > tr:nth-child(19) > td:nth-child(3)",
          ]).innerText,
        },
      }))
    );

    heroData.push(JSON.stringify(heroDataScraper[0], null, 2));
    console.log(heroData);
  }
  fs.writeFileSync("gpHeroesData.json", heroData);
  browser.close();
}
