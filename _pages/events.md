---
layout: page
title: Events
permalink: /events/
title_text: The UNSW Mathematics Society holds several kinds of events that aim to include everyone in the society.
---

Whether it be a majors talk so budding maths students can discern between a Pure or Applied major – or if you’re one of the more sporty in the society and aspire to be the next Lionel Messi – MathSoc is sure to have an event for you!

{% assign now = "now" | date: "%Y/%m/%d"%}

### Upcoming Events



_____________________

### Past Events
<br>
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