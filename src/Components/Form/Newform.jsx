import React from 'react'

function Newform() {
  return (
    <form action="https://app.sheetlabs.com/CCO/menudaciba" method="POST" id="sheetdb-form">
  Name: <input name="data[nombre]"/>
  Email: <input name="data[email]"/>
  <button type="submit">Submit</button>
    </form>
  )
}

export default Newform

