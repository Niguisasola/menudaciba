import React from 'react'

function FormCalendar() {
  return (
    <form>
        <input type='date'></input>
        <select name="times" id="times">
            <option value="times">9:00</option>
            <option value="times">9:30</option>
            <option value="times">10:00</option>
            <option value="times">10:30</option>
            <option value="times">11:00</option>
        </select>
    </form>
  )
}

export default FormCalendar