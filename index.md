---
layout: default
---

{% assign categories = site.data.categories %} 
<div class="row">
 <div id="homepage-image" class="col col-12 col-lg-6 p-3">
  <h1 id="homepage-header-name" class="fancy-font text-right">Marilyn J Friedman</h1>
  <ul id="homepage-links" class="fancy-font text-right list-unstyled p-2">
  {% for i in categories.list %}
  <li> 
   <a href="/directory">{{categories[i].displayname}}</a>
  </li>
  {% endfor %}
  <li> <a href="events.html">Events</a> </li>
  <li> <a href="assets/cv.pdf">CV</a> </li>
  <li> <a href="mailto:marilynjfriedman@gmail.com">Contact</a> </li>
  </ul>
 </div>
 <div class="col col-12 col-lg-6 p-3">
  <h2 id="homepage-header-sculptor" 
      class="fancy-font px-lg-4">
    Sculptor
  </h2>
  <div id="homepage-bio-paragraph" 
       class="plain-font mt-lg-4 pl-lg-4 pt-lg-2">
   <p> MARILYN J FRIEDMAN began as a figurative sculptor, developing the rhythms,
   dynamics, and motifs of the human form - creating a vocabulary in clay which
   evolved into a language of personal imagery and content. </p>

   <p> She studied sculpture at The Art Students League of New York, Skowhegan
   School of Painting and Sculpture, The University of Siena, Italy, and
   received a BA in Art History and Sculpture from Stony Brook University. </p>
   
   <p> She has received numerous grants and awards for her portrait, figurative,
   and abstract works from organizations such as The National Academy of Design,
   The National Sculpture Society, and The National Arts Club. She has created
   commissioned sculpture for Kohler, Lufthansa, and Absolut, and her work is in
   many private collections. </p>
 
   <p> Ms. Friedman has taught sculpture at Parsons School of Design, and has
   been on the sculpture faculty of the National Academy School. She is
   currently an Instructor at The Art Students League of New York. </p>
 
   <p> Marilyn J Friedman is a recipient of the 2014 Adolph & Esther Gottlieb
   Foundation Grant in recognition of her work as a sculptor, and was named a
   2020 NYSCA/New York Foundation for the Arts Artist Fellow in Sculpture.
   </p>
  </div>
 </div>
</div>
