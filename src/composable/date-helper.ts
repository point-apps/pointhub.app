import { format } from 'date-fns'

export function useDateHelper() {
  /**
   * Convert local date format to Date format
   *
   * local dateInput format is "dd-MM-yyyy"
   */
  const convertToDateInputFormat = (date: string | Date) => {
    return format(new Date(date), 'dd-MM-yyyy')
  }

  /**
   * Convert local date format to Date format
   *
   * local dateInput format is "dd-MM-yyyy"
   * local timeInput format is "HH:mm"
   */
  const convertToDateFormat = (dateInput: string | Date, timeInput?: string): Date | undefined => {
    const dateInputSplit = dateInput.toString().split('-')

    if (dateInputSplit.length !== 3) {
      return undefined
    }

    const dateNumber: number = Number(dateInputSplit[0])
    const monthNumber: number = Number(dateInputSplit[1])
    const yearNumber: number = Number(dateInputSplit[2])

    let timeInputSplit = undefined
    if (timeInput) {
      timeInputSplit = timeInput.split(':')
    }
    if (timeInput && timeInput.length !== 2) {
      return undefined
    }

    const hoursInput: number = timeInputSplit ? Number(timeInputSplit[0]) : 0
    const minutesInput: number = timeInputSplit ? Number(timeInputSplit[1]) : 0

    const dateFormat = new Date()
    dateFormat.setFullYear(yearNumber)
    dateFormat.setMonth(monthNumber - 1) // month start from 0 (january)
    dateFormat.setDate(dateNumber)
    dateFormat.setHours(hoursInput)
    dateFormat.setMinutes(minutesInput)
    dateFormat.setSeconds(0)
    dateFormat.setMilliseconds(0)
    return dateFormat
  }

  const getCurrentSemester = (currentDate: string | Date) => {
    const july = 6
    if (new Date(currentDate).getMonth() < july) {
      return 'odd'
    }

    return 'even'
  }

  const getCurrentYear = (): number => {
    return Number(format(new Date(), 'yyyy'))
  }

  return { convertToDateInputFormat, convertToDateFormat, getCurrentSemester, getCurrentYear }
}
