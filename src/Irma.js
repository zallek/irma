import npm from 'npm';
import omit from 'lodash.omit';

import NormalDistribution from './models/NormalDistribution';


const BLACKLIST_TIME_KEYS = ['created', 'modified'];

class Irma {
  constructor(packageName, Model = NormalDistribution) {
    this.packageName = packageName;
    this.Model = Model;
  }

  getReleases() {
    return new Promise((resolve, reject) => {
      npm.load({}, err => {
        if (err) return reject(err);
        npm.commands.view([this.packageName, 'time'], true, (error, result) => {
          if (error) {
            reject(error);
          } else {
            const keys = Object.keys(result);
            const time = result[keys[0]].time;
            resolve(omit(time, BLACKLIST_TIME_KEYS));
          }
        });
      });
    });
  }

  initModel(releases) {
    this.model = new this.Model(releases);
  }

  probalityReleaseWithInDays(nbDays) {
    this.model.probalityReleaseInDays(nbDays);
  }
}

export default Irma;
