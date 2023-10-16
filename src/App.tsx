import { Toaster } from 'react-hot-toast'
import { I18nextProvider } from 'react-i18next'
import { QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'

import i18n from '@/lib/i18n.ts'
import queryClient from '@/lib/react-query.ts'
import { router } from '@/routes'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <Toaster />
        <RouterProvider router={router} />
      </I18nextProvider>
    </QueryClientProvider>
  )
}

export default App
