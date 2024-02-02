import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box'
import './common.css'

export default function Common({name,description,bgcolor,pic,price,margin1}) {



  return (
    <div style={{justifyContent:"space-around"}}>
    <Card sx={{ maxWidth: 250 ,margin: margin1 }}>
      <Typography sx={{textAlign: 'center', marginY: 3, fontWeight: 'bold'}}>
        {name}
      </Typography>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <CardMedia
      sx={{width: 100, alignItems: 'center'}}
        component="img"
        image= {pic}
      />
      </Box>
      <CardContent sx={{backgroundColor: bgcolor , borderRadius: 2, marginTop: 3}}>
        <Typography>
          <p id='price'>{price}</p>
          {description}
          </Typography>
          </CardContent>
    </Card>
    </div>
  );
} 