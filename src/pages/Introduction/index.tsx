import * as React from 'react'
import { Link, HeadingText, HeadingType, Text } from '@gui/fluent-ui-allure'
import { PrimaryTitle, SecondaryTitle } from '../../components/Title'
import Logo from '@/assets/img/logo.png'
import Chrome from '@/assets/img/Chrome.png'
import Firefox from '@/assets/img/Firefox.png'
import Opera from '@/assets/img/Opera.png'
import Safari from '@/assets/img/Safari.png'
import Electron from '@/assets/img/Electron.png'
import Edge from '@/assets/img/Edge.jpg'
import CodeView from '@/components/CodeView'
import { SampleNmpStr, SampleReactStr } from '@/constants/codeString'

import './style.scss'

export const Introduction = () => {
  const textStyle: React.CSSProperties = {
    display: 'block',
    marginTop: 5
  }

  const codeStyle: React.CSSProperties = {
    border: '1px solid #F2F3F4',
    padding: 8,
    width: '100%'
  }

  return (
    <div>
      <img className='logo-intro' src={Logo} alt='Logo Image' />

      <PrimaryTitle title='Allure Design System'>
        This Allure design system contains both style and interaction guideline which can be applied
        to the online products of AvePoint. It can help us to build a consistency user experience
        for AvePoint customers.
      </PrimaryTitle>

      <SecondaryTitle title='WCAG2.0 supported'>
        <div>
          Web Content Accessibility Guidelines (WCAG) 2.0 covers a wide range of recommendations for
          making Web content more accessible. Following these guidelines will make content
          accessible to a wider range of people with disabilities, including blindness and low
          vision, deafness and hearing loss, learning disabilities, cognitive limitations, limited
          movement, speech disabilities, photosensitivity and combinations of these. Following these
          guidelines will also often make your Web content more usable to users in general.
        </div>
        <div className='mt-8'>
          <Link href='https://www.w3.org/TR/WCAG20/' underline>
            WCAG 2 Overview
          </Link>
        </div>
      </SecondaryTitle>

      <SecondaryTitle title='Environment Support'></SecondaryTitle>

      <table className='table-style-intro'>
        <tbody>
          <tr>
            <td className='cell-intro'>
              <img src={Edge} alt='img' />
              <HeadingText style={textStyle} type={HeadingType.Semibold}>
                Edge
              </HeadingText>
            </td>
            <td className='cell-intro'>
              <img src={Chrome} alt='img' />
              <HeadingText style={textStyle} type={HeadingType.Semibold}>
                Chrome
              </HeadingText>
            </td>
            <td className='cell-intro'>
              <img src={Firefox} alt='img' />
              <HeadingText style={textStyle} type={HeadingType.Semibold}>
                Firefox
              </HeadingText>
            </td>
            <td className='cell-intro'>
              <img src={Opera} alt='img' />
              <HeadingText style={textStyle} type={HeadingType.Semibold}>
                Opera
              </HeadingText>
            </td>
            <td className='cell-intro'>
              <img src={Safari} alt='img' />
              <HeadingText style={textStyle} type={HeadingType.Semibold}>
                Safari
              </HeadingText>
            </td>
            <td className='cell-intro'>
              <img src={Electron} alt='img' />
              <HeadingText style={textStyle} type={HeadingType.Semibold}>
                Electron
              </HeadingText>
            </td>
          </tr>
          <tr>
            <td className='cell-intro'>Latest 2 versions</td>
            <td className='cell-intro'>Latest 2 versions</td>
            <td className='cell-intro'>Latest 2 versions</td>
            <td className='cell-intro'>Latest 2 versions</td>
            <td className='cell-intro'>≥ 15</td>
            <td className='cell-intro'>Latest 2 versions</td>
          </tr>
        </tbody>
      </table>

      <SecondaryTitle title='Installation'>
        Since Allure UI is hosted on the feed{' '}
        <Link
          to='https://proget.avepoint.net/feeds/avepoint-npm/@gui/fluent-ui-allure'
          target='_blank'
        >
          avepoint-npm
        </Link>{' '}
        of Proget, you should create a .npmrc file under the root folder of your UI project.
      </SecondaryTitle>

      <CodeView style={codeStyle} code={SampleNmpStr} />

      <p>
        <Text style={textStyle}>Then install the Allure UI package:</Text>
      </p>

      <div className='code-intro'>npm install @gui/fluent-ui-allure</div>

      <SecondaryTitle title='Usage'>
        In the root file of your React App, import Allure UI and set the corresponding theme and
        language.
      </SecondaryTitle>

      <CodeView style={codeStyle} code={SampleReactStr} />
    </div>
  )
}
