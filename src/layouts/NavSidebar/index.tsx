import { FontIcon, TooltipHost } from '@gui/fluent-ui-allure'
import { useLocation, NavLink, Link } from 'react-router-dom'
import { ROUTER } from '@/constants/path'
import { NavGroup } from '@/components/NavGroup'

import './style.scss'

const ExperimentalIcon = () => {
  return (
    <TooltipHost content='Not production verified'>
      <FontIcon style={{ color: '#0072d0', width: 16 }} iconName='fas-vial' />
    </TooltipHost>
  )
}

export const NavSidebar = () => {
  const { pathname } = useLocation()

  return (
    <div className='nav-panel nav-sidebar'>
      <NavGroup>Allure Design System</NavGroup>
      <NavLink
        className={() => {
          return ['/', ROUTER.INTRODUCTION].includes(pathname) ? 'nav-link active' : 'nav-link'
        }}
        to={ROUTER.INTRODUCTION}
      >
        Introduction
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.DESIGN_PRINCIPLE}>
        Design principle
      </NavLink>
      <Link
        className='nav-link'
        target='_blank'
        to='https://xd.adobe.com/view/34543319-c6da-4dd9-be05-fe7b01ae133b-6107/'
      >
        Design standard
      </Link>
      <NavLink className='nav-link' to={ROUTER.CHANGE_LOG}>
        Change log
      </NavLink>

      <NavGroup>Basic</NavGroup>
      <NavLink className='nav-link' to={ROUTER.BUTTON}>
        Button
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.ICON_GALLERY}>
        Icon Gallery
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.ICON}>
        Icon
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.COMMON_I18N_TERMS}>
        Common I18N Terms
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.COMMON_PRODUCT}>
        Common Product
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.TYPOGRAPHY}>
        Typography
      </NavLink>

      <NavGroup>Navigation</NavGroup>

      <NavLink className='nav-link' to={ROUTER.BREADCRUMB}>
        Breadcrumb
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.NAVIGATION_MENU}>
        Navigation Menu
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.NAVIGATION_MENU_LIGHT}>
        <ExperimentalIcon /> Navigation Menu Light
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.TAB}>
        Tab
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.TREE}>
        Tree
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.WIZARD}>
        Wizard
      </NavLink>

      <NavGroup>Form</NavGroup>
      <NavLink className='nav-link' to={ROUTER.AUTOCOMPLETE}>
        AutoComplete
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.AVATAR}>
        Avatar
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.CHECKBOX}>
        Checkbox
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.DATE_PICKER}>
        DatePicker
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.EXPANDER}>
        Expander
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.FILE_UPLOADER}>
        FileUploader
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.INPUT}>
        Input
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.PEOPLE_PICKER}>
        PeoplePicker
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.RADIO_BUTTON}>
        Radio button
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.SELECT}>
        Select
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.SWITCH}>
        Switch
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.TIME_PICKER}>
        TimePicker
      </NavLink>

      <NavGroup>Data</NavGroup>
      <NavLink className='nav-link' to={ROUTER.CALENDAR}>
        <ExperimentalIcon /> Calendar
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.CAROUSEL}>
        <ExperimentalIcon /> Carousel
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.FILTER}>
        Filters
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.PAGINATION}>
        Pagination
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.TABLE}>
        Table
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.TOOLTIP}>
        Tooltips
      </NavLink>

      <NavGroup>Feedback</NavGroup>
      <NavLink className='nav-link' to={ROUTER.MESSAGE}>
        Message
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.NOTIFICATION}>
        Notification
      </NavLink>

      <NavGroup>Others</NavGroup>
      <NavLink className='nav-link' to={ROUTER.DIALOG}>
        Dialog
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.MODAL}>
        Modal
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.LOADING}>
        Loading
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.PANEL}>
        Panel
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.POPOVER}>
        Popover
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.PROGRESS}>
        Progress
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.WAFFLE}>
        Waffle
      </NavLink>
      <NavLink className='nav-link' to={ROUTER.ACTIVITY_TIMELINE}>
        Activity timeline
      </NavLink>
    </div>
  )
}
