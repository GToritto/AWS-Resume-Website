# AWS-Powered Resume Website
<<<<<<< HEAD
This project shows how I deployed a resume website using **Amazon S3** for hosting and **CloudFront** for secure, global content delivery.

## Features
- Static website hosting using Amazon S3.
- Secure content delivery via CloudFront with HTTPS.
- Efficient updates using AWS CLI and deployment scripts.

## Live Demo
[View the Website](https://d2xmrevo6wv6dp.cloudfront.net/index.html)

## Technologies Used
- **Amazon S3**: Static file hosting.
- **CloudFront**: Content delivery network with global edge locations.
- **AWS CLI**: File synchronization and cache invalidation.
- **HTML/CSS**: Website development.

## Deployment Steps
### AWS Setup
1. **Create an S3 Bucket**: Configure for static website hosting and set a bucket policy for public access.
2. **Set Up CloudFront**: Distribute content globally and enable HTTPS.
3. **Use AWS CLI**:
   - Sync files to S3: `aws s3 sync`
   - Invalidate CloudFront cache: `aws cloudfront create-invalidation`

### Deployment Automation
- **Sync Script**: Automates file uploads to S3.
- **Cache Invalidation Script**: Refreshes CloudFront content.

## Project Files
- `/AWS Resume Website`: Website source files.
- `/aws-setup`: AWS configurations like bucket policies.
- `/deployment-scripts`: Automation scripts for updates.

## Key Learnings
- Mastered S3 and CloudFront for hosting and content delivery.
- Automated deployments with AWS CLI.
- Overcame challenges like cache delays and permission settings.
