import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { log } from '../utils/utils';
// import { BadgeProps } from '@mui/material';


// const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CustomizedBadges(props) {
    const navigate= useNavigate()
    const {count} =props
    log("count---"+count)


  return (
    <IconButton aria-label="cart" style={{paddingRight:20}}>
      <StyledBadge badgeContent={count} color="secondary">
          <img src="http://localhost:3000/images/cart.png" onClick={()=>{navigate("/Cart")}} alt="cart" style={{height: 61, paddingTop: 5, paddingRight: 0}} />
        
        {/* <ShoppingCartIcon /> */}
      </StyledBadge>
    </IconButton>
  );
}
