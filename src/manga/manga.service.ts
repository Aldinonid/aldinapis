import { Injectable, InternalServerErrorException } from '@nestjs/common';
import puppeteer from 'puppeteer';
import { config } from 'src/config/configuration';
import { slugify } from 'src/utils/commons';
import { Message, Result } from 'src/utils/enums';

@Injectable()
export class MangaService {

  async getPopularManga() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    try {
      await page.goto(`${config().webScrap}`, {timeout: 0})
      const mangas = await page.$$eval('.serieslist > ul > li', (els: any) => els.map((el: HTMLElement) => {
        const image = el.querySelector('.imgseries > a > img') as HTMLImageElement
        const rating = (el.querySelector('.leftseries > div > div > div.numscore') as HTMLDivElement)?.innerText
        let genres: string[] = []
        el.querySelectorAll('.leftseries > span > a').forEach((val: HTMLAnchorElement) => genres.push(val.innerText))
        return {
          title: image.alt,
          rating: rating,
          thumbnail: image.src,
          genres: genres
        }
      }))

      return new Result(Message.SUCCESS, mangas)
    } catch (error) {
      console.error(`Error while scraping ${error}`)
      throw new InternalServerErrorException(error)
    } finally {
      await browser.close()
    }
  }

  async searchManga(query: string) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    try {
      await page.goto(`${config().webScrap}`, {timeout: 0})
      await page.type('#s', query)
      await page.keyboard.press('Enter')
      await page.waitForNavigation()

      const mangas = await page.$$eval('.bsx', (els: any) => els.map((el: HTMLElement) => {
        const lastChapter = el.querySelector('.epxs')?.innerHTML.split(' ')[1]
        const rating = el.querySelector('.numscore')?.innerHTML
        const image = el.querySelector('div.limit > img') as HTMLImageElement
        const link = el.querySelector('a') as HTMLAnchorElement
        return {
          title: image.alt,
          lastChapter: lastChapter,
          rating: rating,
          thumbnail: image.src,
          link: link.href
        }
      }))

      return new Result(Message.SUCCESS, mangas)

    } catch (error) {
      console.error(`Error while scraping ${error}`)
      throw new InternalServerErrorException(error)
    } finally {
      await browser.close()
    }
  }

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
      throw new InternalServerErrorException(error)
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
