import React, { memo } from 'react'
import logo from '../Images/Netflix_logo.svg'
import { Link } from 'react-router-dom'
import avatar from '../Images/Netflix-avatar.png'
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';


function Navbar(props) {
  const login = sessionStorage.getItem('loginToken')
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlelogout =()=>{
    sessionStorage.removeItem('loginToken')
    navigate('/')
    navigate(0)
  }
 
  
 
  return (
    <div className={`flex justify-between items-center px-14 pt-5 max-xs:px-5 ${login ? 'absolute top-0 z-10 w-full' : ''}`}>
      <img className='w-40 max-xs:w-28' src={logo} alt="" />
      {login ?
        <div className={`w-12 relative group ${props.islogin ? 'hidden' : ''}`}>
          <div className='cursor-pointer transition-all hover:border-2 hover:border-white'>
            <Tooltip title="Account settings">

              <div
                onClick={handleClick}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <img className='object-cover' src={avatar} alt="" />
              </div>

            </Tooltip>
          </div>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={()=>{navigate('/profile')}}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem >
              <Avatar /> Manage Profile
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handlelogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>


        </div>


        : <ul className='text-white flex gap-5 justify-center items-center capitalize'>
          <li className='border-2 py-1 px-4 rounded-sm max-xs:px-3'>english</li>
          <li className='bg-red-600 cursor-pointer px-4 py-[0.35rem] max-xs:px-3 text-base rounded-sm'><Link to='/login'>sign in</Link></li>
        </ul>}
    </div>
  )
}

export default memo(Navbar)