import data from '../../assets 2023-01-09.json';


export function getTotalNumberOfAssets(date) {
    const data = JSON.parse(data);
    if (!date) {
        return data["Data"].length;
    }
    let total = 0;
    data["Data"].forEach(d => {
        if (d === date) total++;
    });
    return total;
}

function getAssetsWithoutSerialNumber() {

}

function getTotalActiveAssets() {

}

function getTotalInstalledAssets() {

}

function getTotalStolenAssets() {

}

function getTotalScrappedAssets() {

}

function getTotalReSoldAssets() {

}

function getTotalAssetsonStock() {

}

function getTotalDeletedAssets() {

}

function getTotalDecomissionedDevices() {

}

function getTotalTotalFinanceCost() {

}

function getTotalNumberOfUsers() {

}


function getTotalAssetsWithoutWarranty() {

}

function getTotalAssetsWithoutWarrantyPercentage() {

}

function getTotalNumberOfUsers() {

}