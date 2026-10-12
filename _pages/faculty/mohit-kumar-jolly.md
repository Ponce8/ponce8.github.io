---
layout: person
title: Mohit Kumar Jolly
permalink: /faculty/mohit-kumar-jolly/
person_id: mohit-kumar-jolly
description: Faculty profile for Mohit Kumar Jolly, PHCCO lead organiser.
---

<section class="record-section">
  <h2>Collaborations in this directory</h2>
  <div class="collaboration-index">
  {% for collaboration in site.data.collaborations %}
    {% assign collaborator = site.data.people | where: 'id', collaboration.faculty_id | first %}
    <a href="{{ '/collaborations/' | append: collaboration.id | append: '/' | relative_url }}">
      <strong>{{ collaborator.name }}</strong><span>{{ collaboration.focus }}</span>
    </a>
  {% endfor %}
  </div>
</section>
