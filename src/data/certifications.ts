import type { Certification } from './types'

// Most recent first.
// Paste the verification URL into credentialUrl to show a "View credential" link;
// leave it empty ('') when the certification has no public credential page.
// Put badge images in public/badges/ and set badge to their path (e.g. '/badges/aws.png')
// to show them on the Home section; certifications without a badge are not shown there.
export const certifications: Certification[] = [
  {
    id: 'databricks-de-professional',
    name: 'Databricks Certified Data Engineer Professional',
    issuer: 'Databricks',
    issued: '2026-09',
    expires: '2028-09',
    credentialId: '194134329',
    credentialUrl: 'https://credentials.databricks.com/1682d27b-9722-47b5-a7eb-2b9d10ce1922#acc.Zb0jmsCH',
    badge: 'https://www.databricks.com/sites/default/files/2025-10/professional-badge-de.png?v=1761143167',
  },
  {
    id: 'terraform-associate',
    name: 'HashiCorp Certified: Terraform Associate (004)',
    issuer: 'IBM',
    issued: '2026-07',
    expires: '2028-07',
    credentialUrl: 'https://www.credly.com/badges/4719151d-8d5b-4253-a286-54a86f26abd2/',
    badge: 'https://images.credly.com/size/340x340/images/6f614b71-3f2e-488e-8b29-71e90d4dbf80/blob',
  },
  {
    id: 'databricks-de-associate',
    name: 'Databricks Certified Data Engineer Associate',
    issuer: 'Databricks',
    issued: '2026-01',
    expires: '2028-01',
    credentialId: '172249480',
    credentialUrl: 'https://credentials.databricks.com/f6d77ea7-cadd-4ab1-9c8e-48b4bb4801a7#acc.jaV61w4g',
    badge: 'https://www.databricks.com/sites/default/files/2025-10/associate-badge-de.png?v=1780602421',
  },
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    issued: '2025-07',
    expires: '2028-07',
    credentialUrl: 'https://www.credly.com/badges/9a488844-2ac0-4bab-8d89-ad76801a6203/',
    badge: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
  },
  {
    id: 'dataiku-core-designer',
    name: 'Dataiku Core Designer',
    issuer: 'Dataiku',
    issued: '2024-07',
    credentialId: 'gt83ofz4asv2',
    credentialUrl: 'https://verify.skilljar.com/c/gt83ofz4asv2',
    badge: '',
  },
  {
    id: 'azure-fundamentals',
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    issued: '2024-04',
    credentialId: 'F7623E5A1048AF38',
    credentialUrl: 'https://learn.microsoft.com/es-es/users/miguelandreu-3043/credentials/f7623e5a1048af38',
    badge: 'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
  },
]
