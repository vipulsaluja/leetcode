// https://leetcode.com/problems/subdomain-visit-count/
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    let domainCountMap = new Map();

    for (let i = 0; i < cpdomains.length; i++) {
        let [count, domain] = cpdomains[i].split(" ");
        count = parseInt(count);
        let subDomainsParts = domain.split(".");
        let subDomain = "";
        for (let j = subDomainsParts.length - 1; j >= 0; j--) {
            subDomain = subDomain ? subDomainsParts[j] + "." + subDomain : subDomainsParts[j];

            if (domainCountMap.has(subDomain)) {
                domainCountMap.set(subDomain, domainCountMap.get(subDomain) + count);
            } else {
                domainCountMap.set(subDomain, count);
            }
        }
    }

    return Array.from(domainCountMap).map(([domain, count]) => {
        return `${count} ${domain}`;
    });
};