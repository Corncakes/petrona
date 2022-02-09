/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

  /**
   * Use this behavior as a template for custom Javascript.
   */
  Drupal.behaviors.exampleBehavior = {
    attach: function (context, settings) {
      $(".slider-home").owlCarousel({
        dots: true,
        nav: false,
        items:1,
      });
    }
  };

})(jQuery, Drupal);
