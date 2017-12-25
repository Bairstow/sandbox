<?php
/*
Template Name: Home Template AdvMind
*/
get_header();
?>

<div class="container contents">
  <div class="row signup-row">
    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
      <div class="signup-call">
        <div style="font-weight:bold">Join Our Newsletter</div><div> &nbsp;&nbsp;Get the latest news from TEDxMelbourne</div>
      </div>
    </div>
    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
      <form action="/" method="post">
        <div class="signup-form">
          <input class="signup-email" type="email" name="email" placeholder="Email Address..."><button class="signup-button" type="submit" name="signup-button">Join</button>
        </div>
      </form>
      <?php
        if (!empty($_POST)) {
          echo do_shortcode('[cfdb-save-form-post]');
        }
      ?>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 page-break">
    </div>
  </div>
  <div class="row main-copy">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="main-header">
        <h2>Adventurous Minds</h2>
      </div>
      <div class="event-copy">
        TEDxMelbourne 2016 is about ideas that blaze trails and spark new concepts. It's about pushing boundaries to imagine future possibilities. It’s about resilience, reflection and recognition.

        Check out what's happening at this years conference.
      </div>
      <div class="event-link-container">
        <a href="<?php echo get_permalink( get_page_by_path( 'conference' ) ); ?>"><button class="event-link">Show Me</button></a>
      </div>
    </div>
  </div>
</div><!-- .container contents -->
<?php get_footer(); ?>
