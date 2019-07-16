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
Jul 18 - 
<a href="https://www.facebook.com/events/467378877388201/">MathSoc Presents: Free Sausage Sizzle</a>

Jul 23 - 
<a href="https://www.facebook.com/events/322659288642026/">MathSoc and IMC Present: Careers in Trading</a>



---------------------------------------------------------

### Past Events

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