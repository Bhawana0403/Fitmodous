import { Fragment, useEffect } from 'react'
import Prism from 'prismjs'
import BreadCrumbs from '@components/breadcrumbs'
import Card from '@components/card-snippet'
import AvatarInitials from './AvatarInitials'
import AvatarSizes from './AvatarSizes'
import AvatarColors from './AvatarColors'
import AvatarLightColors from './AvatarLightColors'
import AvatarIcons from './AvatarIcons'
import AvatarStatus from './AvatarStatus'
import AvatarGroup from './AvatarGroup'
import AvatarGroupTooltip from './AvatarGroupTooltip'
import {
  avatarColors,
  avatarLightColors,
  avatarInitials,
  avatarIcons,
  avatarSizes,
  avatarGroup,
  avatarGroupTooltip,
  avatarStatus
} from './AvatarSourceCode'
import { Table, Row, Col } from 'reactstrap'
const Avatar = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Fragment>    <br></br>    <br></br>    <br></br>
      <BreadCrumbs breadCrumbTitle='Total Views' breadCrumbParent='Dashboard' breadCrumbActive='Total Views' />
                <br></br>
      <Table>
      <thead>
        <tr>
          <th>Sl.No</th>
          <th>Videos</th>
          <th>Views</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Arms workout for women for standard</td>
          <td>1280</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Arms workout for women for standard</td>
          <td>780</td>
        </tr>   <tr>
          <th scope="row">3</th>
          <td>Arms workout for women for standard</td>
          <td>5580</td>
        </tr>   <tr>
          <th scope="row">4</th>
          <td>Arms workout for women for standard</td>
          <td>880</td>
        </tr>   <tr>
          <th scope="row">5</th>
          <td>Arms workout for women for standard</td>
          <td>780</td>
        </tr>   <tr>
          <th scope="row">6</th>
          <td>Arms workout for women for standard</td>
          <td>1280</td>
        </tr>   <tr>
          <th scope="row">7</th>
          <td>Arms workout for women for standard</td>
          <td>2180</td>
        </tr>
        <tr>
          <th></th>
          <th>Total Views</th>
          <th>12,897</th>
        </tr>
      </tbody>
    </Table>
    </Fragment>
  )
}
export default Avatar
