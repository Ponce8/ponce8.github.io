# PHCCO website skeleton

This repository contains the reusable Jekyll skeleton for the PHCCO website. It follows the same page-oriented structure as `sarthak-sahoo-0710.github.io` without copying any personal biography, contact information, photographs, publications, metrics, or profiles.

## Add or edit a page

Pages live in `_pages/`. Each page begins with front matter:

```yaml
---
layout: page
title: Example page
permalink: /example/
nav: true
nav_order: 5
description: A short description of this page.
---
```

Write the page content below the second `---` using Markdown or HTML. Set `nav: true` to show it in the main navigation and use `nav_order` to control its position.

Shared HTML is in `_layouts/` and `_includes/`. Global colors and layout rules are in `assets/css/main.scss`. Site-wide settings, including the GitHub Pages base URL, are in `_config.yml`.

## Run locally

```bash
bundle exec jekyll serve
```

The production site is built and deployed by GitHub Pages from the `main` branch.
