import { Stack } from '@gui/fluent-ui-allure'
import { SampleViewer } from '@/components/SampleViewer'
import { SampleBasic } from './SampleBasic'
import { SampleNoDismiss } from './SampleNoDismiss'
import { PrimaryTitle, SecondaryTitle } from '@/components/Title'
import { SampleBasicStr, SampleNoDismissStr } from '@/constants/codeString'
import useTranslate from '@/hooks/useTranslate'

export const DialogView = () => {
  const translate = useTranslate

  return (
    <Stack>
      <PrimaryTitle title={translate('titleDialog')}>{translate('subTitleDialog')}</PrimaryTitle>

      <SecondaryTitle title={translate('noteUseTitle')}>
        <p>{translate('noteUseContentFirst')}</p>
        <p>{translate('noteUseContentSecond')}</p>
      </SecondaryTitle>

      <SecondaryTitle title={translate('basicUsage')}>
        <p style={{ textDecoration: 'underline' }}>{translate('layout')}</p>
        {translate('contentLayout')}
        <p style={{ textDecoration: 'underline' }}>{translate('header')}</p>
        {translate('headerContent')}
        <p style={{ textDecoration: 'underline' }}>{translate('button')}</p>
        {translate('buttonContent')}
      </SecondaryTitle>

      <SampleViewer codeFile={SampleBasicStr}>
        <SampleBasic />
      </SampleViewer>

      <SecondaryTitle title={translate('confirm')}></SecondaryTitle>

      <SampleViewer codeFile={SampleNoDismissStr}>
        <SampleNoDismiss />
      </SampleViewer>
    </Stack>
  )
}
