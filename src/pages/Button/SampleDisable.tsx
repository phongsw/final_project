import {
  Stack,
  DefaultButton,
  PrimaryButton,
  Link,
  IconButton,
  TextButton,
  DashedButton,
  Toggle,
  TooltipHost
} from '@gui/fluent-ui-allure'
import { useState } from 'react'

export const SampleDisable = () => {
  const [enableFocus, setEnableFocus] = useState<boolean>(false)
  return (
    <Stack>
      <Toggle
        checked={enableFocus}
        onChange={(_, checked) => {
          if (typeof checked === 'boolean') {
            setEnableFocus(checked)
          }
        }}
        label='Enable focus on disabled buttons'
        inlineLabel
      />
      <Stack horizontal tokens={{ childrenGap: 16 }}>
        <TooltipHost content='This button is disabled because we set disabled property'>
          <TextButton allowDisabledFocus={enableFocus} disabled>
            Normal button
          </TextButton>
        </TooltipHost>
        <TooltipHost content='This button is disabled because we set disabled property'>
          <DefaultButton allowDisabledFocus={enableFocus} disabled>
            Outline
          </DefaultButton>
        </TooltipHost>
        <TooltipHost content='This button is disabled because we set disabled property'>
          <DefaultButton
            allowDisabledFocus={enableFocus}
            disabled
            iconProps={{ iconName: 'fas-rotate-right' }}
          >
            Outline
          </DefaultButton>
        </TooltipHost>
        <TooltipHost content='This button is disabled because we set disabled property'>
          <PrimaryButton allowDisabledFocus={enableFocus} disabled>
            Filled button
          </PrimaryButton>
        </TooltipHost>
        <TooltipHost content='This button is disabled because we set disabled property'>
          <PrimaryButton
            allowDisabledFocus={enableFocus}
            disabled
            iconProps={{ iconName: 'fas-rotate-right' }}
          >
            Filled button
          </PrimaryButton>
        </TooltipHost>
        <TooltipHost
          styles={{ root: { display: 'flex !important' } }}
          content='This button is disabled because we set disabled property'
        >
          <Link disabled>Link button</Link>
        </TooltipHost>{' '}
        {/*disabled link doesn't support get focus */}
        <TooltipHost content='This button is disabled because we set disabled property'>
          <DashedButton allowDisabledFocus={enableFocus} disabled>
            Dashed button
          </DashedButton>
        </TooltipHost>
        <TooltipHost content='This button is disabled because we set disabled property'>
          <IconButton
            allowDisabledFocus={enableFocus}
            bordered
            disabled
            iconProps={{ iconName: 'fas-bell' }}
          ></IconButton>
        </TooltipHost>
      </Stack>
    </Stack>
  )
}
