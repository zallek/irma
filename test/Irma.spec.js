import chai from 'chai';

import Irma from '../src/Irma';


describe('Irma', () => {
  describe('getReleases', () => {
    it('should return package release', done => {
      const irma = new Irma('chalk');
      irma.getReleases().then(
        releases => {
          chai.expect(releases).to.deep.equal({
            '0.1.0': '2013-08-03T00:21:59.499Z',
            '0.1.1': '2013-08-03T01:38:53.881Z',
            '0.2.0': '2013-08-03T16:48:31.308Z',
            '0.2.1': '2013-08-29T14:15:49.234Z',
            '0.3.0': '2013-10-19T15:58:20.344Z',
            '0.4.0': '2013-12-13T19:30:32.742Z',
            '0.5.0': '2014-07-04T21:23:48.003Z',
            '0.5.1': '2014-07-09T20:24:36.498Z',
            '1.0.0': '2015-02-23T07:41:35.421Z',
            '1.1.0': '2015-07-01T13:32:13.906Z',
            '1.1.1': '2015-08-19T20:10:58.495Z',
          });
          done();
        },
        err => done(err)
      );
    });
  });
});
