---
layout: page
title: Events
permalink: /events/
title_text: The UNSW Mathematics Society holds several kinds of events that aim to include everyone in the society.
---

Whether it be a majors talk so budding maths students can discern between a Pure or Applied major – or if you’re one of the more sporty in the society and aspire to be the next Lionel Messi – MathSoc is sure to have an event for you!

{% assign now = "now" | date: "%Y/%m/%d"%}

### Upcoming Events

<!-- <div class="eventsbox">
<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Funswmathsoc%2Fposts%2F2387233164633342&width=800" width="800" height="500" style="border:none;overflow:hidden" scrolling="yes" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
</div> -->
<br>

Aug 13 - <a href="https://www.facebook.com/events/397235400922466/">Math2501 / Nath2601 Revision Seminars</a>

_____________________

### Past Events
<br>

Aug 9 - <a href="https://www.facebook.com/events/338634147084270/">Math1231/ Math1241 Revision Seminars</a>

Aug 7 - <a href="https://www.facebook.com/events/453369988576987/">Data and Analytics with Ernst & Young</a>

Aug 2 - <a href="https://www.facebook.com/events/1321595847994794/">Interfaculty Power Rangers Pub Crawl</a>

Jul 30 - <a href="https://www.facebook.com/events/2370907999838564/">UNSW MathSoc Trivia Night</a>

Jul 23 - <a href="https://www.facebook.com/events/322659288642026/">MathSoc and IMC Present: Careers in Trading</a>

Jul 18 - <a href="https://www.facebook.com/events/467378877388201/">MathSoc Presents: Free Sausage Sizzle</a>

Jul 03 - <a href="https://www.facebook.com/events/2063513330438249/">MathSoc & Macquarie Presents: STEM Career Pathways at Macquarie</a>

Jun 28 - <a href="https://www.facebook.com/events/341424543424488/">UNSW MathSoc Presents: 2019 Hoodies (early bird)</a>

Jun 26 - <a href="https://www.facebook.com/events/2282740158633986/">STEM Alternate Pathways Evening</a>

Apr 30 - <a href="https://www.facebook.com/events/266993567539817/">MathSoc Presents: Math1131/1141 Revision Seminar</a>

Apr 26 - <a href="https://www.facebook.com/events/281336312750931/">MathSoc Presents: Math2011/2111 Revision Seminar</a>


{% assign events = site.events | sort:"show_date" %}
{% for event in events %}
{% assign start = event.show_date | date: "%Y/%m/%d" %}
{% assign end = event.hide_date | date: "%Y/%m/%d" %}
{% if start <= now and now <= end %}
{{ event }}
----------------------------------------------------------
{% endif %}
{% endfor %}


<!-- TODO better information about events, slideshow? -->