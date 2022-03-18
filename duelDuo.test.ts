
import { Builder, Capabilities, By } from "selenium-webdriver"
import { titleContains } from "selenium-webdriver/lib/until"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('button draw shows up when page loads', async () => {
    const draw = await driver.findElement(By.id('draw'))
    const displayed = await draw.isDisplayed()
    expect(displayed).toBe(true)
})

test('shuffleArray returns array', async () => {
    expect(shuffleArray).toBe(Array)
})