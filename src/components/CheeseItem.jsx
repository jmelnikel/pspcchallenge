import React from 'react';
import PropTypes from 'prop-types';

const CheeseItem = (props) => {
  const { language, cheeseItem } = props;
  const {
    CheeseId,
    CheeseNameEn,
    CheeseNameFr,
    ManufacturerNameEn,
    ManufacturerNameFr,
    ManufacturerProvCode,
    ManufacturingTypeEn,
    ManufacturingTypeFr,
    WebSiteEn,
    WebSiteFr,
    FatContentPercent,
    MoisturePercent,
    ParticularitiesEn,
    ParticularitiesFr,
    FlavourEn,
    FlavourFr,
    CharacteristicsEn,
    CharacteristicsFr,
    RipeningEn,
    RipeningFr,
    Organic,
    CategoryTypeEn,
    CategoryTypeFr,
    MilkTypeEn,
    MilkTypeFr,
    MilkTreatmentTypeEn,
    MilkTreatmentTypeFr,
    RindTypeEn,
    RindTypeFr,
    LastUpdateDate,
  } = cheeseItem;

  return (
    <tr>
      <td>{CheeseId}</td>
      <td>{CheeseNameEn}</td>
      <td>{CheeseNameFr}</td>
      <td>{language === "FR" && ManufacturerNameFr !== "" ? ManufacturerNameFr : ManufacturerNameEn}</td>
      <td>{ManufacturerProvCode}</td>
      <td>{language === "FR" && ManufacturingTypeFr !== "" ? ManufacturingTypeFr : ManufacturingTypeEn}</td>
      <td>{language === "FR" && WebSiteFr !== "" ? WebSiteFr : WebSiteEn}</td>
      <td>{FatContentPercent}</td>
      <td>{MoisturePercent}</td>
      <td>{language === "FR" && ParticularitiesFr !== "" ? ParticularitiesFr : ParticularitiesEn}</td>
      <td>{language === "FR" && FlavourFr !== "" ? FlavourFr : FlavourEn}</td>
      <td>{language === "FR" && CharacteristicsFr !== "" ? CharacteristicsFr : CharacteristicsEn}</td>
      <td>{language === "FR" && RipeningFr !== "" ? RipeningFr : RipeningEn}</td>
      <td>{Organic === "0" ? "No" : "Yes"}</td>
      <td>{language === "FR" && CategoryTypeFr !== "" ? CategoryTypeFr : CategoryTypeEn}</td>
      <td>{language === "FR" && MilkTypeFr !== "" ? MilkTypeFr : MilkTypeEn}</td>
      <td>{language === "FR" && MilkTreatmentTypeFr !== "" ? MilkTreatmentTypeFr : MilkTreatmentTypeEn}</td>
      <td>{language === "FR" && RindTypeFr !== "" ? RindTypeFr : RindTypeEn}</td>
      <td>{LastUpdateDate}</td>
    </tr>
  );
};

CheeseItem.propTypes = {
  language: PropTypes.string,
  cheeseDirectoryItem: PropTypes.object,
};

export default CheeseItem;