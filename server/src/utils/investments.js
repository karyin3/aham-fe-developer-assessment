const fs = require('fs');

const FILE = './data/investments.json';

const loadInvestments = () => {
    try {
        const dataBuffer = fs.readFileSync(FILE)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON);
    } catch (e) {
        console.log(e)
        if (e.code === 'ENOENT') {
            return []
        }
        throw e
    }
}

const getInvestmentByUser = (userId) => {
    const investments = loadInvestments();

    return investments[userId];
}

const updateInvestmentRecord = ({ userId, fundId, fundName, nav, numberOfUnits, currency }) => {
    var userInvestment = getInvestmentByUser(userId);
    numberOfUnits = Number(numberOfUnits)

    const totalAdditionalInvestment = Number((nav * numberOfUnits).toFixed(2))

    const investmentIndex = userInvestment.findIndex((element) => element.fundId == fundId);

    if (investmentIndex >= 0) {
        userInvestment[investmentIndex].totalUnits += numberOfUnits
        userInvestment[investmentIndex].totalInvestment += totalAdditionalInvestment
    } else {
        userInvestment.push({
            "fundId": fundId,
            "fundName": fundName,
            "currency": currency,
            "totalUnits": numberOfUnits,
            "totalInvestment": totalAdditionalInvestment
        })
    }

    const newRecord = JSON.stringify({[userId]: userInvestment})
    fs.writeFileSync(FILE, newRecord)
}

module.exports = {
    getInvestmentByUser,
    updateInvestmentRecord
}