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
