import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class MangaService {

  async allListChapter(title: string) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    try {
      await page.goto(`https://kingofshojo.com/manga/${title}`)
      const chapters = await page.$$eval('.eph-num', (els: any) => {
        els.shift()
        return els.map((el: HTMLElement) => {
          return {
            link: el.querySelector('a')?.href,
            chapter: el.innerText.split('\n')[0],
            date: el.innerText.split('\n')[1]
          }
        })
      })

      return chapters
    } catch (error) {
      console.error(`Error while scraping ${error}`)
    } finally {
      await browser.close()
    }

  }

  async readingChapter(title: string, chapter: string) {
    const chapterTitle = `${title}-chapter-${chapter}`
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    try {
      await page.goto(`https://kingofshojo.com/${chapterTitle}`)
      const images = await page.$$eval('p > img.alignnone', (els: any) => {
        return els.map((el: any) => el.src)
      })

      return {
        images: images
      }
    } catch (error) {
      console.error(`Error while scraping ${error}`)
    } finally {
      await browser.close()
    }
  
  }
}
