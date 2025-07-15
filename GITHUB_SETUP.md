# GitHub Setup for NPM Publishing

To enable automatic NPM publishing, you need to configure the following in your GitHub repository:

## 1. NPM Token

1. Go to [npmjs.com](https://www.npmjs.com/) and log in
2. Go to your account settings > Access Tokens
3. Create a new "Automation" token (granular token recommended)
4. Copy the token

## 2. GitHub Secrets

1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Add a new repository secret:
   - Name: `NPM_TOKEN`
   - Value: The token you copied from NPM

## 3. Repository Settings

1. Ensure your repository is public (or you have a paid GitHub plan for private repos)
2. Make sure Actions are enabled in Settings > Actions > General

## 4. Publishing Process

Once set up, the publishing process is automated:

1. Update version in `package.json`
2. Update `CHANGELOG.md` with your changes
3. Create a new release on GitHub with a tag (e.g., `v1.5.0`)
4. The GitHub Action will automatically:
   - Run tests
   - Build the package
   - Publish to NPM with provenance

## 5. Manual Publishing (Alternative)

If you prefer manual publishing:

```shell
npm login
npm run prepublishOnly
npm publish --access public
```

## Security Notes

- The workflow uses NPM provenance for enhanced security
- Tokens are stored securely in GitHub Secrets
- The workflow only runs on official releases, not on every commit
