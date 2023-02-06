// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React from 'react';
import Webix from './Webix';
import TotalNumberOfAssetsLineChart from './widgets/TotalNumberOfAssets/TotalNumberOfAssetsLineChart';
import TotalNumberOfAssetsBarChart from './widgets/TotalNumberOfAssets/TotalNumberOfAssetsBarChart';
import TotalNumberOfAssetsPieChart from './widgets/TotalNumberOfAssets/TotalNumberOfAssetsPieChart';
import TotalNuberOfActiveAssetsBarChart from './widgets/TotalNumberOfAssets/TotalNuberOfActiveAssetsBarChart';
import TotalNumberOfAssetsWithoutSerialNumberPieChart from './widgets/TotalNumberOfAssets/TotalNumberOfAssetsWithoutSerialNumberPieChart';

function getForm(save) {
  return {
    view: "form", width: 400, elements: [
      { view: "text", name: "name", label: "Name", placeholder: "Type your full name here" },
      { view: "text", name: "email", label: "Email" },
      { view: "slider", name: "age", label: "Age", value: "25" },
      {
        cols: [
          {}, {
            view: "button", value: "Save", click: function () {
              if (save)
                save(this.getFormView().getValues());
            }
          }
        ]
      }
    ]
  };
}

const FormView = ({ data, save }) => (
  <div>
    {/* <Webix ui={getForm(save)} data={data}/> */}
    <TotalNumberOfAssetsLineChart />
    <TotalNumberOfAssetsBarChart />
    <TotalNumberOfAssetsPieChart />
    <TotalNuberOfActiveAssetsBarChart />
    <TotalNumberOfAssetsWithoutSerialNumberPieChart />
  </div>
)
export default FormView;
