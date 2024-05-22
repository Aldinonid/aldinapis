import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import puppeteer from 'puppeteer';
import { config } from 'src/config/configuration';
import { slugify } from 'src/utils/commons';
import { Message, Result } from 'src/utils/enums';

@Injectable()
export class MangaService {

  async mangaDetails(title: string) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    try {
      await page.goto(`${config().webScrap}/manga/${title}`, {timeout: 0})
      const chapters = await page.$$eval('.eph-num', (els: any) => {
        return els.map((el: HTMLElement) => {
          return {
            link: el.querySelector('a')?.href,
            chapter: el.innerText.split('\n')[0].slice(3),
            date: el.innerText.split('\n')[1]
          }
        })
      })
      const mangaTitle = await page.$eval('.entry-title', (el: HTMLElement) => el.innerText)
      const desc = await page.$eval('.entry-content', (el: HTMLElement) => el.innerText.split('\n')[1])
      const rating = await page.$eval('.rating-prc', (el: HTMLElement) => el.innerText)
      const genres = await page.$$eval('span.mgen > a', (els: any) => els.map((el: HTMLElement) => el.innerHTML))
      const details = await page.$$eval('div.infox > div.flex-wrap > div.fmed', (els: any) => els.map((el: HTMLElement) => {
        const key: string = el.querySelector('b')?.innerText.replace(/(?:^\w|[A-Z]|\b\w)/g, (word: string) => word.toLowerCase()).replace(/\s+/g, '_') ?? ''
        return {
          [key]: el.querySelector('span')?.innerText
        }
      }))

      return new Result(Message.SUCCESS, {
        title: mangaTitle,
        description: desc,
        total_chapter: chapters.length,
        rating: rating,
        genres: genres,
        ...details.reduce((acc: any, curr: any) => {
          return {...acc, ...curr}
        }, {}),
        chapters
      })
    } catch (error) {
      console.error(`Error while scraping ${error}`)
      throw new ServiceUnavailableException()
    } finally {
      await browser.close()
    }
  }

  async readingChapter(title: string, chapter: string) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    try {
      await page.goto(`${config().webScrap}/${slugify(`${title} chapter ${chapter}`)}`, {timeout: 0})
      const images = await page.$$eval('p > img.alignnone', (els: any) => {
        return els.map((el: any) => el.src)
      })

      return new Result(Message.SUCCESS, {
        images: images
      })
    } catch (error) {
      console.error(`Error while scraping ${error}`)
    } finally {
      await browser.close()
    }
  
  }
}
