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
    credentialUrl: '',
    badge: '',
  },
  {
    id: 'terraform-associate',
    name: 'HashiCorp Certified: Terraform Associate (004)',
    issuer: 'IBM',
    issued: '2026-07',
    expires: '2028-07',
    credentialUrl: '',
    badge: '',
  },
  {
    id: 'databricks-de-associate',
    name: 'Databricks Certified Data Engineer Associate',
    issuer: 'Databricks',
    issued: '2026-01',
    expires: '2028-01',
    credentialId: '172249480',
    credentialUrl: '',
    badge: '',
  },
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    issued: '2025-07',
    expires: '2028-07',
    credentialUrl: '',
    badge: '',
  },
  {
    id: 'dataiku-core-designer',
    name: 'Dataiku Core Designer',
    issuer: 'Dataiku',
    issued: '2024-07',
    credentialId: 'gt83ofz4asv2',
    credentialUrl: '',
    badge: '',
  },
  {
    id: 'azure-fundamentals',
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    issued: '2024-04',
    credentialId: 'F7623E5A1048AF38',
    credentialUrl: '',
    badge: '',
  },
]
