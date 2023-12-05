import { Stack, Link } from '@gui/fluent-ui-allure'
import { SampleBasic } from './SampleBasic'
import { SampleDisable } from './SampleDisable'
import { SampleIcon } from './SampleIcon'
import { SampleContextMenu } from './SampleContextMenu'
import { SampleLoading } from './SampleLoading'
import { PrimaryTitle, SecondaryTitle } from '@/components/Title'
import { SampleViewer } from '@/components/SampleViewer'
import { SampleBtnBasicStr, SampleContextMenuStr } from '@/constants/codeString'

export const ButtonView = () => {
  return (
    <Stack>
      <PrimaryTitle title='Button'>Use Button to perform a specific action.</PrimaryTitle>

      <SecondaryTitle title='When to use'>
        <p>Use Primary buttons in situations where uers may need to:</p>
        <ul>
          <li>Submit a form (Submit , Apply, Save, OK, Cancel, Close)</li>
          <li>
            Begin a new task (Start, Create) - Specify a new or next step in a process (Back, Next)
          </li>
          <li>Others which are important</li>
        </ul>
        <p>
          Primary button always on the right . Please refer to principle{' '}
          <Link
            className='link'
            target='_blank'
            href='https://3.7designs.co/blog/2009/01/03/the-gutenburg-diagram-in-design/'
          >
            Gutenburg diagram
          </Link>{' '}
          (https://3.7designs.co/blog/2009/01/03/the-gutenburg-diagram-in-design/)
        </p>
      </SecondaryTitle>

      <SecondaryTitle title='Basic Usage'>
        Buttons are clickable items used to perform an action. It is better to make the recommended
        action on the page to be the primary button. In general, a button always has these five
        statuses: normal, hover, clicked, focused and disabled.
      </SecondaryTitle>

      <SampleViewer codeFile={SampleBtnBasicStr}>
        <SampleBasic />
      </SampleViewer>

      <SecondaryTitle title='Disable'></SecondaryTitle>

      <SampleViewer codeFile={SampleBtnBasicStr}>
        <SampleDisable />
      </SampleViewer>

      <SecondaryTitle title='Icon Button'></SecondaryTitle>

      <SampleViewer codeFile={SampleBtnBasicStr}>
        <SampleIcon />
      </SampleViewer>

      <SecondaryTitle title='Context Menu'></SecondaryTitle>

      <SampleViewer codeFile={SampleContextMenuStr}>
        <SampleContextMenu />
      </SampleViewer>

      <SecondaryTitle title='Loading'></SecondaryTitle>

      <SampleViewer codeFile={SampleContextMenuStr}>
        <SampleLoading />
      </SampleViewer>
    </Stack>
  )
}
