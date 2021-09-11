// https://leetcode.com/problems/number-of-atoms/
/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
    let mapSt = [new Map()];

    let atom = "";
    let atomCount = "";
    for (let i = 0; i < formula.length; i++) {
        let charType = getCharType(formula[i]);
        switch (charType) {
            case charTypeEnum.upper:
                if (atom !== "") {
                    updateAtomCount(mapSt[mapSt.length - 1], atom, 1);
                    atom = "";
                }
                atom += formula[i];
                break;
            case charTypeEnum.lower:
                while (i < formula.length && getCharType(formula[i]) === charTypeEnum.lower) {
                    atom += formula[i];
                    i++;
                }

                i--;
                break;
            case charTypeEnum.number:
                // console.log("parsing number");
                while (i < formula.length && getCharType(formula[i]) === charTypeEnum.number) {
                    atomCount += formula[i];
                    i++;
                }

                i--;
                updateAtomCount(mapSt[mapSt.length - 1], atom, parseInt(atomCount) || 1);
                atom = "";
                atomCount = "";
                break;

            case charTypeEnum.start:
                if (atom !== "") {
                    updateAtomCount(mapSt[mapSt.length - 1], atom, 1);
                    atom = "";
                }
                mapSt.push(new Map());
                break;
            case charTypeEnum.end:
                if (atom !== "") {
                    updateAtomCount(mapSt[mapSt.length - 1], atom, 1);
                    atom = "";
                }

                let aMap = mapSt.pop();
                let count = "";
                while (i + 1 < formula.length && getCharType(formula[i + 1]) === charTypeEnum.number) {
                    count += formula[i + 1];
                    i++;
                }

                updateAtomMultiplier(mapSt[mapSt.length - 1], aMap, parseInt(count) || 1);
        }
    }

    if (atom != "") {
        updateAtomCount(mapSt[mapSt.length - 1], atom, parseInt(atomCount) || 1);
    }

    return Array.from(mapSt[0]).sort((a, b) => {
        if (a[0] < b[0]) { return -1; }
        if (a[0] > b[0]) { return 1; }
        return 0;
    }).reduce((result, item) => {
        return result + item[0] + (item[1] === 1 ? "" : item[1]);
    }, "");
};

var updateAtomCount = function (aMap, atom, atomCount) {
    if (!aMap.has(atom)) {
        aMap.set(atom, atomCount);
    } else {
        aMap.set(atom, aMap.get(atom) + atomCount);
    }
}

var updateAtomMultiplier = function (targetMap, aMap, multiplier) {
    aMap.forEach((count, atom) => {
        if (!targetMap.has(atom)) {
            targetMap.set(atom, 0);
        }
        targetMap.set(atom, targetMap.get(atom) + count * multiplier);
    });
}

let charTypeEnum = {
    lower: "Lower",
    upper: "Upper",
    number: "Number",
    start: "Start",
    end: "End"
};

var getCharType = function (char) {
    if (char === "(") {
        return charTypeEnum.start;
    }

    if (char === ")") {
        return charTypeEnum.end;
    }

    let charCode = char.charCodeAt(0);

    if (charCode >= 97 && charCode <= 122) {
        return charTypeEnum.lower;
    }

    if (charCode >= 65 && charCode <= 90) {
        return charTypeEnum.upper;
    }

    if (charCode >= 48 && charCode <= 57) {
        return charTypeEnum.number;
    }
}