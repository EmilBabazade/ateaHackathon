import dataArray from '../../assets 2023-01-09.json';


export function getTotalNumberOfAssets(date) {
    const data = JSON.parse(JSON.stringify(dataArray));
    if (!date) {
        return data["Data"].length;
    }
    let total = 0;

    var dateObject = new Date(date).setHours(0, 0, 0, 0)

    data["Data"].forEach(d => {
        if (new Date(d.OrderDate).setHours(0, 0, 0, 0) === dateObject) total++;
    });
    return total;
}

export function getTotalActiveAssets() {
    const data = JSON.parse(JSON.stringify(dataArray));
    let totalActiveAssets = 0;
    data["Data"].forEach(d => {
        if (d.Status === "4" || d.Status === "6" || d.Status === "7" || d.Status === "9" 
        || d.Status === "10" || d.Status === "13" || d.Status === "16") totalActiveAssets++;
    });
    return totalActiveAssets;
}

export function getTotalInstalledAssets() {
    const data = JSON.parse(JSON.stringify(dataArray));
    let totalInstalledAssets = 0;
    data["Data"].forEach(d => {
        if (d.Status === "7") totalInstalledAssets++;
    });
    return totalInstalledAssets;
}

export function getTotalStolenAssets() {
    const data = JSON.parse(JSON.stringify(dataArray));
    let totalStolenAssets = 0;
    data["Data"].forEach(d => {
        if (d.Status === "14") totalStolenAssets++;
    });
    return totalStolenAssets;
}

export function getTotalScrappedAssets() {
    const data = JSON.parse(JSON.stringify(dataArray));
    let totalScrappedAssets = 0;
    data["Data"].forEach(d => {
        if (d.Status === "17") totalScrappedAssets++;
    });
    return totalScrappedAssets;
}

export function getTotalReSoldAssets() {
    const data = JSON.parse(JSON.stringify(dataArray));
    let totalReSoldAssets = 0;
    data["Data"].forEach(d => {
        if (d.Status === "25") totalReSoldAssets++;
    });
    return totalReSoldAssets;
}

export function getTotalAssetsonStock() {
    const data = JSON.parse(JSON.stringify(dataArray));
    let totalAssetsonStock = 0;
    data["Data"].forEach(d => {
        if (d.Status === "16") totalAssetsonStock++;
    });
    return totalAssetsonStock;
}

export function getTotalDecomissionedDevices() {
    const data = JSON.parse(JSON.stringify(dataArray));
    let totalDecomissionedDevices = 0;
    data["Data"].forEach(d => {
        if (d.Status === "21") totalDecomissionedDevices++;
    });
    return totalDecomissionedDevices;
}

export function getTotalFinanceCost() {
    const data = JSON.parse(JSON.stringify(dataArray));
    let totalFinanceCost = 0;
    data["Data"].forEach(d => {
        if ((d.Status === "4" || d.Status === "6" || d.Status === "7" || d.Status === "9" 
        || d.Status === "10" || d.Status === "13" || d.Status === "16") && parseFloat(d.LeaseCost) > 0)
        totalFinanceCost += parseFloat(d.LeaseCost);
    });
    return totalFinanceCost;
}

export function getTotalAssetsWithoutWarranty() {
    const data = JSON.parse(JSON.stringify(dataArray));
    let totalAssetsWithoutWarranty = 0;
    data["Data"].forEach(d => {
        if ((d.Status === "4" || d.Status === "6" || d.Status === "7" || d.Status === "9" 
        || d.Status === "10" || d.Status === "13" || d.Status === "16") && d.Warranty === "NULL")
        totalAssetsWithoutWarranty ++;
    });
    return totalAssetsWithoutWarranty;
}

export function getTotalAssetsWithoutWarrantyPercentage() {
    return getTotalAssetsWithoutWarranty() / getTotalActiveAssets() * 100;;
}

export function getAssetsWithoutSerialNumber() {
    const data = JSON.parse(JSON.stringify(dataArray));
    let assetsWithoutSerialNumber = 0;
    data["Data"].forEach(d => {
        if ((d.Status === "4" || d.Status === "6" || d.Status === "7" || d.Status === "9" 
        || d.Status === "10" || d.Status === "13" || d.Status === "16") && d.SerialNo === undefined) assetsWithoutSerialNumber++;
    });
    return assetsWithoutSerialNumber;
}

export function getTotalDeletedAssets() {
    return getTotalScrappedAssets();
}

export function getTotalNumberOfUsers() {
    
}