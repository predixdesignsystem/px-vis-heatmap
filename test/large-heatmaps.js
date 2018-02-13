document.addEventListener('WebComponentsReady', () => {
  describe('Large chart data sets', () => {
    let chart;

    beforeEach((done) => {
      chart = fixture('px-vis-heatmap-fixture');

      Polymer.RenderStatus.afterNextRender(chart, () => {
        setTimeout(() => { // IE11
          window.flush(done);
        });
      });
    });

    it('9x9 heatmap', (done) => {
      expect(chart !== undefined).to.be.eql(true);
      chart.chartData = generateChartData(9, 9);
      chart.colors = ['red', 'green', 'blue', 'purple'];

      chart.addEventListener('chart-drawn', (event) => {
        setTimeout(() => done(), 200);
      });
    });

    it('16x16 heatmap', (done) => {
      expect(chart !== undefined).to.be.eql(true);
      chart.chartData = generateChartData(16, 16);
      chart.colors = ['red', 'green', 'blue', 'purple'];

      chart.addEventListener('chart-drawn', (event) => {
        setTimeout(() => done(), 200);
      });
    });

    it('27x27 heatmap', (done) => {
      expect(chart !== undefined).to.be.eql(true);
      chart.chartData = generateChartData(27, 27);
      chart.colors = ['red', 'green', 'blue', 'purple'];

      chart.addEventListener('chart-drawn', (event) => {
        setTimeout(() => done(), 200);
      });
    });

    it('32x32 heatmap', (done) => {
      expect(chart !== undefined).to.be.eql(true);
      chart.chartData = generateChartData(32, 32);
      chart.colors = ['red', 'green', 'blue', 'purple'];

      chart.addEventListener('chart-drawn', (event) => {
        setTimeout(() => done(), 200);
      });
    });

    it('64x64 heatmap', (done) => {
      expect(chart !== undefined).to.be.eql(true);
      chart.chartData = generateChartData(64, 64);
      chart.colors = ['red', 'green', 'blue', 'purple'];

      chart.addEventListener('chart-drawn', (event) => {
        setTimeout(() => done(), 200);
      });
    });

    it('99x99 heatmap', (done) => {
      expect(chart !== undefined).to.be.eql(true);
      chart.chartData = generateChartData(99, 99);
      chart.colors = ['white', 'blue', 'orange', 'white'];

      chart.addEventListener('chart-drawn', (event) => {
        setTimeout(() => done(), 200);
      });
    });

    it('64x128 heatmap', (done) => {
      expect(chart !== undefined).to.be.eql(true);
      chart.chartData = generateChartData(64, 128);
      chart.colors = ['red', 'green', 'blue', 'purple'];

      chart.addEventListener('chart-drawn', (event) => {
        setTimeout(() => done(), 200);
      });
    });

    it('128x64 heatmap', (done) => {
      expect(chart !== undefined).to.be.eql(true);
      chart.chartData = generateChartData(128, 64);
      chart.colors = ['red', 'green', 'blue', 'purple'];

      chart.addEventListener('chart-drawn', (event) => {
        setTimeout(() => done(), 200);
      });
    });

    it('128x128 heatmap', (done) => {
      expect(chart !== undefined).to.be.eql(true);
      chart.chartData = generateChartData(128, 128);
      chart.colors = ['red', 'green', 'blue', 'purple'];

      chart.addEventListener('chart-drawn', (event) => {
        setTimeout(() => done(), 200);
      });
    });

    it('256x256 heatmap', (done) => {
      expect(chart !== undefined).to.be.eql(true);
      chart.chartData = generateChartData(256, 256);
      chart.colors = ['#080', '#060', '#066', '#088'];

      chart.addEventListener('chart-drawn', (event) => {
        setTimeout(() => done(), 200);
      });
    });

    it('399x399 heatmap', (done) => {
      expect(chart !== undefined).to.be.eql(true);
      chart.chartData = generateChartData(399, 399);
      chart.colors = ['yellow', 'red'];

      chart.addEventListener('chart-drawn', (event) => {
        setTimeout(() => done(), 1000);
      });
    });

  });
});
