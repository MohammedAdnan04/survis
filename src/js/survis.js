window.surVisVersion = '0.1.0';

$(document).ready(function () {
  page.init();
  // Pre-select all 4 publication years as active filters on load
  selectors.toggleSelector('year', '2020');
  selectors.toggleSelector('year', '2021');
  selectors.toggleSelector('year', '2022');
  selectors.toggleSelector('year', '2023');
  page.update(true);
  selectors.readQueryFromUrl();
});

$(window).resize(function () {
  timeline.updateTimeline();
});

const electron = typeof require !== 'undefined';