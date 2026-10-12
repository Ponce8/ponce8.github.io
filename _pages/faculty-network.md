---
title: Faculty Network
permalink: /faculty-network/
nav: true
nav_order: 2
description: Faculty network page for PHCCO.
---

## Faculty directory

<p class="data-note">Profiles use the supplied Google Scholar identities. Fields that Scholar does not provide remain explicitly marked for verification.</p>

<div class="people-directory">
{% assign faculty = site.data.people | where: 'kind', 'faculty' %}
{% for person in faculty %}
  {% capture profile_path %}/faculty/{{ person.id }}/{% endcapture %}
  {% include person-card.html person=person href=profile_path %}
{% endfor %}
</div>

## Collaboration pages with Mohit Kumar Jolly

<div class="collaboration-index">
{% for collaboration in site.data.collaborations %}
  {% assign collaborator = site.data.people | where: 'id', collaboration.faculty_id | first %}
  <a href="{{ '/collaborations/' | append: collaboration.id | append: '/' | relative_url }}">
    <strong>Mohit Kumar Jolly + {{ collaborator.name }}</strong>
    <span>{{ collaboration.focus }}</span>
  </a>
{% endfor %}
</div>
