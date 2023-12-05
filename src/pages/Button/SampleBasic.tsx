import {
  Stack,
  DefaultButton,
  PrimaryButton,
  Link,
  TextButton,
  DashedButton
} from '@gui/fluent-ui-allure'

export const SampleBasic = () => {
  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <TextButton title='Normal Button'>Normal button</TextButton>

      <DefaultButton>Outline</DefaultButton>

      <PrimaryButton className='button'>Filled Button</PrimaryButton>

      <DashedButton>Dashed button</DashedButton>

      <Link underline className='link'>
        Link button
      </Link>
    </Stack>
  )
}
