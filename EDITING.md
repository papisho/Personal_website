# Edit your website without coding

Start at https://papisho.github.io/Personal_website/admin/ or use **Owner login** in the website footer.

## One-time setup (you must complete this yourself)

1. Choose **Continue to GitHub sign-in** to open https://app.pagescms.org/.
2. Sign in as **papisho**.
3. Install/authorize the Pages CMS GitHub app. Select **Only select repositories → Personal_website**.
4. Open **Personal_website**, branch **main**. The `.pages.yml` configuration already supplies your forms.

The public `/admin/` page is a sign-in guide. Authentication and permission checks happen in Pages CMS and GitHub, not in browser JavaScript. There are no passwords or API tokens embedded in your site. The editor is hosted by a third party; its GitHub authorization is separate from ChatGPT's GitHub connection.

## Everyday edits

- **Profile & contact:** edit your introduction, photo, biography, interests, contact details, social links, and résumé link. An uploaded résumé PDF overrides the normal résumé page link; clear the PDF field to use the editable page again.
- **Projects:** edit the project cards. Add/remove or reorder entries in the list, set a status, upload an image, and enable **Show on website**. Leave the URL empty when a demo is not available. Use a complete `https://` URL for an external project.
- **Résumé:** edit the subtitle, sections, entries, and bullet points. Existing education and experience were preserved during the redesign; review dated information here as needed.
- **Notes & blog:** create a post, give it a title and date, write using the rich-text editor, and enable **Publish on website**. Don't choose a future date unless you intend to publish later; a fresh site build is needed after that date. The latest three posts appear on the homepage; all published posts appear under Notes.
- **Media:** upload photos or PDFs, then select them in the relevant form.

Click **Save**. This commits your content to the repository, and GitHub Pages rebuilds the site. Allow a few minutes, then reload the public site. There is no separate in-site Publish button.

All files in this public repository—including posts with publication disabled—are publicly readable. Do not store private drafts, passwords, or sensitive data here. Hidden/unpublished means hidden from website listings, not private storage.

## Troubleshooting

- Repository missing? Check that Pages CMS is installed for **papisho** and allowed to access **Personal_website**.
- Changes not visible? Confirm you saved to **main**, project visibility/post publication is enabled, and check the repository's **Actions** tab for “pages build and deployment”.
- Wrong image path? Select the image in the editor. Media paths are saved as `/Images/...`; the site automatically adds `/Personal_website`.
- Need to undo something? GitHub keeps content changes in commit history. A previous version can be restored without losing the rest of the site.

Documentation: https://pagescms.org/docs/quick-start/
