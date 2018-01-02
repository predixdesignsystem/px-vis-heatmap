document.addEventListener('WebComponentsReady', () => {
  describe('px-vis-heatmap tests', () => {
    let chart;

    beforeEach((done) => {
      chart = fixture('px-vis-heatmap-fixture');

      Polymer.RenderStatus.afterNextRender(chart, () => {
        setTimeout(() => { // IE11
          window.flush(done);
        });
      });
    });

    it('should be able to find rendered chart', (done) => {
      const chartExists = chart !== undefined;
      expect(chartExists).to.be.eql(true);
      done();
    });

  });

});
