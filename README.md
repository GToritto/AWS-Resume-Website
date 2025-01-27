# AWS-Powered Resume Website
This project demonstrates how I deployed a website using **Amazon S3** for static hosting, **CloudFront** for secure global content delivery, **AWS Lambda** and **API Gateway** for a serverless contact form, and **Amazon SES** for email functionality, with deployment automation via **AWS CLI**.

## Features
- Static website hosting using Amazon S3.
- Secure content delivery via CloudFront with HTTPS.
- Efficient updates using AWS CLI and deployment scripts.
- **Interactive Contact Form using AWS Lambda, API Gateway, and SES**.

## Live Demo
[View the Website](https://d2xmrevo6wv6dp.cloudfront.net/index.html)

## Technologies Used
- **Amazon S3**: Static file hosting.
- **CloudFront**: Content delivery network with global edge locations.
- **AWS CLI**: File synchronization and cache invalidation.
- **AWS Lambda**: Serverless function to process contact form submissions.
- **Amazon API Gateway**: Exposes a REST API for the contact form.
- **Amazon SES (Simple Email Service)**: Sends form submissions as emails.
- **HTML/CSS/JavaScript**: Frontend development.

## Deployment Steps
### AWS Setup
1. **Create an S3 Bucket**: Configure for static website hosting and set a bucket policy for public access.
2. **Set Up CloudFront**: Distribute content globally and enable HTTPS.
3. **Use AWS CLI**:
   - Sync files to S3: `aws s3 sync`
   - Invalidate CloudFront cache: `aws cloudfront create-invalidation`
4. **Deploy Contact Form Backend**:
   - Set up **Amazon SES** to verify the sending email and enable DKIM authentication.
   - Create an **AWS Lambda** function to handle contact form submissions.
   - Configure **Amazon API Gateway** to expose an endpoint for the contact form.

### Deployment Automation
- **Sync Script**: Automates file uploads to S3.
- **Cache Invalidation Script**: Refreshes CloudFront content.
- **AWS Lambda Function**: Automatically sends form submissions via SES.

## Project Files
- `/AWS Resume Website`: Website source files.
- `/aws-setup`: AWS configurations like bucket policies and SES setup.
- `/deployment-scripts`: Automation scripts for updates.

## Contact Form Details
- **Frontend**: A simple HTML form submits user data using JavaScript.
- **Backend**:
  - API Gateway receives the request and triggers the Lambda function.
  - Lambda processes the request and sends an email using SES.
  - The response is sent back to the frontend to display success/failure messages.

## Key Learnings
- Mastered S3 and CloudFront for hosting and content delivery.
- Automated deployments with AWS CLI.
- Built a serverless contact form using AWS Lambda, API Gateway, and SES.
- Configured SES for email authentication and DKIM verification.
- Overcame challenges like cache delays, IAM permissions, and CORS issues.

