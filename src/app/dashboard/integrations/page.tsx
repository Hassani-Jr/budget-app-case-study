import * as React from 'react';
import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
import dayjs from 'dayjs';

import { config } from '@/config';
import { IntegrationCard } from '@/components/dashboard/integrations/integrations-card';
import type { Integration } from '@/components/dashboard/integrations/integrations-card';
import { CompaniesFilters } from '@/components/dashboard/integrations/integrations-filters';

export const metadata = { title: `Integrations | Dashboard | ${config.site.name}` } satisfies Metadata;

const integrations = [
  {
    id: 'INTEG-006',
    title: 'Mint',
    description: 'Mint is a free, web-based personal financial management service for the US and Canada.',
    logo: '/assets/mint-logo.png',
    availiable: 754,
    updatedAt: dayjs().subtract(12, 'minute').toDate(),
  },
  {
    id: 'INTEG-005',
    title: 'Headspace',
    description: 'Headspace is an English-American online healthcare company, specializing in meditation.',
    logo: '/assets/headspace-logo.jpeg',
    availiable: 892,
    updatedAt: dayjs().subtract(43, 'minute').subtract(1, 'hour').toDate(),
  },
  {
    id: 'INTEG-004',
    title: 'Wealthfront',
    description: 'Wealthfront is an automated investment service firm based in Palo Alto, California.',
    logo: '/assets/wealthfront-logo.jpeg',
    availiable: 670,
    updatedAt: dayjs().subtract(50, 'minute').subtract(3, 'hour').toDate(),
  },
  {
    id: 'INTEG-003',
    title: 'Fitbit',
    description: 'Fitbit is an American consumer electronics and fitness company.',
    logo: '/assets/fitbit-logo.jpeg',
    availiable: 1024,
    updatedAt: dayjs().subtract(7, 'minute').subtract(4, 'hour').subtract(1, 'day').toDate(),
  },
  {
    id: 'INTEG-002',
    title: 'Betterment',
    description: 'Betterment is an American financial advisory company which provides digital investment services.',
    logo: '/assets/betterment-logo.png',
    availiable: 758,
    updatedAt: dayjs().subtract(31, 'minute').subtract(4, 'hour').subtract(5, 'day').toDate(),
  },
  {
    id: 'INTEG-001',
    title: 'MyFitnessPal',
    description: 'MyFitnessPal is a smartphone app and website that tracks diet and exercise.',
    logo: '/assets/myfitnesspal-logo.jpeg',
    availiable: 1204,
    updatedAt: dayjs().subtract(25, 'minute').subtract(6, 'hour').subtract(6, 'day').toDate(),
  },
] satisfies Integration[];

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Deals</Typography>
        </Stack>
      </Stack>
      <CompaniesFilters />
      <Grid container spacing={3}>
        {integrations.map((integration) => (
          <Grid key={integration.id} lg={4} md={6} xs={12}>
            <IntegrationCard integration={integration} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination count={3} size="small" />
      </Box>
    </Stack>
  );
}
