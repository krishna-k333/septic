# Blog SEO validation

Audit date: 2026-07-27

## Outcome

All eight blog articles were reviewed and updated. The production build passes, and the compiled-page crawl found no failures for the tested title, description, H1, canonical internal-link, article-image, Open Graph, and external-source checks.

## Page results

| Article | Title chars | Description chars | H1 | Article OG | Unique image | External sources |
| --- | ---: | ---: | ---: | --- | --- | ---: |
| Emergency Septic Problems: What to Do Before Help Arrives | 57 | 154 | 1 | Pass | Pass | 3 |
| How Often to Pump a Septic Tank in Texas | 48 | 159 | 1 | Pass | Pass | 3 |
| How to Choose a Septic Company in Houston | 56 | 154 | 1 | Pass | Pass | 3 |
| Houston Hurricane Season: Septic System Guide | 45 | 156 | 1 | Pass | Pass | 3 |
| Houston Septic Pumping Cost: Complete 2026 Guide | 48 | 153 | 1 | Pass | Pass | 3 |
| Septic Pumping vs Cleaning: What Is the Difference? | 51 | 159 | 1 | Pass | Pass | 3 |
| 7 Signs Your Septic Tank Needs Repair in Houston | 53 | 151 | 1 | Pass | Pass | 3 |
| Texas Septic Rules for Houston Homeowners | 41 | 150 | 1 | Pass | Pass | 3 |

The blog index title is 44 characters and its description is 155 characters.

## Changes made

- Reworked titles and meta descriptions around clear search intent.
- Replaced generic or repetitive headings with direct homeowner questions.
- Removed unsupported response-time, provider, price-detail, and diagnostic claims.
- Corrected flood guidance using current CDC advice.
- Added visible source sections using EPA, CDC, and TCEQ primary guidance.
- Added `BlogPosting` description, image, publisher, published date, and modified date.
- Set article pages to `og:type=article` and gave each article its own social image.
- Added one original 1200 by 800 WebP image to every article with descriptive alt text, explicit dimensions, and a contextual caption.
- Linked articles to relevant services, area pages, and related guides.
- Added three contextual guide links to every service detail page, creating return paths from commercial pages to the blog.
- Rebuilt the blog index as an image-led guide directory with descriptive anchors to all eight articles.

## Internal-link structure

- Blog index to articles: all 8 articles linked.
- Article to service/area/guide pages: at least 5 contextual destinations per article.
- Service detail page to guides: 3 relevant blog links on each of 6 service pages.
- Broken internal links in compiled article crawl: 0.

## Image set

All images were generated specifically for their article, then converted to 1200 by 800 WebP at quality 82:

- `septic-pumping-cost-houston.webp`
- `how-often-pump-septic-tank-texas.webp`
- `signs-septic-tank-needs-repair.webp`
- `septic-pumping-vs-cleaning.webp`
- `texas-septic-tank-regulations.webp`
- `emergency-septic-what-to-do.webp`
- `how-to-choose-septic-company-houston.webp`
- `hurricane-season-septic-system-houston.webp`

## Verification

- `npm run build`: passed, 34 static pages built.
- Compiled article crawl: 8 of 8 passed the tested SEO checks.
- Every article has one H1, `og:type=article`, article-specific WebP media, explicit 1200 by 800 dimensions, non-empty alt text, `BlogPosting` schema, and `dateModified=2026-07-27`.
- Every service detail page renders three contextual blog links.

Search rankings and indexing are not guaranteed by on-page changes. Search Console indexing, live canonical behavior, and real-user performance should be checked after deployment.
