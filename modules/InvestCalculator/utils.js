import { addMonths, addYears, differenceInMonths } from "date-fns"

const createTimeArray = (range) => {
  const { start, years } = range
  const endDate = addYears(start, years)
  const numberOfMonths = differenceInMonths(endDate, start)
  const list = []
  for (let i = 0; i < numberOfMonths; i++) {
    list.push({
      date: addMonths(start, i)
    })
  }
  return list
}

const plotMonthlyIncreaments = (timeline, amount, rate) => {
  const list = []
  for (let i = 0; i < timeline.length; i++) {
    if (list.length === 0) {
      list.push({
        ...timeline[i],
        value: amount,
      })
    } else {
      const prevCell = list[i - 1]
      const newAmt = prevCell.value + (rate / 100) * prevCell.value
      list.push({
        ...timeline[i],
        value: newAmt,
      })
    }
  }
  return list
}

export const getROI = (data, range) => {
  // avgInt: https://www.google.com/search?q=average+land+price+increase+per+year&oq=average+land+price&aqs=chrome.2.0i512j69i57j0i457i512j0i512l7.28323j0j7&sourceid=chrome&ie=UTF-8
  const avgAnnualInc = 7 // 7%
  const timeline = createTimeArray(range)
  const landROI = plotMonthlyIncreaments(timeline, data.amount, 7) // Land ROI
  const stocksROI = plotMonthlyIncreaments(timeline, data.amount, 10) // Stocks ROI
  const FDROI = plotMonthlyIncreaments(timeline, data.amount, 4.5) // Stocks ROI
  return {
    landROI,
    stocksROI,
    FDROI,
  }
}
