# Kidus Assefa — personal website

A responsive portfolio built with GitHub Pages and its native Jekyll support.

- Website: https://papisho.github.io/Personal_website/
- Owner editor: https://papisho.github.io/Personal_website/admin/
- Editing instructions: [EDITING.md](EDITING.md)

## Content management

Pages CMS provides GitHub-authenticated forms. The owner must authorize its GitHub app for this repository once; no secrets are stored here. Updates to `main` trigger the existing GitHub Pages build.

| Content | Source |
| --- | --- |
| Profile, contact, links | `_data/profile.json` |
| Project cards | `_data/projects.json` |
| Résumé | `_data/resume.json` |
| Blog posts | `_posts/*.md` |
| Editor forms | `.pages.yml` |
| Shared presentation | `_includes/`, `_layouts/`, `assets/` |

Content is rendered into HTML by Jekyll; it works without client-side JavaScript. The small script only controls the mobile navigation. All URLs use the project-site base path. Project text and metadata are escaped; article body markup is authored only by repository editors.

The older example blog pages and old CSS/image assets remain in the repository for history and compatibility, but example posts are no longer promoted on the homepage. No published posts have been fabricated.

The VBA project has no public demo URL in the original repository, so its screenshot is shown without a broken “View Project” link. Add a URL through the editor when ready.
