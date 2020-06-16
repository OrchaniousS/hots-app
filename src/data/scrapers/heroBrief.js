const puppeteer = require("puppeteer");
const fs = require("fs");

briefScraper("https://heroesofthestorm.com/en-us/heroes/");

async function briefScraper(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);

  let heroInsideLink = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(
        "#site > div > section > div.HeroesFlexbox-container > div.HeroGrid > a.HeroGrid-item"
      )
    ).map((compact) => ({
      heroName: compact.innerText,
      heroLink: compact.href,
    }))
  );

  let jsonData = [];

  for (let heroL of heroInsideLink) {
    await page.goto(heroL.heroLink);
    const briefHero = await page.evaluate(() =>
      Array.from(document.querySelectorAll("#site > div > div"))
        .map((compact) => ({
          heroName: compact.querySelector("h1").innerText,
          primary: {
            skills: {
              skillA: {
                skillName: compact.querySelector(
                  "div.heroAbilities.heroAbilities--primary > div:nth-child(1) > div > div > h3"
                ).innerText,
                skillImage: compact.querySelector(
                  "div.heroAbilities.heroAbilities--primary > div:nth-child(1) > div > div > h3 > span.heroAbility-name-icon > img"
                ).src,
                skillInfo: compact.querySelector(
                  "div.heroAbilities.heroAbilities--primary > div:nth-child(1) > div > div > span"
                ).innerText,
              },
              skillB: {
                skillName: compact.querySelector(
                  "div.heroAbilities.heroAbilities--primary > div:nth-child(2) > div > div > h3"
                ).innerText,
                skillImage: compact.querySelector(
                  "div.heroAbilities.heroAbilities--primary > div:nth-child(2) > div > div > h3 > span.heroAbility-name-icon > img"
                ).src,
                skillInfo: compact.querySelector(
                  "div.heroAbilities.heroAbilities--primary > div:nth-child(2) > div > div > span"
                ).innerText,
              },
              skillC: {
                skillName: compact.querySelector(
                  "div.heroAbilities.heroAbilities--primary > div:nth-child(3) > div > div > h3"
                ).innerText,
                skillImage: compact.querySelector(
                  "div.heroAbilities.heroAbilities--primary > div:nth-child(3) > div > div > h3 > span.heroAbility-name-icon > img"
                ).src,
                skillInfo: compact.querySelector(
                  "div.heroAbilities.heroAbilities--primary > div:nth-child(3) > div > div > span"
                ).innerText,
              },
              skillD: {
                skillName:
                  compact
                    .querySelector(".heroAbilities--primary")
                    .getElementsByTagName("h3").length > 3
                    ? compact.querySelector(
                        "div.heroAbilities.heroAbilities--primary > div:nth-child(4) > div > div > h3"
                      ).innerText
                    : "",
                skillImage:
                  compact
                    .querySelector(".heroAbilities--primary")
                    .getElementsByTagName("h3").length > 3
                    ? compact.querySelector(
                        "div.heroAbilities.heroAbilities--primary > div:nth-child(4) > div > div > h3 > span.heroAbility-name-icon > img"
                      ).src
                    : "",
                skillInfo:
                  compact
                    .querySelector(".heroAbilities--primary")
                    .getElementsByTagName("h3").length > 3
                    ? compact.querySelector(
                        "div.heroAbilities.heroAbilities--primary > div:nth-child(4) > div > div > span"
                      ).innerText
                    : "",
              },
            },
          },
          heroic: {
            skills: {
              skillA: {
                skillName: compact.querySelector(
                  "div.heroAbilities.heroAbilities--heroic > div:nth-child(1) > div > div > h3 > span.heroAbility-name-text"
                ).innerText,
                skillImage: compact.querySelector(
                  "div.heroAbilities.heroAbilities--heroic > div:nth-child(1) > div > div > h3 > span.heroAbility-name-icon > img"
                ).src,
                skillInfo: compact.querySelector(
                  "div.heroAbilities.heroAbilities--heroic > div:nth-child(1) > div > div > span"
                ).innerText,
              },
              skillB: {
                skillName:
                  compact
                    .querySelector(".heroAbilities--heroic")
                    .getElementsByTagName("h3").length > 1
                    ? compact.querySelector(
                        "div.heroAbilities.heroAbilities--heroic > div:nth-child(2) > div > div > h3 > span.heroAbility-name-text"
                      ).innerText
                    : "",

                skillImage:
                  compact
                    .querySelector(".heroAbilities--heroic")
                    .getElementsByTagName("h3").length > 1
                    ? compact.querySelector(
                        "div.heroAbilities.heroAbilities--heroic > div:nth-child(2) > div > div > h3 > span.heroAbility-name-icon > img"
                      ).src
                    : "",

                skillInfo:
                  compact
                    .querySelector(".heroAbilities--heroic")
                    .getElementsByTagName("h3").length > 1
                    ? compact.querySelector(
                        "div.heroAbilities.heroAbilities--heroic > div:nth-child(2) > div > div > span"
                      ).innerText
                    : "",
              },
            },
          },
          trait: {
            skillName: compact.querySelector(
              "div > div > section.summary.Container > div > div > div.summaryCard.summaryCard--abilities > div > div.abilities-summary.summaryCard-abilityList > div > a > div.abilityTooltip.abilityTooltip--right > span.abilityTooltip-title"
            ).innerText,
            skillImage: compact.querySelector(
              "div > div > section.summary.Container > div > div > div.summaryCard.summaryCard--abilities > div > div.abilities-summary.summaryCard-abilityList > div > a > div.abilityIcon > img"
            ).src,
            skillInfo: compact.querySelector(
              "div > div > section.summary.Container > div > div > div.summaryCard.summaryCard--abilities > div > div.abilities-summary.summaryCard-abilityList > div > a > div.abilityTooltip.abilityTooltip--right > span.abilityTooltip-description"
            ).innerText,
          },
        }))
        .sort(function (a, b) {
          let nameA = a.heroName.toUpperCase();
          let nameB = b.heroName.toUpperCase();
          return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
        })
    );
    console.log(briefHero);
    // jsonData.push(JSON.stringify(briefHero[0], null, 2));
  }

  // fs.writeFileSync("heroesSkills.json", jsonData);

  browser.close();
}

// Array.from(document.querySelectorAll("#hero-panel > div > div > div > div.NavigationButtons-container .AbilitiesSection-container")).map((info)=>({
//     primaryAbilities: info.querySelector('.CircleIcon img').src,
//     heroicAbilities: info.querySelector('.CircleIcon img').src,
//     inf: info.innerText,
//     }));
