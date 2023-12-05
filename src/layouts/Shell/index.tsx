import { ROUTER } from '@/constants/path'
import { Routes, Route } from 'react-router-dom'
import { ButtonView } from '@/pages/Button'
import { Introduction } from '@/pages/Introduction'
import { Placeholder } from '@/pages/Placeholder'
import { DialogView } from '@/pages/Dialog'

import './style.scss'

export const Shell = () => {
  return (
    <div className='shell-container'>
      <Routes>
        <Route path='/' element={<Introduction />} />
        <Route path={ROUTER.INTRODUCTION} element={<Introduction />} />
        <Route path={ROUTER.BUTTON} element={<ButtonView />} />
        <Route path={ROUTER.DIALOG} element={<DialogView />} />
        <Route path='*' element={<Placeholder />} />
      </Routes>
    </div>
  )
}
