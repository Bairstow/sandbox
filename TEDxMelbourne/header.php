<?php
  global $TEDxMenus;
  $template_url = get_template_directory_uri();
?>
<!doctype html>
<html <?php language_attributes(); ?> class="no-js" ng-app="TEDxTheme">
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="<?php bloginfo('description'); ?>">
  <title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

  <link href="//www.google-analytics.com" rel="dns-prefetch">

  <!-- JQuery -->
  <script src="//maps.google.com/maps/api/js?sensor=false"></script>
  <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
  <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

  <!-- Favicons -->
  <link href="<?= $template_url; ?>/assets/img/favicons/favicon.ico" rel="shortcut icon">
  <link href="<?= $template_url; ?>/assets/img/favicons/apple-touch-icon.png" rel="apple-touch-icon">
  <link href="<?= $template_url; ?>/assets/img/favicons/apple-touch-icon.png" rel="apple-touch-icon-precomposed">
  <link href="<?= $template_url; ?>/assets/img/favicons/apple-touch-icon-57x57-precomposed.png" rel="apple-touch-icon" sizes="57x57">
  <link href="<?= $template_url; ?>/assets/img/favicons/apple-touch-icon-72x72-precomposed.png" rel="apple-touch-icon" sizes="72x72">
  <link href="<?= $template_url; ?>/assets/img/favicons/apple-touch-icon-114x114-precomposed.png" rel="apple-touch-icon" sizes="114x114">

  <!-- Compiled CSS -->
  <link href='<?= $template_url; ?>/dist/css/vendor.min.css' type='text/css' media='all' rel='stylesheet'>
  <link href='<?= $template_url; ?>/dist/css/application.min.css' type='text/css' media='all' rel='stylesheet'>

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<div id="fb-root"></div>
<script>(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=230769680405348&version=v2.0";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));</script>

  <div class="grey-bg">
    <div class="container">
      <header>
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <a href="<?= get_theme_mod('logo_link', '/'); ?>">
              <?php (get_theme_mod('logo')) ? $logo = get_theme_mod('logo') : $logo = 'http://i.imgur.com/FWB0be4.png' ?>
              <!-- deletion link for temp logo https://imgur.com/delete/l1vlxk1EpPOYYTd -->
              <img src="<?= $logo ?>" alt="Logo" class="pull-left logo-display">
            </a>
          </div>
        </div>
        <!-- <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 header-break">
          </div>
        </div> -->
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="adventurous-minds-title">Adventurous Minds</div>
          </div>
        </div>
        <!-- <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 header-break">
          </div>
        </div> -->
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="header-date-location pull-left">
              <time class="date" datetime="2014-10-02"><?= get_theme_mod('event_date', 'Event Date') ?></time>
              <span class="location"><?= get_theme_mod('event_location', 'Event Location') ?></span>
            </div>
          </div>
        </div>

        <nav class="primary-nav" ng-controller="NavCtrl" ng-class="{'mobile-visible': isVisible}">
          <div class="toggle visible-xs " ng-click="toggleMenu()">Menu</div>
          <?= $TEDxMenus->primary_nav(); ?>
        </nav>

      </header>

    </div>
  </div><!-- .black-bg -->


  <?php if($TEDxMenus->show_secondary_nav()): ?>
    <div class="primary-nav-secondary-container">
      <div class="container ">
        <nav class="primary-nav-secondary">
          <?= $TEDxMenus->secondary_nav(); ?>
        </nav>
      </div>
    </div>
  <?php endif; ?>
