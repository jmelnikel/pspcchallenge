import React from 'react'
import PropTypes from 'prop-types'

const CheeseList = (props) => {
  const { cheeseDirectory, language } = props
  console.log("This is cheese Directory", cheeseDirectory)
  console.log("This is language", language)

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name (En)</th>
          <th>Manufacturer</th>
          <th>Manuf. Prov.</th>
          <th>Manuf. Type</th>
          <th>Website</th>
          <th>Fat Cont. %</th>
          <th>Moisture %</th>
          <th>Particularities</th>
          <th>Flavor</th>
          <th>Characteristics</th>
          <th>Ripening</th>
          <th>Organic</th>
          <th>Cat. Type</th>
          <th>Milk Type</th>
          <th>Milk Treat.</th>
          <th>Rind Type</th>
          <th>Last Update</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  )
}

CheeseList.propTypes = {
  cheeseDirectory: PropTypes.array,
  language: PropTypes.string,
}

export default CheeseList
