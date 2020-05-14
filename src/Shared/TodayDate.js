


////able to convert normal date in UTC format
  let date =  new Date().toISOString().slice(0, 10).split('-')
  const year = date[0]
  const month = date[1]
  const day = date[2]
  const UTC_FORMAT =  Date.UTC(year, month, day)
 export const currentDate =  UTC_FORMAT
