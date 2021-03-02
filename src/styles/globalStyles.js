import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: "Open Sans",sans-serif;
  background-color: ${(props) => props.theme.primaryBgColor};
}

html, button, input, select, textarea {
  font-family: "Open Sans",sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}


/**
 * Remove default margin.
 */
body {
  margin: 0;
}

/* HTML5 display definitions
   ========================================================================== */
/**
 * Correct block display not defined for any HTML5 element in IE 8/9.
 * Correct block display not defined for details or summary in IE 10/11
 * and Firefox.
 * Correct block display not defined for main in IE 11.
 */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}

@media print {
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  summary {
    page-break-before: always;
  }
}


/**
 * Cross browser support for word wrapping
 * Reference: http://kenneth.io/blog/2012/03/04/word-wrapping-hypernation-using-css/
 */
/* Visibility
   ========================================================================== */
/* Hidden
   ========================================================================== */
@media screen and (max-width: 47.99em) {
  .hide-on-mobile {
    display: none !important;
  }
}

@media screen and (min-width: 48em) {
  .hide-on-desktop {
    display: none !important;
  }
}

.text-center {
  text-align: center;
}

@media screen and (max-width: 47.99em) {
  .text-center--mobile {
    text-align: center;
  }
}

@media screen and (min-width: 48em) {
  .text-center--desktop {
    text-align: center;
  }
}

.text-right {
  text-align: right;
}

@media screen and (max-width: 47.99em) {
  .text-right--mobile {
    text-align: right;
  }
}

@media screen and (min-width: 48em) {
  .text-right--desktop {
    text-align: right;
  }
}

.text-left {
  text-align: left;
}

@media screen and (max-width: 47.99em) {
  .text-left--mobile {
    text-align: left;
  }
}

@media screen and (min-width: 48em) {
  .text-left--desktop {
    text-align: left;
  }
}

.text-capitalize {
  text-transform: capitalize;
}

.text-upper {
  text-transform: uppercase;
}

@media screen and (min-width: 48em) {
  .text-small {
    font-size: 13px;
    font-size: 0.8125rem;
  }
}

/* Alignment
   ========================================================================== */
.pull-center {
  margin: 0 auto;
  display: block;
}

@media screen and (min-width: 48em) {
  .pull-center--desktop {
    margin: 0 auto;
    display: block;
  }
}

@media screen and (max-width: 47.99em) {
  .pull-center--mobile {
    margin: 0 auto;
    display: block;
  }
}

.pull-left {
  float: left;
}

@media screen and (min-width: 48em) {
  .pull-left--desktop {
    float: left;
  }
}

@media screen and (max-width: 47.99em) {
  .pull-left--mobile {
    float: left;
  }
}

.pull-right {
  float: right;
}

@media screen and (min-width: 48em) {
  .pull-right--desktop {
    float: right;
  }
}

@media screen and (max-width: 47.99em) {
  .pull-right--mobile {
    float: right;
  }
}

@media screen and (min-width: 48em) {
  .alignleft {
    margin-right: 1.5em;
    margin-bottom: 1.5em;
    display: inline;
    float: left;
  }
}

@media screen and (min-width: 48em) {
  .alignright {
    margin-left: 1.5em;
    margin-bottom: 1.5em;
    display: inline;
    float: right;
  }
}

@media screen and (min-width: 48em) {
  .aligncenter {
    clear: both;
    display: block;
    margin: 0 auto;
  }
}

.valign-t {
  vertical-align: top !important;
}

.valign-m {
  vertical-align: middle !important;
}

.valign-b {
  vertical-align: bottom !important;
}

/* Widths by Percentage
   ========================================================================== */
.width-25 {
  width: 25% !important;
}

.width-33 {
  width: 33.3333333333% !important;
}

.width-50 {
  width: 50% !important;
}

@media screen and (max-width: 47.99em) {
  .width-50--mobile {
    width: 50% !important;
  }
}

.width-66 {
  width: 66.6666666666% !important;
}

.width-75 {
  width: 75% !important;
}

.width-100 {
  width: 100% !important;
}

@media screen and (max-width: 47.99em) {
  .width-100--mobile {
    width: 100% !important;
  }
}

html {
  background: white;
}

/**
 * 1. Remove subpixel-antialiased default.
 * 2. Keep for retina resolutions.
 *
 * @link: http://www.intridea.com/blog/2014/5/8/better-font-smoothing-in-chrome-on-mac-os-x
 */
*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  /* 1 */
}

embed,
iframe,
object {
  max-width: 100%;
}

/*iframe {
    @include mq( $until: tablet ) {
        padding: 0 2em;
    }
}*/
img {
  height: auto;
  /* Make sure images are scaled correctly. */
  max-width: 100%;
  /* Adhere to container width. */
}

/**
 * Type uses Modular Scale - Major Third (1.250)
 * http://type-scale.com/?size=16&scale=1.250&text=A%20Visual%20Type%20Scale&webfont=Libre+Baskerville&font-family=%27Libre%20Baskerville%27,%20serif&font-weight=400&font-family-headers=&font-weight-headers=inherit&background-color=white&font-color=%23333
 */
h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .sire .view-grouping-header, .view-custom-css .view-grouping-header, .h4, .h5, .h6 {
  margin: 1em 0 .5em 0;
  color: ${(props) => props.theme.headerColor};
  font-weight: normal;
  font-family: "Merriweather", serif;

}

h1, h2, h3, h4,
.h1, .h2, .h3, .sire .view-grouping-header, .view-custom-css .view-grouping-header, .h4 {
  line-height: 1.3;
}

h1, .h1 {
  margin: .5em 0;
  font-size: 36px;
  font-size: 2.25rem;
}

@media print {
  h1, .h1 {
    font-size: 1.5em;
    margin: 0;
    font-weight: bold;
  }
}

@media screen and (min-width: 48em) {
  .single-line {
    padding-top: 38px;
  }
}

@media screen and (min-width: 48em) {
  .multi-line {
    padding-top: 10px;
  }
}

h2, .h2 {
  font-size: 27px;
  font-size: 1.6875rem;
}

@media print {
  h2, .h2 {
    font-size: 1.25em;
    margin: 0;
    font-weight: bold;
  }
}

h3, .h3, .sire .view-grouping-header, .view-custom-css .view-grouping-header {
  font-size: 24px;
  font-size: 1.5rem;
}

@media print {
  h3, .h3, .sire .view-grouping-header, .view-custom-css .view-grouping-header {
    font-size: 1.1em;
    margin: 0;
    font-weight: bold;
  }
}

h4, .h4 {
  font-weight: 600;
  font-size: 16px;
  font-size: 1rem;
}

@media print {
  h4, .h4 {
    font-size: 1em;
    margin: 0;
    font-weight: bold;
  }
}

h5, .h5 {
  font-size: 16px;
  font-size: 1rem;
}

@media print {
  h5, .h5 {
    font-size: 1em;
    margin: 0;
    font-weight: bold;
  }
}

h6, .h6 {
  font-size: 16px;
  font-size: 1rem;
}

@media print {
  h6, .h6 {
    font-size: 1em;
    margin: 0;
    font-weight: bold;
  }
}

p {
  line-height: 1.5;
  margin: 0 0 .75em;
}

html,
button,
input,
select,
textarea {
  font-family: "Open Sans", sans-serif;
  color: #37424a;
}

a {
  text-decoration: ${(props) => props.theme.link.decoration};
  color: ${(props) => props.theme.linkTextColor};

  -webkit-transition-property: color, background, border;
  -moz-transition-property: color, background, border;
  transition-property: color, background, border;
  -webkit-transition-duration: 0.15s;
  -moz-transition-duration: 0.15s;
  transition-duration: 0.15s;
}

a:hover {
  color: ${(props) => props.theme.linkTextHoverColor};
  background-color: ${(props) => props.theme.linkTextHoverBgColor};
  text-decoration: ${(props) => props.theme.link.hoverDecoration};

}

ul {
  margin: .75em 0;
  list-style-type: disc;
}

ul ul {
  list-style-type: circle;
}

ol {
  margin: .75em 0;
}

li {
  margin: .5em 0;
}

dt {
  margin-bottom: .3em;
  font-weight: bold;
}

dd {
  margin: 0 0 .75em 0;
}


/**
 * l-<type><direction><size>
 *
 * a = all
 * t = top
 * r = right
 * b = bottom
 * l = left
 * h = horizontal
 * v = vertical
 *
 * n = none
 * s = small
 * d = default
 * m = medium
 * l = large
 * x = xlarge
 */
/* General
   ========================================================================== */
/* All */
.l-padding-an {
  padding: 0 !important;
}

.l-padding-as {
  padding: 0.5em !important;
}

.l-padding-ad {
  padding: 1em !important;
}

.l-padding-am {
  padding: 2em !important;
}

.l-padding-al {
  padding: 4em !important;
}

.l-padding-ax {
  padding: 6em !important;
}

.l-margin-an {
  margin: 0 !important;
}

.l-margin-as {
  margin: 0.5em !important;
}

.l-margin-ad {
  margin: 1em !important;
}

.l-margin-am {
  margin: 2em !important;
}

.l-margin-al {
  margin: 4em !important;
}

.l-margin-ax {
  margin: 6em !important;
}

/* Vertical */
.l-padding-vn {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.l-padding-vs {
  padding-top: 0.5em !important;
  padding-bottom: 0.5em !important;
}

.l-padding-vd {
  padding-top: 1em !important;
  padding-bottom: 1em !important;
}

.l-padding-vm {
  padding-top: 2em !important;
  padding-bottom: 2em !important;
}

.l-padding-vl {
  padding-top: 4em !important;
  padding-bottom: 4em !important;
}

.l-padding-vx {
  padding-top: 6em !important;
  padding-bottom: 6em !important;
}

.l-margin-vn, .tabs.primary li {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.l-margin-vs {
  margin-top: 0.5em !important;
  margin-bottom: 0.5em !important;
}

.l-margin-vd {
  margin-top: 1em !important;
  margin-bottom: 1em !important;
}

.l-margin-vm {
  margin-top: 2em !important;
  margin-bottom: 2em !important;
}

.l-margin-vl {
  margin-top: 4em !important;
  margin-bottom: 4em !important;
}

.l-margin-vx {
  margin-top: 6em !important;
  margin-bottom: 6em !important;
}

/* Horizontal */
.l-padding-hn {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.l-padding-hs {
  padding-left: 0.5em !important;
  padding-right: 0.5em !important;
}

.l-padding-hd {
  padding-left: 1em !important;
  padding-right: 1em !important;
}

.l-padding-hm {
  padding-left: 2em !important;
  padding-right: 2em !important;
}

.l-padding-hl {
  padding-left: 4em !important;
  padding-right: 4em !important;
}

.l-padding-hx {
  padding-left: 6em !important;
  padding-right: 6em !important;
}

.l-margin-hn {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.l-margin-hs {
  margin-left: 0.5em !important;
  margin-right: 0.5em !important;
}

.l-margin-hd {
  margin-left: 1em !important;
  margin-right: 1em !important;
}

.l-margin-hm {
  margin-left: 2em !important;
  margin-right: 2em !important;
}

.l-margin-hl {
  margin-left: 4em !important;
  margin-right: 4em !important;
}

.l-margin-hx {
  margin-left: 6em !important;
  margin-right: 6em !important;
}

/* Top */
.l-padding-tn {
  padding-top: 0 !important;
}

.l-padding-ts {
  padding-top: 0.5em !important;
}

.l-padding-td {
  padding-top: 1em !important;
}

.l-padding-tm {
  padding-top: 2em !important;
}

.l-padding-tl {
  padding-top: 4em !important;
}

.l-padding-tx {
  padding-top: 6em !important;
}

.l-margin-tn {
  margin-top: 0 !important;
}

.l-margin-ts {
  margin-top: 0.5em !important;
}

.l-margin-td {
  margin-top: 1em !important;
}

.l-margin-tm {
  margin-top: 2em !important;
}

.l-margin-tl {
  margin-top: 4em !important;
}

.l-margin-tx {
  margin-top: 6em !important;
}

/* Bottom */
.l-padding-bn {
  padding-bottom: 0 !important;
}

.l-padding-bs {
  padding-bottom: 0.5em !important;
}

.l-padding-bd {
  padding-bottom: 1em !important;
}

.l-padding-bm {
  padding-bottom: 2em !important;
}

.l-padding-bl {
  padding-bottom: 4em !important;
}

.l-padding-bx {
  padding-bottom: 6em !important;
}

.l-margin-bn {
  margin-bottom: 0 !important;
}

.l-margin-bs {
  margin-bottom: 0.5em !important;
}

.l-margin-bd, .sire .view-grouping-header {
  margin-bottom: 1em !important;
}

.l-margin-bm {
  margin-bottom: 2em !important;
}

.l-margin-bl {
  margin-bottom: 4em !important;
}

.l-margin-bx {
  margin-bottom: 6em !important;
}

/* Left */
.l-padding-ln {
  padding-left: 0 !important;
}

.l-padding-ls {
  padding-left: 0.5em !important;
}

.l-padding-ld {
  padding-left: 1em !important;
}

.l-padding-lm {
  padding-left: 2em !important;
}

.l-padding-ll {
  padding-left: 4em !important;
}

.l-padding-lx {
  padding-left: 6em !important;
}

.l-margin-ln {
  margin-left: 0 !important;
}

.l-margin-ls {
  margin-left: 0.5em !important;
}

.l-margin-ld {
  margin-left: 1em !important;
}

.l-margin-lm {
  margin-left: 2em !important;
}

.l-margin-ll {
  margin-left: 4em !important;
}

.l-margin-lx {
  margin-left: 6em !important;
}

/* Right */
.l-padding-rn {
  padding-right: 0 !important;
}

.l-padding-rs {
  padding-right: 0.5em !important;
}

.l-padding-rd {
  padding-right: 1em !important;
}

.l-padding-rm {
  padding-right: 2em !important;
}

.l-padding-rl {
  padding-right: 4em !important;
}

.l-padding-rx {
  padding-right: 6em !important;
}

.l-margin-rn {
  margin-right: 0 !important;
}

.l-margin-rs {
  margin-right: 0.5em !important;
}

.l-margin-rd {
  margin-right: 1em !important;
}

.l-margin-rm {
  margin-right: 2em !important;
}

.l-margin-rl {
  margin-right: 4em !important;
}

.l-margin-rx {
  margin-right: 6em !important;
}

/* Mobile
   ========================================================================== */
/* All */
@media screen and (max-width: 47.99em) {
  .l-padding-mobile-an {
    padding: 0 !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-as {
    padding: 0.5em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-ad {
    padding: 1em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-am {
    padding: 2em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-al {
    padding: 4em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-ax {
    padding: 6em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-an {
    margin: 0 !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-as {
    margin: 0.5em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-ad {
    margin: 1em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-am {
    margin: 2em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-al {
    margin: 4em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-ax {
    margin: 6em !important;
  }
}

/* Vertical */
@media screen and (max-width: 47.99em) {
  .l-padding-mobile-vn {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-vs {
    padding-top: 0.5em !important;
    padding-bottom: 0.5em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-vm {
    padding-top: 2em !important;
    padding-bottom: 2em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-vd {
    padding-top: 1em !important;
    padding-bottom: 1em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-vl {
    padding-top: 4em !important;
    padding-bottom: 4em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-vx {
    padding-top: 6em !important;
    padding-bottom: 6em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-vn {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-vs {
    margin-top: 0.5em !important;
    margin-bottom: 0.5em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-vd {
    margin-top: 1em !important;
    margin-bottom: 1em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-vm {
    margin-top: 2em !important;
    margin-bottom: 2em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-vl {
    margin-top: 4em !important;
    margin-bottom: 4em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-vx {
    margin-top: 6em !important;
    margin-bottom: 6em !important;
  }
}

/* Horizontal */
@media screen and (max-width: 47.99em) {
  .l-padding-mobile-hn {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-hs {
    padding-left: 0.5em !important;
    padding-right: 0.5em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-hd {
    padding-left: 1em !important;
    padding-right: 1em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-hm {
    padding-left: 2em !important;
    padding-right: 2em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-hl {
    padding-left: 4em !important;
    padding-right: 4em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-hx {
    padding-left: 6em !important;
    padding-right: 6em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-hn {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-hs {
    margin-left: 0.5em !important;
    margin-right: 0.5em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-hd {
    margin-left: 1em !important;
    margin-right: 1em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-hm {
    margin-left: 2em !important;
    margin-right: 2em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-hl {
    margin-left: 4em !important;
    margin-right: 4em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-hx {
    margin-left: 6em !important;
    margin-right: 6em !important;
  }
}

/* Top */
@media screen and (max-width: 47.99em) {
  .l-padding-mobile-tn {
    padding-top: 0 !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-ts {
    padding-top: 0.5em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-td {
    padding-top: 1em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-tm {
    padding-top: 2em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-tl {
    padding-top: 4em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-tx {
    padding-top: 6em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-tn {
    margin-top: 0 !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-ts {
    margin-top: 0.5em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-td {
    margin-top: 1em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-tm {
    margin-top: 2em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-tl {
    margin-top: 4em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-tx {
    margin-top: 6em !important;
  }
}

/* Bottom */
@media screen and (max-width: 47.99em) {
  .l-padding-mobile-bn {
    padding-bottom: 0 !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-bs {
    padding-bottom: 0.5em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-bd {
    padding-bottom: 1em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-bm {
    padding-bottom: 2em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-bl {
    padding-bottom: 4em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-bx {
    padding-bottom: 6em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-bn {
    margin-bottom: 0 !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-bs {
    margin-bottom: 0.5em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-bd {
    margin-bottom: 1em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-bm {
    margin-bottom: 2em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-bl {
    margin-bottom: 4em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-bx {
    margin-bottom: 6em !important;
  }
}

/* Left */
@media screen and (max-width: 47.99em) {
  .l-padding-mobile-ln {
    padding-left: 0 !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-ls {
    padding-left: 0.5em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-ld {
    padding-left: 1em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-lm {
    padding-left: 2em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-ll {
    padding-left: 4em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-lx {
    padding-left: 6em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-ln {
    margin-left: 0 !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-ls {
    margin-left: 0.5em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-ld {
    margin-left: 1em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-lm {
    margin-left: 2em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-ll {
    margin-left: 4em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-lx {
    margin-left: 6em !important;
  }
}

/* Right */
@media screen and (max-width: 47.99em) {
  .l-padding-mobile-rn {
    padding-right: 0 !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-rs {
    padding-right: 0.5em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-rd {
    padding-right: 1em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-rm {
    padding-right: 2em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-rl {
    padding-right: 4em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-padding-mobile-rx {
    padding-right: 6em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-rn {
    margin-right: 0 !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-rs {
    margin-right: 0.5em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-rd {
    margin-right: 1em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-rm {
    margin-right: 2em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-rl {
    margin-right: 4em !important;
  }
}

@media screen and (max-width: 47.99em) {
  .l-margin-mobile-rx {
    margin-right: 6em !important;
  }
}

/* Desktop
   ========================================================================== */
/* All */
@media screen and (min-width: 48em) {
  .l-padding-desktop-an {
    padding: 0 !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-as {
    padding: 0.5em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-ad {
    padding: 1em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-am {
    padding: 2em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-al {
    padding: 4em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-ax {
    padding: 6em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-an {
    margin: 0 !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-as {
    margin: 0.5em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-ad {
    margin: 1em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-am {
    margin: 2em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-al {
    margin: 4em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-ax {
    margin: 6em !important;
  }
}

/* Vertical */
@media screen and (min-width: 48em) {
  .l-padding-desktop-vn {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-vs {
    padding-top: 0.5em !important;
    padding-bottom: 0.5em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-vm {
    padding-top: 2em !important;
    padding-bottom: 2em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-vd {
    padding-top: 1em !important;
    padding-bottom: 1em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-vl {
    padding-top: 4em !important;
    padding-bottom: 4em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-vx {
    padding-top: 6em !important;
    padding-bottom: 6em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-vn {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-vs {
    margin-top: 0.5em !important;
    margin-bottom: 0.5em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-vd {
    margin-top: 1em !important;
    margin-bottom: 1em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-vm {
    margin-top: 2em !important;
    margin-bottom: 2em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-vl {
    margin-top: 4em !important;
    margin-bottom: 4em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-vx {
    margin-top: 6em !important;
    margin-bottom: 6em !important;
  }
}

/* Horizontal */
@media screen and (min-width: 48em) {
  .l-padding-desktop-hn {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-hs {
    padding-left: 0.5em !important;
    padding-right: 0.5em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-hd {
    padding-left: 1em !important;
    padding-right: 1em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-hm {
    padding-left: 2em !important;
    padding-right: 2em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-hl {
    padding-left: 4em !important;
    padding-right: 4em !important;
  }
}

@media screen and (max-width: 59.99em) {
  .l-padding-desktop-hx {
    padding-left: 2em !important;
    padding-right: 2em !important;
  }
}

@media screen and (min-width: 60em) {
  .l-padding-desktop-hx {
    padding-left: 6em !important;
    padding-right: 6em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-hn {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-hs {
    margin-left: 0.5em !important;
    margin-right: 0.5em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-hd {
    margin-left: 1em !important;
    margin-right: 1em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-hm {
    margin-left: 2em !important;
    margin-right: 2em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-hl {
    margin-left: 4em !important;
    margin-right: 4em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-hx {
    margin-left: 6em !important;
    margin-right: 6em !important;
  }
}

/* Top */
@media screen and (min-width: 48em) {
  .l-padding-desktop-tn {
    padding-top: 0 !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-ts {
    padding-top: 0.5em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-td {
    padding-top: 1em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-tm {
    padding-top: 2em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-tl {
    padding-top: 4em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-tx {
    padding-top: 6em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-tn {
    margin-top: 0 !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-ts {
    margin-top: 0.5em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-td {
    margin-top: 1em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-tm {
    margin-top: 2em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-tl {
    margin-top: 4em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-tx {
    margin-top: 6em !important;
  }
}

/* Bottom */
@media screen and (min-width: 48em) {
  .l-padding-desktop-bn {
    padding-bottom: 0 !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-bs {
    padding-bottom: 0.5em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-bd {
    padding-bottom: 1em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-bm {
    padding-bottom: 2em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-bl {
    padding-bottom: 4em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-bx {
    padding-bottom: 6em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-bn {
    margin-bottom: 0 !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-bs {
    margin-bottom: 0.5em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-bd {
    margin-bottom: 1em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-bm {
    margin-bottom: 2em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-bl {
    margin-bottom: 4em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-bx {
    margin-bottom: 6em !important;
  }
}

/* Left */
@media screen and (min-width: 48em) {
  .l-padding-desktop-ln {
    padding-left: 0 !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-ls {
    padding-left: 0.5em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-ld {
    padding-left: 1em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-lm {
    padding-left: 2em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-ll {
    padding-left: 4em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-lx {
    padding-left: 6em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-ln {
    margin-left: 0 !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-ls {
    margin-left: 0.5em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-ld {
    margin-left: 1em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-lm {
    margin-left: 2em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-ll {
    margin-left: 4em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-lx {
    margin-left: 6em !important;
  }
}

/* Right */
@media screen and (min-width: 48em) {
  .l-padding-desktop-rn {
    padding-right: 0 !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-rs {
    padding-right: 0.5em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-rd {
    padding-right: 1em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-rm {
    padding-right: 2em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-rl {
    padding-right: 4em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-padding-desktop-rx {
    padding-right: 6em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-rn {
    margin-right: 0 !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-rs {
    margin-right: 0.5em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-rd {
    margin-right: 1em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-rm {
    margin-right: 2em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-rl {
    margin-right: 4em !important;
  }
}

@media screen and (min-width: 48em) {
  .l-margin-desktop-rx {
    margin-right: 6em !important;
  }
}

@media screen and (min-width: 75em) {
  .l-padding-extra-ln {
    padding-left: 0 !important;
  }
}

/* Right */
@media screen and (min-width: 75em) {
  .l-padding-extra-rn {
    padding-right: 0 !important;
  }
}

@media screen and (min-width: 75em) {
  .l-padding-extra-rn {
    padding-right: 0 !important;
  }
}


/* open-sans-regular - latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/open-sans/open-sans-v18-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/open-sans/open-sans-v18-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/open-sans/open-sans-v18-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/open-sans/open-sans-v18-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/open-sans/open-sans-v18-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/open-sans/open-sans-v18-latin-regular.svg#OpenSans') format('svg'); /* Legacy iOS */
}

/* merriweather-regular - latin */
@font-face {
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/merriweather/merriweather-v22-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/merriweather/merriweather-v22-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/merriweather/merriweather-v22-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/merriweather/merriweather-v22-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/merriweather/merriweather-v22-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/merriweather/merriweather-v22-latin-regular.svg#Merriweather') format('svg'); /* Legacy iOS */
}

@font-face {
  font-family: 'icomoon';
  src: url("/fonts/icomoon/icomoon.eot?cbmbn6");
  src: url("/fonts/icomoon/icomoon.eot?cbmbn6#iefix") format("embedded-opentype"), url("/fonts/icomoon/icomoon.ttf?cbmbn6") format("truetype"), url("/fonts/icomoon/icomoon.woff?cbmbn6") format("woff"), url("/fonts/icomoon/icomoon.svg?cbmbn6#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"], [class*=" icon-"] {
  font-family: 'icomoon';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


[class^="icon-"], [class*=" icon-"] {
  font-family: 'icomoon';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-chevron-left:before {
  content: "\\3c";
}

.icon-chevron-right:before {
  content: "\\3e";
}

.icon-chevron-up:before {
  content: "\\5e";
}

.icon-close:before {
  content: "\\78";
}

.icon-chevron-down:before {
  content: "\\7c";
}

.icon-play:before {
  content: "\\e608";
}

.icon-home:before {
  content: "\\e600";
}

.icon-home4:before {
  content: "\\e603";
}

.icon-bathtub:before {
  content: "\\e606";
}

.icon-city:before {
  content: "\\e60b";
}

.icon-apartment:before {
  content: "\\e60c";
}

.icon-pencil:before {
  content: "\\e60d";
}

.icon-pen:before {
  content: "\\e60f";
}

.icon-pencil3:before {
  content: "\\e610";
}

.icon-pencil5:before {
  content: "\\e613";
}

.icon-brush2:before {
  content: "\\e61e";
}

.icon-spray:before {
  content: "\\e61f";
}

.icon-paint-roller:before {
  content: "\\e620";
}

.icon-stamp:before {
  content: "\\e621";
}

.icon-tape:before {
  content: "\\e622";
}

.icon-desk-tape:before {
  content: "\\e623";
}

.icon-palette:before {
  content: "\\e626";
}

.icon-bucket:before {
  content: "\\e628";
}

.icon-magic-wand:before {
  content: "\\e62b";
}

.icon-magnet:before {
  content: "\\e62c";
}

.icon-pencil-ruler:before {
  content: "\\e62d";
}

.icon-pencil-ruler2:before {
  content: "\\e62e";
}

.icon-compass:before {
  content: "\\e62f";
}

.icon-bottle:before {
  content: "\\e632";
}

.icon-drop-crossed:before {
  content: "\\e634";
}

.icon-drop2:before {
  content: "\\e635";
}

.icon-snow:before {
  content: "\\e636";
}

.icon-snow2:before {
  content: "\\e637";
}

.icon-fire:before {
  content: "\\e638";
}

.icon-lighter:before {
  content: "\\e639";
}

.icon-toilet-paper:before {
  content: "\\e63d";
}

.icon-umbrella:before {
  content: "\\e63f";
}

.icon-umbrella2:before {
  content: "\\e640";
}

.icon-rain:before {
  content: "\\e641";
}

.icon-tornado:before {
  content: "\\e642";
}

.icon-wind:before {
  content: "\\e643";
}

.icon-sun-small:before {
  content: "\\e646";
}

.icon-sun:before {
  content: "\\e647";
}

.icon-moon:before {
  content: "\\e649";
}

.icon-cloud:before {
  content: "\\e64a";
}

.icon-cloud-upload:before {
  content: "\\e64b";
}

.icon-cloud-download:before {
  content: "\\e64c";
}

.icon-cloud-rain:before {
  content: "\\e64d";
}

.icon-cloud-hailstones:before {
  content: "\\e64e";
}

.icon-cloud-snow:before {
  content: "\\e64f";
}

.icon-cloud-windy:before {
  content: "\\e650";
}

.icon-sun-wind:before {
  content: "\\e651";
}

.icon-cloud-sun:before {
  content: "\\e653";
}

.icon-cloud-lightning:before {
  content: "\\e654";
}

.icon-cloud-database:before {
  content: "\\e65c";
}

.icon-database:before {
  content: "\\e65d";
}

.icon-server:before {
  content: "\\e666";
}

.icon-shield:before {
  content: "\\e667";
}

.icon-shield-check:before {
  content: "\\e668";
}

.icon-shield-alert:before {
  content: "\\e669";
}

.icon-shield-cross:before {
  content: "\\e66a";
}

.icon-lock:before {
  content: "\\e66b";
}

.icon-unlock:before {
  content: "\\e66d";
}

.icon-key:before {
  content: "\\e66e";
}

.icon-key-hole:before {
  content: "\\e66f";
}

.icon-toggle-off:before {
  content: "\\e670";
}

.icon-toggle-on:before {
  content: "\\e671";
}

.icon-cog:before {
  content: "\\e672";
}

.icon-cog2:before {
  content: "\\e673";
}

.icon-wrench:before {
  content: "\\e674";
}

.icon-hammer-wrench:before {
  content: "\\e676";
}

.icon-hammer:before {
  content: "\\e677";
}

.icon-shovel:before {
  content: "\\e67b";
}

.icon-factory2:before {
  content: "\\e67e";
}

.icon-recycle:before {
  content: "\\e67f";
}

.icon-trash2:before {
  content: "\\e681";
}

.icon-broom:before {
  content: "\\e683";
}

.icon-gamepad:before {
  content: "\\e685";
}

.icon-dice:before {
  content: "\\e687";
}

.icon-heart:before {
  content: "\\e68c";
}

.icon-star:before {
  content: "\\e68d";
}

.icon-flag:before {
  content: "\\e690";
}

.icon-flag3:before {
  content: "\\e692";
}

.icon-at-sign:before {
  content: "\\e695";
}

.icon-envelope:before {
  content: "\\e696";
}

.icon-envelope-open:before {
  content: "\\e697";
}

.icon-paperclip:before {
  content: "\\e698";
}

.icon-paper-plane:before {
  content: "\\e699";
}

.icon-box:before {
  content: "\\e69f";
}

.icon-archive2:before {
  content: "\\e6a1";
}

.icon-drawers3:before {
  content: "\\e6a4";
}

.icon-eye:before {
  content: "\\e6a5";
}

.icon-binoculars:before {
  content: "\\e6a9";
}

.icon-disc:before {
  content: "\\e6af";
}

.icon-printer:before {
  content: "\\e6b1";
}

.icon-shredder:before {
  content: "\\e6b2";
}

.icon-file-empty:before {
  content: "\\e6b3";
}

.icon-files:before {
  content: "\\e6b7";
}

.icon-folder:before {
  content: "\\e6ba";
}

.icon-scissors:before {
  content: "\\e6c7";
}

.icon-clipboard-empty:before {
  content: "\\e6c9";
}

.icon-clipboard-text:before {
  content: "\\e6cb";
}

.icon-clipboard-check:before {
  content: "\\e6cc";
}

.icon-clipboard-user:before {
  content: "\\e6d0";
}

.icon-papers:before {
  content: "\\e6d4";
}

.icon-news:before {
  content: "\\e6d5";
}

.icon-reading:before {
  content: "\\e6d6";
}

.icon-document2:before {
  content: "\\e6d9";
}

.icon-graduation-hat:before {
  content: "\\e6da";
}

.icon-medal-empty:before {
  content: "\\e6dd";
}

.icon-trophy2:before {
  content: "\\e6e3";
}

.icon-music-note:before {
  content: "\\e6e4";
}

.icon-music-note3:before {
  content: "\\e6e6";
}

.icon-headphones:before {
  content: "\\e6ef";
}

.icon-theater:before {
  content: "\\e6f3";
}

.icon-ticket:before {
  content: "\\e6f5";
}

.icon-film-play:before {
  content: "\\e6f8";
}

.icon-film:before {
  content: "\\e6fb";
}

.icon-surveillance:before {
  content: "\\e6fd";
}

.icon-camera:before {
  content: "\\e6ff";
}

.icon-camera-crossed:before {
  content: "\\e700";
}

.icon-camera2:before {
  content: "\\e704";
}

.icon-picture:before {
  content: "\\e70e";
}

.icon-book:before {
  content: "\\e712";
}

.icon-book2:before {
  content: "\\e714";
}

.icon-bookmark:before {
  content: "\\e715";
}

.icon-bookmark2:before {
  content: "\\e716";
}

.icon-library:before {
  content: "\\e718";
}

.icon-library2:before {
  content: "\\e719";
}

.icon-profile:before {
  content: "\\e71b";
}

.icon-user:before {
  content: "\\e71e";
}

.icon-users:before {
  content: "\\e722";
}

.icon-users2:before {
  content: "\\e723";
}

.icon-group-work:before {
  content: "\\e726";
}

.icon-baby:before {
  content: "\\e729";
}

.icon-baby2:before {
  content: "\\e72a";
}

.icon-walk:before {
  content: "\\e72d";
}

.icon-run:before {
  content: "\\e730";
}

.icon-woman2:before {
  content: "\\e731";
}

.icon-man2:before {
  content: "\\e732";
}

.icon-man-woman:before {
  content: "\\e733";
}

.icon-shirt:before {
  content: "\\e741";
}

.icon-store:before {
  content: "\\e744";
}

.icon-barcode:before {
  content: "\\e747";
}

.icon-barcode3:before {
  content: "\\e749";
}

.icon-bag:before {
  content: "\\e74b";
}

.icon-cart:before {
  content: "\\e74d";
}

.icon-tag:before {
  content: "\\e755";
}

.icon-receipt:before {
  content: "\\e757";
}

.icon-credit-card:before {
  content: "\\e759";
}

.icon-cash-dollar:before {
  content: "\\e75a";
}

.icon-calculator2:before {
  content: "\\e767";
}

.icon-telephone:before {
  content: "\\e76a";
}

.icon-telephone2:before {
  content: "\\e777";
}

.icon-pushpin:before {
  content: "\\e778";
}

.icon-map-marker:before {
  content: "\\e77a";
}

.icon-map2:before {
  content: "\\e782";
}

.icon-location:before {
  content: "\\e783";
}

.icon-road-sign:before {
  content: "\\e784";
}

.icon-calendar-empty:before {
  content: "\\e785";
}

.icon-calendar-31:before {
  content: "\\e788";
}

.icon-calendar-full:before {
  content: "\\e789";
}

.icon-mouse:before {
  content: "\\e78d";
}

.icon-keyboard:before {
  content: "\\e791";
}

.icon-screen:before {
  content: "\\e798";
}

.icon-signal:before {
  content: "\\e79a";
}

.icon-smartphone:before {
  content: "\\e7a6";
}

.icon-smartphone-vibration:before {
  content: "\\e7a8";
}

.icon-smartphone-waves:before {
  content: "\\e7aa";
}

.icon-laptop:before {
  content: "\\e7ad";
}

.icon-window:before {
  content: "\\e7b2";
}

.icon-tv:before {
  content: "\\e7b5";
}

.icon-remote-control:before {
  content: "\\e7b7";
}

.icon-power-switch:before {
  content: "\\e7b8";
}

.icon-power:before {
  content: "\\e7b9";
}

.icon-lamp:before {
  content: "\\e7bc";
}

.icon-cord:before {
  content: "\\e7bf";
}

.icon-battery-empty:before {
  content: "\\e7c2";
}

.icon-battery-full:before {
  content: "\\e7cb";
}

.icon-battery-charging:before {
  content: "\\e7cc";
}

.icon-bubble:before {
  content: "\\e7d6";
}

.icon-bubbles:before {
  content: "\\e7d7";
}

.icon-bubble-alert:before {
  content: "\\e7d9";
}

.icon-bubble-question:before {
  content: "\\e7da";
}

.icon-bubble-text:before {
  content: "\\e7db";
}

.icon-phone-bubble:before {
  content: "\\e7e4";
}

.icon-translate:before {
  content: "\\e903";
}

.icon-dna:before {
  content: "\\e7e7";
}

.icon-heart-pulse:before {
  content: "\\e7e8";
}

.icon-pulse:before {
  content: "\\e7e9";
}

.icon-syringe:before {
  content: "\\e7ea";
}

.icon-first-aid:before {
  content: "\\e7ec";
}

.icon-lifebuoy:before {
  content: "\\e7ed";
}

.icon-skull:before {
  content: "\\e7f4";
}

.icon-bone:before {
  content: "\\e7f5";
}

.icon-construction:before {
  content: "\\e7f6";
}

.icon-construction-cone:before {
  content: "\\e7f7";
}

.icon-pie-chart:before {
  content: "\\e7f8";
}

.icon-graph:before {
  content: "\\e7fa";
}

.icon-chart-growth:before {
  content: "\\e7fb";
}

.icon-cake:before {
  content: "\\e7fe";
}

.icon-gift:before {
  content: "\\e7ff";
}

.icon-lotus:before {
  content: "\\e805";
}

.icon-diamond2:before {
  content: "\\e807";
}

.icon-picnic-table:before {
  content: "\\e901";
}

.icon-teacup:before {
  content: "\\e80b";
}

.icon-bottle2:before {
  content: "\\e80e";
}

.icon-glass2:before {
  content: "\\e810";
}

.icon-dinner:before {
  content: "\\e811";
}

.icon-pizza:before {
  content: "\\e81c";
}

.icon-chicken:before {
  content: "\\e81e";
}

.icon-fish:before {
  content: "\\e81f";
}

.icon-duck:before {
  content: "\\e900";
}

.icon-ice-cream:before {
  content: "\\e823";
}

.icon-coffee-cup:before {
  content: "\\e828";
}

.icon-cherry:before {
  content: "\\e829";
}

.icon-apple:before {
  content: "\\e82c";
}

.icon-leaf:before {
  content: "\\e82d";
}

.icon-pine-tree:before {
  content: "\\e82f";
}

.icon-tree:before {
  content: "\\e830";
}

.icon-cactus:before {
  content: "\\e831";
}

.icon-paw:before {
  content: "\\e832";
}

.icon-bleachers:before {
  content: "\\e902";
}

.icon-rocket:before {
  content: "\\e837";
}

.icon-hammer2:before {
  content: "\\e838";
}

.icon-balance:before {
  content: "\\e839";
}

.icon-briefcase:before {
  content: "\\e83a";
}

.icon-plane:before {
  content: "\\e83d";
}

.icon-helicopter:before {
  content: "\\e83f";
}

.icon-traffic-lights:before {
  content: "\\e840";
}

.icon-road:before {
  content: "\\e842";
}

.icon-gas:before {
  content: "\\e847";
}

.icon-bus2:before {
  content: "\\e84e";
}

.icon-car2:before {
  content: "\\e84f";
}

.icon-car-siren:before {
  content: "\\e853";
}

.icon-parking:before {
  content: "\\e850";
}

.icon-train:before {
  content: "\\e85a";
}

.icon-ship2:before {
  content: "\\e85c";
}

.icon-anchor:before {
  content: "\\e85d";
}

.icon-boat:before {
  content: "\\e85e";
}

.icon-bicycle:before {
  content: "\\e85f";
}

.icon-bicycle2:before {
  content: "\\e860";
}

.icon-dumbbell:before {
  content: "\\e861";
}

.icon-swim:before {
  content: "\\e863";
}

.icon-football:before {
  content: "\\e864";
}

.icon-baseball-bat:before {
  content: "\\e865";
}

.icon-baseball:before {
  content: "\\e866";
}

.icon-tennis:before {
  content: "\\e867";
}

.icon-tennis2:before {
  content: "\\e868";
}

.icon-ping-pong:before {
  content: "\\e869";
}

.icon-hockey:before {
  content: "\\e86a";
}

.icon-8ball:before {
  content: "\\e86b";
}

.icon-bowling:before {
  content: "\\e86c";
}

.icon-bowling-pins:before {
  content: "\\e86d";
}

.icon-golf:before {
  content: "\\e86e";
}

.icon-golf2:before {
  content: "\\e86f";
}

.icon-archery:before {
  content: "\\e870";
}

.icon-soccer:before {
  content: "\\e872";
}

.icon-basketball:before {
  content: "\\e873";
}

.icon-cube:before {
  content: "\\e874";
}

.icon-puzzle:before {
  content: "\\e876";
}

.icon-glasses2:before {
  content: "\\e878";
}

.icon-wheelchair:before {
  content: "\\e87a";
}

.icon-fence:before {
  content: "\\e87c";
}

.icon-select2:before {
  content: "\\e882";
}

.icon-site-map:before {
  content: "\\e883";
}

.icon-earth:before {
  content: "\\e884";
}

.icon-planet:before {
  content: "\\e888";
}

.icon-happy:before {
  content: "\\e889";
}

.icon-smile:before {
  content: "\\e88a";
}

.icon-halloween:before {
  content: "\\e8a4";
}

.icon-christmas:before {
  content: "\\e8a5";
}

.icon-easter-egg:before {
  content: "\\e8a6";
}

.icon-alarm:before {
  content: "\\e8aa";
}

.icon-alarm-ringing:before {
  content: "\\e8ad";
}

.icon-bullhorn:before {
  content: "\\e8ae";
}

.icon-volume-high:before {
  content: "\\e8b0";
}

.icon-lan:before {
  content: "\\e8b5";
}

.icon-wifi:before {
  content: "\\e8b7";
}

.icon-antenna:before {
  content: "\\e8c8";
}

.icon-satellite:before {
  content: "\\e8c9";
}

.icon-satellite2:before {
  content: "\\e8ca";
}

.icon-mic:before {
  content: "\\e8cb";
}

.icon-mic2:before {
  content: "\\e8cd";
}

.icon-spotlights:before {
  content: "\\e8ce";
}

.icon-clock3:before {
  content: "\\e8e8";
}

.icon-watch:before {
  content: "\\e8e9";
}

.icon-download2:before {
  content: "\\e8f5";
}

.icon-upload2:before {
  content: "\\e8f6";
}

.icon-exit-up:before {
  content: "\\e8fb";
}

.icon-exit-down:before {
  content: "\\e8fc";
}

.icon-launch:before {
  content: "\\e7b0";
}

.icon-bug:before {
  content: "\\e90a";
}

.icon-code:before {
  content: "\\e90b";
}

.icon-thumbs-up:before {
  content: "\\e919";
}

.icon-thumbs-down:before {
  content: "\\e91a";
}

.icon-magnifier:before {
  content: "\\e922";
}

.icon-cross:before {
  content: "\\e92a";
}

.icon-menu:before {
  content: "\\e92b";
}

.icon-exclamation:before {
  content: "\\e932";
}

.icon-question:before {
  content: "\\e933";
}

.icon-check:before {
  content: "\\e934";
}

.icon-cross2:before {
  content: "\\e935";
}

.icon-plus:before {
  content: "\\e936";
}

.icon-minus:before {
  content: "\\e937";
}

.icon-arrow-up:before {
  content: "\\e941";
}

.icon-arrow-down:before {
  content: "\\e942";
}

.icon-arrow-left:before {
  content: "\\e943";
}

.icon-arrow-right:before {
  content: "\\e944";
}

.icon-arrow-up-right:before {
  content: "\\e945";
}

.icon-move:before {
  content: "\\e94e";
}

.icon-warning:before {
  content: "\\e955";
}

.icon-notification-circle:before {
  content: "\\e956";
}

.icon-question-circle:before {
  content: "\\e957";
}

.icon-menu-circle:before {
  content: "\\e958";
}

.icon-checkmark-circle:before {
  content: "\\e959";
}

.icon-cross-circle:before {
  content: "\\e95a";
}

.icon-plus-circle:before {
  content: "\\e95b";
}

.icon-circle-minus:before {
  content: "\\e95c";
}

.icon-arrow-up-circle:before {
  content: "\\e95e";
}

.icon-arrow-down-circle:before {
  content: "\\e95f";
}

.icon-arrow-left-circle:before {
  content: "\\e960";
}

.icon-arrow-right-circle:before {
  content: "\\e961";
}

.icon-chevron-up-circle:before {
  content: "\\e962";
}

.icon-chevron-down-circle:before {
  content: "\\e963";
}

.icon-chevron-left-circle:before {
  content: "\\e964";
}

.icon-chevron-right-circle:before {
  content: "\\e965";
}

.icon-backward-circle:before {
  content: "\\e966";
}

.icon-first-circle:before {
  content: "\\e967";
}

.icon-previous-circle:before {
  content: "\\e968";
}

.icon-stop-circle:before {
  content: "\\e969";
}

.icon-play-circle:before {
  content: "\\e96a";
}

.icon-pause-circle:before {
  content: "\\e96b";
}

.icon-next-circle:before {
  content: "\\e96c";
}

.icon-last-circle:before {
  content: "\\e96d";
}

.icon-forward-circle:before {
  content: "\\e96e";
}

.icon-layers:before {
  content: "\\e977";
}

.icon-ruler:before {
  content: "\\e97b";
}

.icon-plus-square:before {
  content: "\\e98e";
}

.icon-minus-square:before {
  content: "\\e98f";
}

.icon-arrow-up-square:before {
  content: "\\e991";
}

.icon-arrow-down-square:before {
  content: "\\e992";
}

.icon-arrow-left-square:before {
  content: "\\e993";
}

.icon-arrow-right-square:before {
  content: "\\e994";
}

.icon-chevron-up-square:before {
  content: "\\e995";
}

.icon-chevron-down-square:before {
  content: "\\e996";
}

.icon-chevron-left-square:before {
  content: "\\e997";
}

.icon-chevron-right-square:before {
  content: "\\e998";
}

.icon-check-square:before {
  content: "\\e999";
}

.icon-cross-square:before {
  content: "\\e99a";
}

.icon-menu-square:before {
  content: "\\e99b";
}

.icon-prohibited:before {
  content: "\\e99c";
}

.icon-text-format:before {
  content: "\\e9a0";
}

.icon-text-size:before {
  content: "\\e9a2";
}

.icon-hand:before {
  content: "\\e9bf";
}

.icon-pointer-up:before {
  content: "\\e9c0";
}

.icon-reminder:before {
  content: "\\e9c6";
}

.icon-ellipsis:before {
  content: "\\e9e9";
}

@font-face {
  font-family: 'socials';
  src: url("/fonts/socials/socials.eot?4wi16y");
  src: url("/fonts/socials/socials.eot?4wi16y#iefix") format("embedded-opentype"), url("/fonts/socials/socials.ttf?4wi16y") format("truetype"), url("/fonts/socials/socials.woff?4wi16y") format("woff"), url("/fonts/socials/socials.svg?4wi16y#socials") format("svg");
  font-weight: normal;
  font-style: normal;
}

.icon-youtube:before,
.icon-nextdoor:before,
.icon-share:before,
.icon-email:before,
.icon-google:before,
.icon-googleplus:before,
.icon-facebook:before,
.icon-instagram:before,
.icon-twitter:before,
.icon-rss:before,
.icon-vimeo:before,
.icon-dropbox:before,
.icon-appleinc:before,
.icon-android:before,
.icon-microsoft:before,
.icon-linkedin:before,
.icon-pinterest:before {
  font-family: 'socials';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-youtube:before {
  content: "\\e60c";
}

.icon-nextdoor:before {
  content: "\\e900";
}

.icon-share:before {
  content: "\\ea82";
}

.icon-email:before {
  content: "\\ea85";
}

.icon-google:before {
  content: "\\ea88";
}

.icon-googleplus:before {
  content: "\\ea8b";
}

.icon-facebook:before {
  content: "\\ea90";
}

.icon-instagram:before {
  content: "\\ea92";
}

.icon-twitter:before {
  content: "\\ea96";
}

.icon-rss:before {
  content: "\\ea9b";
}

.icon-vimeo:before {
  content: "\\eaa0";
}

.icon-dropbox:before {
  content: "\\eaae";
}

.icon-appleinc:before {
  content: "\\eabe";
}

.icon-android:before {
  content: "\\eac0";
}

.icon-microsoft:before {
  content: "\\eac2";
}

.icon-linkedin:before {
  content: "\\eaca";
}

.icon-pinterest:before {
  content: "\\ead1";
}

.icon--xs {
  font-size: 10px;
  font-size: 0.625rem;
}

.icon--sm {
  font-size: 18px;
  font-size: 1.125rem;
}

.icon--md {
  font-size: 24px;
  font-size: 1.5rem;
}

.icon--lg {
  font-size: 34px;
  font-size: 2.125rem;
}

.icon--xl {
  font-size: 44px;
  font-size: 2.75rem;
}

.icon--circle {
  color: white;
  padding: .5em;
  border-radius: 50%;
  display: inline-block;
}

.icon--outline {
  padding: .3em;
  border: 2px solid;
  border-radius: 50%;
  font-weight: 600;
}

.icon-do-not {
  position: relative;
  color: #c51313;
  z-index: 5;
  font-size: 1.8rem !important;
}

.icon-do-not:before {
  content: "\\e99c";
}

.icon-do-not > [class^="icon-"], .icon-do-not [class*=" icon-"] {
  float: left;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0.3em;
  color: #37424a;
  z-index: -1;
  font-size: 18px;
  font-size: 1.125rem;
}

.icon-do-not.icon--xs {
  font-size: 1rem !important;
}

.icon-do-not.icon--xs > [class^="icon-"], .icon-do-not.icon--xs [class*=" icon-"] {
  font-size: 10px;
  font-size: 0.625rem;
}

.icon-do-not.icon--sm {
  font-size: 1.8rem !important;
}

.icon-do-not.icon--sm > [class^="icon-"], .icon-do-not.icon--sm [class*=" icon-"] {
  font-size: 18px;
  font-size: 1.125rem;
}

.icon-do-not.icon--md {
  font-size: 2.4rem !important;
}

.icon-do-not.icon--md > [class^="icon-"], .icon-do-not.icon--md [class*=" icon-"] {
  font-size: 24px;
  font-size: 1.5rem;
}

.icon-do-not.icon--lg {
  font-size: 3.4rem !important;
}

.icon-do-not.icon--lg > [class^="icon-"], .icon-do-not.icon--lg [class*=" icon-"] {
  font-size: 34px;
  font-size: 2.125rem;
}

.icon-do-not.icon--xl {
  font-size: 4.4rem !important;
}

.icon-do-not.icon--xl > [class^="icon-"], .icon-do-not.icon--xl [class*=" icon-"] {
  font-size: 44px;
  font-size: 2.75rem;
}

.background--cerulean {
  background-color: #0098db !important;
}

.background--white {
  background-color: #ffffff !important;
}

#google_translate_element .goog-te-gadget-simple {
  border: none;
  background: none;

  & img {
    visibility: hidden;
  }

  & > span > a > span{
    color: ${(props) => props.theme.secondaryFooterTextColor} !important;
    font-family: "Open Sans",sans-serif !important;
    font-size: 1rem;
  }

  & > span > a:hover > span{
    color: ${(props) => props.theme.linkTextHoverColor};
  }

  & > span > a > span:nth-child(3){
    display: none !important;
  }

  padding-top: 0;
}

// PDF View Styles
.pdf-container {
  height: 90vh;
  overflow-y: auto;
}
.pdf-page {
  border: 4px solid #0098db;
  margin-bottom: 10px;
}
// react-indiana-drag-scroll
.scroll-container {
  height: 90vh;
}


// dropdown
.ef-dropdown {
  position: absolute;
  left: -9999px;
  top: -9999px;
  z-index: 1070;
  display: block;
  font-family: "Merriweather",serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 1.5;
}

.ef-dropdown-hidden {
  display: none;
}

.ef-dropdown-menu {
  outline: none;
  position: relative;
  list-style-type: none;
  padding: 0;
  margin: 2px 0 2px;
  text-align: left;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 5px #ccc;
  background-clip: padding-box;
  border: 1px solid #ccc;
}

.ef-dropdown-menu > li {
  margin: 0;
  padding: 0;
}

.ef-dropdown-menu:before {
  content: "";
  position: absolute;
  top: -4px;
  left: 0;
  width: 100%;
  height: 4px;
  background: #ffffff;
  background: rgba(255, 255, 255, 0.01);
}

.ef-dropdown-menu > .ef-dropdown-menu-item {
  position: relative;
  display: block;
  padding: 7px 10px;
  clear: both;
  font-size: 12px;
  font-weight: normal;
  color: #666666;
  white-space: nowrap;
}

.ef-dropdown-menu > .ef-dropdown-menu-item:hover,
.ef-dropdown-menu > .ef-dropdown-menu-item-active,
.ef-dropdown-menu > .ef-dropdown-menu-item-selected {
  background-color: ${(props) => props.theme.mainBgColor};
}

.ef-dropdown-menu > .ef-dropdown-menu-item-selected {
  position: relative;
}

.ef-dropdown-menu > .ef-dropdown-menu-item-selected:after {
  font-weight: bold;
  position: absolute;
  top: 6px;
  right: 16px;
  color: #3CB8F0;
}

.ef-dropdown-menu > .ef-dropdown-menu-item-disabled {
  color: #ccc;
  cursor: not-allowed;
  pointer-events: none;
}

.ef-dropdown-menu > .ef-dropdown-menu-item-disabled:hover {
  color: #ccc;
  background-color: #fff;
  cursor: not-allowed;
}

.ef-dropdown-menu > .ef-dropdown-menu-item:last-child {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}

.ef-dropdown-menu > .ef-dropdown-menu-item:first-child {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.ef-dropdown-menu > .ef-dropdown-menu-item-divider {
  height: 1px;
  margin: 1px 0;
  overflow: hidden;
  background-color: #e5e5e5;
  line-height: 0;
}

.ef-dropdown-slide-up-enter,
.ef-dropdown-slide-up-appear {
  animation-duration: 0.3s;
  animation-fill-mode: both;
  transform-origin: 0 0;
  display: block !important;
  opacity: 0;
  animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
  animation-play-state: paused;
}

.ef-dropdown-slide-up-leave {
  animation-duration: 0.3s;
  animation-fill-mode: both;
  transform-origin: 0 0;
  display: block !important;
  opacity: 1;
  animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
  animation-play-state: paused;
}

.ef-dropdown-slide-up-enter.ef-dropdown-slide-up-enter-active.ef-dropdown-placement-bottomLeft,
.ef-dropdown-slide-up-appear.ef-dropdown-slide-up-appear-active.ef-dropdown-placement-bottomLeft,
.ef-dropdown-slide-up-enter.ef-dropdown-slide-up-enter-active.ef-dropdown-placement-bottomCenter,
.ef-dropdown-slide-up-appear.ef-dropdown-slide-up-appear-active.ef-dropdown-placement-bottomCenter,
.ef-dropdown-slide-up-enter.ef-dropdown-slide-up-enter-active.ef-dropdown-placement-bottomRight,
.ef-dropdown-slide-up-appear.ef-dropdown-slide-up-appear-active.ef-dropdown-placement-bottomRight {
  animation-name: rcDropdownSlideUpIn;
  animation-play-state: running;
}

.ef-dropdown-slide-up-enter.ef-dropdown-slide-up-enter-active.ef-dropdown-placement-topLeft,
.ef-dropdown-slide-up-appear.ef-dropdown-slide-up-appear-active.ef-dropdown-placement-topLeft,
.ef-dropdown-slide-up-enter.ef-dropdown-slide-up-enter-active.ef-dropdown-placement-topCenter,
.ef-dropdown-slide-up-appear.ef-dropdown-slide-up-appear-active.ef-dropdown-placement-topCenter,
.ef-dropdown-slide-up-enter.ef-dropdown-slide-up-enter-active.ef-dropdown-placement-topRight,
.ef-dropdown-slide-up-appear.ef-dropdown-slide-up-appear-active.ef-dropdown-placement-topRight {
  animation-name: rcDropdownSlideDownIn;
  animation-play-state: running;
}

.ef-dropdown-slide-up-leave.ef-dropdown-slide-up-leave-active.ef-dropdown-placement-bottomLeft,
.ef-dropdown-slide-up-leave.ef-dropdown-slide-up-leave-active.ef-dropdown-placement-bottomCenter,
.ef-dropdown-slide-up-leave.ef-dropdown-slide-up-leave-active.ef-dropdown-placement-bottomRight {
  animation-name: rcDropdownSlideUpOut;
  animation-play-state: running;
}

.ef-dropdown-slide-up-leave.ef-dropdown-slide-up-leave-active.ef-dropdown-placement-topLeft,
.ef-dropdown-slide-up-leave.ef-dropdown-slide-up-leave-active.ef-dropdown-placement-topCenter,
.ef-dropdown-slide-up-leave.ef-dropdown-slide-up-leave-active.ef-dropdown-placement-topRight {
  animation-name: rcDropdownSlideDownOut;
  animation-play-state: running;
}

@keyframes rcDropdownSlideUpIn {
  0% {
    opacity: 0;
    transform-origin: 0% 0%;
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scaleY(1);
  }
}

@keyframes rcDropdownSlideUpOut {
  0% {
    opacity: 1;
    transform-origin: 0% 0%;
    transform: scaleY(1);
  }
  100% {
    opacity: 0;
    transform-origin: 0% 0%;
    transform: scaleY(0);
  }
}

@keyframes rcDropdownSlideDownIn {
  0% {
    opacity: 0;
    transform-origin: 0% 100%;
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform-origin: 0% 100%;
    transform: scaleY(1);
  }
}

@keyframes rcDropdownSlideDownOut {
  0% {
    opacity: 1;
    transform-origin: 0% 100%;
    transform: scaleY(1);
  }
  100% {
    opacity: 0;
    transform-origin: 0% 100%;
    transform: scaleY(0);
  }
}

.ef-dropdown-arrow {
  position: absolute;
  border-width: 4px;
  border-color: transparent;
  box-shadow: 0 1px 5px #ccc;
  border-style: solid;
  transform: rotate(45deg);
}

.ef-dropdown-show-arrow.ef-dropdown-placement-top,
.ef-dropdown-show-arrow.ef-dropdown-placement-topLeft,
.ef-dropdown-show-arrow.ef-dropdown-placement-topRight {
  padding-bottom: 6px;
}

.ef-dropdown-show-arrow.ef-dropdown-placement-bottom,
.ef-dropdown-show-arrow.ef-dropdown-placement-bottomLeft,
.ef-dropdown-show-arrow.ef-dropdown-placement-bottomRight {
  padding-top: 6px;
}

.ef-dropdown-placement-top .ef-dropdown-arrow,
.ef-dropdown-placement-topLeft .ef-dropdown-arrow,
.ef-dropdown-placement-topRight .ef-dropdown-arrow {
  bottom: 4px;
  border-top-color: white;
}

.ef-dropdown-placement-top .ef-dropdown-arrow {
  left: 50%;
}

.ef-dropdown-placement-topLeft .ef-dropdown-arrow {
  left: 15%;
}

.ef-dropdown-placement-topRight .ef-dropdown-arrow {
  right: 15%;
}

.ef-dropdown-placement-bottom .ef-dropdown-arrow,
.ef-dropdown-placement-bottomLeft .ef-dropdown-arrow,
.ef-dropdown-placement-bottomRight .ef-dropdown-arrow {
  top: 4px;
  border-bottom-color: white;
}

.ef-dropdown-placement-bottom .ef-dropdown-arrow {
  left: 50%;
}

.ef-dropdown-placement-bottomLeft .ef-dropdown-arrow {
  left: 15%;
}

.ef-dropdown-placement-bottomRight .ef-dropdown-arrow {
  right: 15%;
}

`;
