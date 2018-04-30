/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

document.addEventListener('WebComponentsReady', () => {
  describe('Internal state test', () => {
    let chart;

    beforeEach((done) => {
      chart = fixture('px-vis-heatmap-fixture');

      Polymer.RenderStatus.afterNextRender(chart, () => {
        setTimeout(() => { // IE11
          window.flush(done);
        });
      });
    });

    // TODO: uncomment when we can count cells
    // it('Right amount of cells, and not leaks', (done) => {
    //   expect(chart !== undefined).to.be.eql(true);
    //   expect(getCells(chart).length).to.be.eql(0);

    //   chart.chartData = generateChartData(8, 8);

    //   waitDrawUpdate(chart, () => {
    //     expect(getCells(chart).length).to.be.eql(8 * 8);
    //     chart.chartData = generateChartData(2, 2);

    //     waitDrawUpdate(chart, () => {
    //       expect(getCells(chart).length).to.be.eql(2 * 2);
    //       done();
    //     });
    //   });
    // });
  });
});
