---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
selected:
  - /publication/2026-chatgpt-ads
  - /publication/2026-federal-ai-transparency
  - /publication/2020-voter-centered-audits
selected_preprints:
  - /publication/preprint-llm-content-moderation
  - /publication/preprint-doxxing
---

{% include base_path %}

<style>
  .pub-intro {
    margin: 0 0 2em;
    padding: 1em 1.25em;
    border-left: 3px solid #52adc8;
    background: rgba(82, 173, 200, 0.07);
    border-radius: 0 4px 4px 0;
    font-size: 0.95em;
  }
  .pub-intro a { font-weight: 600; }

  .page__content h2 {
    margin-top: 1.75em;
    padding-bottom: 0.3em;
    border-bottom: 2px solid #52adc8;
    font-size: 1.4em;
  }

  .page__content h3 {
    margin: 1.5em 0 0.5em;
    font-size: 1.1em;
    opacity: 0.9;
  }

  .list__item {
    padding: 1em 0 1.1em;
    border-bottom: 1px solid rgba(128, 128, 128, 0.18);
    transition: padding-left 0.15s ease;
  }
  .list__item:hover { padding-left: 0.4em; }
  .list__item:last-child { border-bottom: 0; }

  .archive__item-title {
    margin-top: 0 !important;
    margin-bottom: 0.3em !important;
    font-size: 1.05em;
    line-height: 1.4;
  }

  .pub-cite {
    margin: 0.15em 0 !important;
    font-size: 0.9em;
    opacity: 0.85;
  }
  .pub-links {
    margin: 0.35em 0 0 !important;
    font-size: 0.85em;
  }
</style>


<h2>Selected Papers</h2>
{% for slug in page.selected %}
{% for post in site.publications %}
{% if post.permalink == slug %}
{% include pub-entry.html %}
{% endif %}
{% endfor %}
{% endfor %}

<h2>Selected Preprints</h2>
{% for slug in page.selected_preprints %}
{% for post in site.publications %}
{% if post.permalink == slug %}
{% include pub-entry.html %}
{% endif %}
{% endfor %}
{% endfor %}

<h2>All Publications</h2>
{% if site.publication_category %}
  {% for category in site.publication_category %}
    {% assign title_shown = false %}
    {% assign posts = site.publications | where: "category", category[0] | sort: "date" | reverse %}
    {% for post in posts %}
      {% unless title_shown %}
<h3>{{ category[1].title }}</h3>
        {% assign title_shown = true %}
      {% endunless %}
{% include pub-entry.html %}
    {% endfor %}
  {% endfor %}
{% else %}
  {% assign posts = site.publications | sort: "date" | reverse %}
  {% for post in posts %}
{% include pub-entry.html %}
  {% endfor %}
{% endif %}
