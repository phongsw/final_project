import {
  Stack,
  DefaultButton,
  PrimaryButton,
  IconButton,
  DashedButton,
  TextButton
} from '@gui/fluent-ui-allure'

export const SampleIcon = () => {
  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <DefaultButton iconProps={{ iconName: 'fas-rotate-right' }}>Outline</DefaultButton>

      <PrimaryButton className='button' iconProps={{ iconName: 'fas-rotate-right' }}>
        Filled button
      </PrimaryButton>

      <DashedButton iconProps={{ iconName: 'fas-plus' }}>Dashed button</DashedButton>

      <IconButton bordered iconProps={{ iconName: 'fas-layer-group' }}></IconButton>

      <TextButton style={{ minWidth: 0 }} iconProps={{ iconName: 'fas-layer-group' }}></TextButton>
    </Stack>
  )
}
