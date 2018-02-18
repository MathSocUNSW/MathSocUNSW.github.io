---
layout: page
title: Events
permalink: /events/
title_text: The UNSW Mathematics Society holds several kinds of events that aim to include everyone in the society.
---

Whether it be a majors talk so budding maths students can discern between a Pure or Applied major – or if you’re one of the more sporty in the society and aspire to be the next Lionel Messi – MathSoc is sure to have an event for you!

{% assign now = "now" | date: "%Y/%m/%d"%}

Upcoming Events
---------------------------------------------------------- 
----------------------------------------------------------
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