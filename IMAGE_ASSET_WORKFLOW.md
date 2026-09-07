# Balanergy image asset workflow

User-provided photos are uploaded to a stable public asset location before they are referenced in the website source. The source code in the repository stores the resulting URL, so each deployment can load the image without relying on a local sandbox path or a development-only storage proxy.

For a new photo, upload the original file with:

```bash
manus-upload-file /path/to/photo.webp
```

Use the returned `CDN URL` exactly as the image `src` in the relevant React component. Do not reference `/home/ubuntu/upload`, `/home/ubuntu/webdev-static-assets`, or `/manus-storage/...` in production page code. After verification in the preview, wait for explicit user confirmation before pushing the source change to GitHub.

The current Over Mij photo is referenced from a stable public URL in `client/src/pages/OverMij.tsx`. The binary source file remains outside the repository in accordance with the managed web project asset policy; the repository retains the source-code reference used by Vercel.
