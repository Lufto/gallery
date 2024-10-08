import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Main from '../pages/main';
import queryClient from '../shared/api/queryClient';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<Main />
		</QueryClientProvider>
	</StrictMode>
);
