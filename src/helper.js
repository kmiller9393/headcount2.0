export default class DistrictRepository {
  constructor(data) {
    this.stats = this.removeDuplicates(data);
  }

  removeDuplicates = data => {
    return data.reduce((newObject, data) => {
      let upperCaseLocation = data.Location.toUpperCase();
      if (!newObject[upperCaseLocation]) {
        newObject[upperCaseLocation] = {
          location: upperCaseLocation,
          stats: {}
        };
      }
      newObject[upperCaseLocation].stats[data.TimeFrame] =
        Math.round(data.Data * 1000) / 1000 || 0;
      return newObject;
    }, {});
  };

  findByName = (name = '') => {
    name = name.toUpperCase();
    return this.stats[name];
  };

  findAllMatches = name => {
    const districtData = Object.keys(this.stats);
    let districtMatches = [];
    if (!name) {
      districtMatches = districtData.map(district => this.stats[district]);
      return districtMatches;
    }
    name = name.toUpperCase();
    const filteredData = districtData.filter(district =>
      district.includes(name)
    );
    const filteredObj = filteredData.map(data => this.stats[data]);
    return filteredObj;
  };

  findAverage = name => {
    const districtData = Object.values(this.stats[name].stats);
    const average = districtData.reduce((average, value) => {
      average += value / districtData.length;
      return average;
    }, 0);
    return Math.round(average * 1000) / 1000;
  };

  compareDistrictAverages = (firstName, secondName) => {
    firstName = firstName.toUpperCase();
    secondName = secondName.toUpperCase();
    const firstAverage = this.findAverage(firstName);
    const secondAverage = this.findAverage(secondName);
    const compareObject = {
      [firstName]: firstAverage,
      [secondName]: secondAverage,
      compared:
        firstAverage < secondAverage
          ? Math.round((firstAverage / secondAverage) * 1000) / 1000
          : Math.round((secondAverage / firstAverage) * 1000) / 1000
    };
    return compareObject;
  };
}
