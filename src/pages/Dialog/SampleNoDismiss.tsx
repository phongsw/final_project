import * as React from 'react'
import { PrimaryButton, DefaultButton, Dialog, DialogFooter } from '@gui/fluent-ui-allure'

export const SampleNoDismiss = () => {
  const [isDialogClosed, setDialogClosed] = React.useState(true)
  return (
    <div>
      <DefaultButton onClick={() => setDialogClosed(false)}>Open dialog</DefaultButton>
      <Dialog hidden={isDialogClosed} title='Confirm' maxWidth='480px'>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cumque, excepturi, veniam,
          odit quos eveniet laudantium ea aut amet in est possimus minima rerum explicabo ducimus
          quisquam optio! Alias, totam?
        </div>
        <DialogFooter>
          <PrimaryButton onClick={() => setDialogClosed(true)} text='OK' />
        </DialogFooter>
      </Dialog>
    </div>
  )
}
