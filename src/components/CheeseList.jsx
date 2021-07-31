import React from 'react';
import PropTypes from 'prop-types';
import CheeseItem from './CheeseItem';

const CheeseList = (props) => {
  const { cheeseDirectory, language } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name (En)</th>
          <th>Name (Fr)</th>
          <th>Manufacturer</th>
          <th>Manuf. Prov.</th>
          <th>Manuf. Type</th>
          <th>Website</th>
          <th>Fat Cont. %</th>
          <th>Moisture %</th>
          <th>Particularities</th>
          <th>Flavor</th>
          <th>Charac.</th>
          <th>Ripening</th>
          <th>Organinc</th>
          <th>Cat. Type</th>
          <th>Milk Type</th>
          <th>Milk Treat.</th>
          <th>Rinf Type</th>
          <th>Last Update</th>
        </tr>
      </thead>
      <tbody>
        {cheeseDirectory && cheeseDirectory.map((cheeseItem, index) => {
          return (
            <CheeseItem key={index} cheeseItem={cheeseItem} language={language} />
          )
        })}
      </tbody>
    </table>
  );
};

CheeseList.propTypes = {
  cheeseDirectory: PropTypes.array,
  language: PropTypes.string,
};

export default CheeseList;