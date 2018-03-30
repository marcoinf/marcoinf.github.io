---
layout: page
title: Posts
permalink: /posts/
---
{% for post in site.posts %}	
<div class="post__content" markdown="0">
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p>{{ post.date | date: "%e de %B de %Y" }}</p>			
</div>
{% endfor %}
